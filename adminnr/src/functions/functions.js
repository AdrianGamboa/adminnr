import axios from 'axios';
import swal from 'sweetalert';

const Url = 'http://127.0.0.1:8000/api/';
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

const login = async (data) => {
    await axios.post(Url+'login', data, axiosConfig)
        .then((response) => {
            if (response.data.message === 'Authorized') {
                window.location.href="../home";
            }
            else if (response.data.message === 'Unauthorized') {
                swal({
                    title: 'Error al iniciar sesión',
                    text: 'Correo o contraseña incorrecto',
                    icon: 'error',
                    buttons: 'Aceptar'
                });
            }
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

const getProducts = async (setProducts, setTableProducts) => {
    await axios.get(Url+'get_products')
        .then(response => {
            setProducts(response.data);
            setTableProducts(response.data);
        })
        .catch(error => { console.log(error); });
}

const insertProductP = async (setIsLoading, product) => {

    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.post(Url+'add_product', product)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

const deleteProductP = async (setIsLoading, product_id) => {

    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.delete(Url+'delete_product/'+product_id)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);            

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

export {
    getProducts,
    insertProductP, deleteProductP, login
}