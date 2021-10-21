const $ = id => document.getElementById(id);





window.addEventListener('load', () => {
    console.log("conectado con carga de productos")

    $('name').addEventListener('blur', () => {
        if (!$('name').value.trim()) {
            $('name').classList.add('danger')
            $('error-name').innerHTML = "El nombre es obligatorio"
        } else {
            $('name').classList.remove('danger')
            $('name').classList.add('validate')
            $('error-name').innerHTML = null
        }
    })
    $('description').addEventListener('blur', () => {
        if (!$('description').value.trim()) {
            $('description').classList.add('danger')
            $('error-description').innerHTML = "Agrega la descripcion del producto"
        } else {
            $('description').classList.remove('danger')
            $('description').classList.add('validate')
            $('error-description').innerHTML = null
        }
    })
    $('stock').addEventListener('blur', () => {
        if (!$('stock').value.trim()) {
            $('stock').classList.add('danger')
            $('error-stock').innerHTML = "Agrega el stock disponible"
        } else {
            $('stock').classList.remove('danger')
            $('stock').classList.add('validate')
            $('error-stock').innerHTML = null
        }
    })
    $('price').addEventListener('blur', () => {
        if (!$('price').value.trim()) {
            $('price').classList.add('danger')
            $('error-price').innerHTML = "Agrega el precio"
        } else {
            $('price').classList.remove('danger')
            $('price').classList.add('validate')
            $('error-price').innerHTML = null
        }
    })
    $('discount').addEventListener('blur', () => {
        if (!$('discount').value.trim()) {
            $('discount').classList.add('danger')
            $('error-discount').innerHTML = "Agrega el descuento( 0% a 100%)"
        } else {
            $('discount').classList.remove('danger')
            $('discount').classList.add('validate')
            $('error-discount').innerHTML = null
        }
    })
    $('category').addEventListener('blur', () => {
        if (!$('category').value.trim()) {
            $('category').classList.add('danger')
            $('error-category').innerHTML = "Debes elegir la categoria"
        } else {
            $('category').classList.remove('danger')
            $('category').classList.add('validate')
            $('error-category').innerHTML = null
        }
    })
  
    
    




    $('product-form').addEventListener('submit', e => {
        e.preventDefault();
        let elementosForm = $('product-form').elements;
        let error = false;
        for (let i = 0; i < elementosForm.length - 1; i++) {

            if (!elementosForm[i].value) {
                elementosForm[i].classList.add('danger')
                $('error-empty').innerHTML = 'Los campos señalados son obligatorios';
                error = true
            }
        }
       
        if (!error) {
            $('product-form').submit()
        }
    })
})