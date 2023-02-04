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
                localStorage.setItem('user-data', JSON.stringify(response.data.user));
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

const logout = async () => {
    const data = {
        token: localStorage.getItem('user-token')
    }
    await axios.post(Url + 'logout', data , {headers:{'Authorization': 'Bearer ' + localStorage.getItem('user-token')}})
        .then((response) => {
            if (response.data.status === '200') {                
                localStorage.clear();         
                window.location.href = "../login";             
            }
            else {
                swal({
                    title: 'Error al cerrar sesión',                    
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

const getSales = async (setSales, setTableSales) => {
    document.body.style.pointerEvents = 'none'; //Desactiva clicks
    await axios.get(Url + 'get_sales', axiosConfigAuth)
        .then(response => {
            var data = [];
            response.data.forEach(element => {
                var item_exists = data.find(obj => {
                    return obj.id === element.sell_id;
                });

                if (!item_exists) { //Si no existe
                    var item = {
                        id: element.sell_id,
                        total_price: element.total_price,
                        subtotal_price: element.subtotal_price,
                        tax: element.tax,
                        discount: element.discount,
                        date: element.date,
                        state: element.state,
                        user_id: element.id,
                        user_name: element.name + ' ' + element.lastname,                        
                        items: [{
                            sells_description_id: element.sells_description_id,
                            item_id: element.product_id ? element.product_id : element.service_id,
                            item_name: element.product_name ? element.product_name : element.service_name,
                            item_price: element.item_price,
                            amount: element.amount
                        }]
                    }

                    data.push(item);
                }
                else { //Si existe, le agrega productos
                    item_exists.items.push({
                        sells_description_id: element.sells_description_id,
                        item_id: element.product_id ? element.product_id : element.service_id,
                        item_name: element.product_name ? element.product_name : element.service_name,
                        item_price: element.item_price,
                        amount: element.amount
                    });
                }
            });

            setSales(data);
            setTableSales(data);
            document.body.style.pointerEvents = 'all'; //Activa clicks
        })
        .catch(error => { console.log(error); });
}

export {
    login, logout,
    getProducts, insertProductP, updateProductP, deleteProductP,
    getServices, insertServiceP, updateServiceP, deleteServiceP,
    getSales, insertSell,
}