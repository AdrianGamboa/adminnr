import axios from 'axios';
import swal from 'sweetalert';

const Url = 'http://127.0.0.1:8000/api/';

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
    }
};

const axiosConfigAuth = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
    }
};

const login = async (data) => {
    await axios.post(Url + 'login', data, axiosConfig)
        .then((response) => {
            if (response.data.message === 'Authorized') {
                document.getElementById("main").classList.remove("mainL");
                localStorage.setItem('user-token', response.data.access_token);
                window.location.href = "../home";
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

//Products

const getProducts = async (setProducts, setTableProducts) => {    
    await axios.get(Url + 'get_products', axiosConfigAuth)
        .then(response => {
            setProducts(response.data);
            setTableProducts(response.data);
        })
        .catch(error => { console.log(error); });
}

const insertProductP = async (setIsLoading, product) => {
    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.post(Url + 'add_product', product, axiosConfigAuth)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}
const updateProductP = async (setIsLoading, product) => {
    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.post(Url + 'update_product/'+product.product_id, product, axiosConfigAuth)
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

    await axios.delete(Url + 'delete_product/' + product_id, axiosConfigAuth)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);            

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

//Services

const getServices = async (setServices, setTableServices) => {    
    await axios.get(Url + 'get_services', axiosConfigAuth)
        .then(response => {
            setServices(response.data);
            setTableServices(response.data);
        })
        .catch(error => { console.log(error); });
}

const insertServiceP = async (setIsLoading, service) => {
    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.post(Url + 'add_service', service, axiosConfigAuth)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}
const updateServiceP = async (setIsLoading, service) => {
    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.post(Url + 'update_service/'+service.service_id, service, axiosConfigAuth)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

const deleteServiceP = async (setIsLoading, service_id) => {
    setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.delete(Url + 'delete_service/' + service_id, axiosConfigAuth)
        .then((response) => {

            setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);            

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

//Sells

const insertSell = async (sell) => {
    // setIsLoading(true); //Activa el mensaje de cargando
    document.body.style.pointerEvents = 'none'; //Desactiva clicks

    await axios.post(Url + 'add_sell', sell, axiosConfigAuth)
        .then((response) => {

            // setIsLoading(false); //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
            // console.log(response.data);
            return response;

        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

export {
    login,
    getProducts, insertProductP, updateProductP, deleteProductP,
    getServices, insertServiceP, updateServiceP, deleteServiceP,
    insertSell,
}