
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;


window.addEventListener('load', () => {
    console.log('registerValidator connected success');


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

    $('name').addEventListener('blur', () => {
        if(!$('name').value.trim()){
            $('name').classList.add('is-invalid')
            $('error-name').innerHTML = "El nombre es obligatorio"
        }else{
            $('name').classList.remove('is-invalid')
            $('name').classList.add('is-valid')
            $('error-name').innerHTML = null
        }
    })

    $('lastname').addEventListener('blur', () => {
        if(!$('lastname').value.trim()){
            $('lastname').classList.add('is-invalid')
            $('error-lastname').innerHTML = "El apellido es obligatorio"
        }else{
            $('lastname').classList.remove('is-invalid')
            $('lastname').classList.add('is-valid')
            $('error-lastname').innerHTML = null
        }
    })

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
        $('error-password').innerHTML = "La contraseña debe tener entre 8 y 15 caractres, un número y una mayúscula"
    })

    $('password').addEventListener('blur', () => {
        if(!regExPass.test($('password').value)){
            $('password').classList.add('is-invalid')
            $('error-password').innerHTML = "La contraseña debe cumplir con estándares"
        }else{
            $('password').classList.remove('is-invalid')
            $('password').classList.add('is-valid')
            $('error-password').innerHTML = null
        }
    })

    $('password2').addEventListener('blur', () => {
        if($('password').value.trim() !== $('password2').value.trim()){
            $('password2').classList.add('is-invalid')
            $('error-password2').innerHTML = "La validación de la contraseña no coincide"
        }else{
            $('password2').classList.remove('is-invalid')
            $('password2').classList.add('is-valid')
            $('error-password2').innerHTML = null
        }
    })

    $('acepta').addEventListener('click', () => {
        $('acepta').classList.toggle('is-valid')
        $('acepta').classList.remove('is-invalid')
        $('error-acepta').innerHTML = null
    })

/* envio del formulario */

$('form-register').addEventListener('submit', e => {
    e.preventDefault();

    let elemnetosForm = $('form-register').elements;
    
    let error = false;

    const emailOk = emailVerify($('email').value);

    emailOk.then(result =>{

        if(result.user && typeof(result)!= 'boolean'){
            $('error-email').innerHTML = 'El email ingresado no esta disponible';
            $('email').classList.add('is-invalid');
            error = true
        }else{
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
            $('error-email').innerHTML = null
        } 
    
        for (let i = 0; i < elemnetosForm.length - 1; i++) {
            
            if(!elemnetosForm[i].value){
                elemnetosForm[i].classList.add('is-invalid')
                $('error-empty').innerHTML = 'Los campos señalados son obligatorios';
                error = true
            }
        }
    
        if(!$('acepta').checked){
            $('acepta').classList.add('is-invalid')
            $('error-acepta').innerHTML = "Debes aceptar los términos y condiciones";
            error = true
        }
        if(!error){
            $('form-register').submit()
        }

    })
    
})

})