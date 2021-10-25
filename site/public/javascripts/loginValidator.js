let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

window.addEventListener('load', () => {
    console.log('loginValidator connected success');


    const emailVerify = async (email) => {
        if(email){

            try {
                const response = await fetch(`/users/email/${email}`);
                const result = await response.json();
                return result;
            } catch (error) {
                console.log(error)
            }

        }else{
            return false
        }

    }

/* validaciones */

    $('email').addEventListener('blur', () => {
        if(!regExEmail.test($('email').value)){
            $('email').classList.add('is-invalid')
            $('error-email').innerHTML = "Debes ingresar un email válido"
        }else{
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
            $('error-email').innerHTML = null
        }
    })

    $('password').addEventListener('focus', () => {
        $('password').classList.remove('is-invalid')
    })
    $('email').addEventListener('focus', () => {
        $('email').classList.remove('is-invalid')
    })

/* envio del formulario */

$('form-login').addEventListener('submit', e => {
    e.preventDefault();

    let elementosForm = $('form-login').elements;

    let error = false;

    const emailOk = emailVerify($('email').value);

    emailOk.then(result=>{
        if(!result.user && typeof(result)!= 'boolean'){
            $('error-email').innerHTML = 'El email ingresado no existe';
            $('email').classList.add('is-invalid');
            error = true
        }else{
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
            $('error-email').innerHTML = null
        } 
        for (let i = 0; i < elementosForm.length - 1; i++) {
            
            if(!elementosForm[i].value){
                elementosForm[i].classList.remove('is-valid')
                elementosForm[i].classList.add('is-invalid')
                $('error-empty').innerHTML = 'Los campos señalados son obligatorios';
                error = true
            }
        }
    
        if(!error){
            $('form-login').submit()
        }
    });
})

})