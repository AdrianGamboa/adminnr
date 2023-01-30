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
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.get(Url + 'get_products', axiosConfigAuth)
        .then(response => {
            setProducts(response.data);
            setTableProducts(response.data);
            document.body.style.pointerEvents = 'all'; //Activa clicks
        })
        .catch(error => { console.log(error); });
}

const insertProductP = async (product) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.post(Url + 'add_product', product, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}
const updateProductP = async (product) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.post(Url + 'update_product/' + product.product_id, product, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

const deleteProductP = async (product_id) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.delete(Url + 'delete_product/' + product_id, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

//Services

const getServices = async (setServices, setTableServices) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.get(Url + 'get_services', axiosConfigAuth)
        .then(response => {
            setServices(response.data);
            setTableServices(response.data);
            document.body.style.pointerEvents = 'all'; //Activa clicks
        })
        .catch(error => { console.log(error); });
}

const insertServiceP = async (service) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.post(Url + 'add_service', service, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}
const updateServiceP = async (service) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.post(Url + 'update_service/' + service.service_id, service, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

const deleteServiceP = async (service_id) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.delete(Url + 'delete_service/' + service_id, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks     
        }).catch(error => {
            console.error('Hubo un error!', error);
        });
}

//Sells

const insertSell = async (sell) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.post(Url + 'add_sell', sell, axiosConfigAuth)
        .then((response) => {
            document.body.style.pointerEvents = 'all'; //Activa clicks
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