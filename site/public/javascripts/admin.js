console.log('admin connected success');

const confirmRemove = (e,form) => {
    e.preventDefault()

    Swal.fire({
        title: '¿Estás seguro que deseas eliminar el producto?',
        text: "¡Luego no podrás revertir los cambios!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            form.submit()
        }
    })
};