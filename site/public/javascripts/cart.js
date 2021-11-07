
    console.log('cart connected success');
    const showCart  = (data) =>{
    let cantidad = 0;
    data.forEach(e => {
        cantidad += e.quantity;
    });
    $('cartQuantity').innerHTML = `${cantidad}`;
    }

    const refresh = async () => {
    try {
        const url = '/products/carrito';
        const response = await fetch(url);
        const result = await response.json();
        showCart(result);
    } catch (error) {
        console.log(error)
    }
    }
    
    const agregarItem = async (id, role) => {
        if(role!= undefined){
            try {
                console.log('Entre a agregar item');
                const url = `/products/addCarrito/${id}`;
                const response = await fetch(url);
                const result = await response.json();
                refresh()
            } catch (error) {
                console.log(error);
            }
        }else{
            loginAlert()
        }
    }

    const eliminarItem = async (id) => {
        try {
            console.log('Entre a eliminar item');
            const url = `/products/removeCarrito/${id}`;
            const response = await fetch(url);
            const result = await response.json();
            refresh()
            location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const loginAlert = () => {    
        Swal.fire('Debes loguearte para agregar productos al carrito!');
    };

    refresh();
