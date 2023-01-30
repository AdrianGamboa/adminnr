import React, { useContext, useEffect, useState } from 'react'

import "../styles/inventory.css";
import "../styles/loading.css";

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { getServices, insertServiceP, updateServiceP, deleteServiceP } from '../functions/functions';
import { Pagination } from '../components/pagination';
import { Loader } from '../components/loader';
import swal from 'sweetalert';
import M from "materialize-css";
import { StoreContext } from '../store/storeProvider';
import { types } from '../store/storeReducer';

function ServicesPage() {

    const [services, setServices] = useState([]); //Con los datos dinámicos
    const [tableServices, setTableServices] = useState([]); //Con los datos estáticos
    const [search, setSearch] = useState(''); //Contenido del input buscar
    const [currentPage, setCurrentPage] = useState(1); //La página en la que se encuentra actualmente
    const amountPerPage = 5; //Cantidad de registros por página
    const maxPages = Math.ceil(services.length / amountPerPage); //Calcula la cantidad de páginas

    const [isEditing, setIsEditing] = useState(false); //Para saber si se está editando el servicio
    const [isWatching, setIsWatching] = useState(false); //Para saber si se está viendo el servicio

    const [store, dispatch] = useContext(StoreContext);

    //Variables de los servicios
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [registration_date, setRegistration_date] = useState('');

    const confirmDeleteService = (serviceId) => {
        swal({
            title: 'Eliminar',
            text: '¿Seguro que quiere eliminar este servicio?',
            icon: 'warning',
            buttons: ['No', 'Si']
        }).then(result => {
            if (result) {
                dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando
                //Hace el delete
                deleteServiceP(serviceId).then((result) => {
                    getServices(setServices, setTableServices);
                    setCurrentPage(1);
                    dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
                    swal({
                        text: 'El servicio ha sido eliminado',
                        icon: 'success'
                    })
                });
            }
        })
    }

    const handleChange = e => { //Cuando escribe en la barra de búsqueda
        setSearch(e.target.value);
        filterServices(e.target.value);
    }

    const filterServices = (searchTerm) => {
        var searchResults = tableServices.filter((element) => {
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
                || element.service_id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return element;
            }
        })
        setCurrentPage(1);
        setServices(searchResults);
    }

    const insertService = () => {
        const service = {
            name: name,
            price: price,
            state: 1,
            registration_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
            description: description != '' ? description : 'Sin descripción'
        };

        //Cierra modal
        const modal = document.querySelector('#modal_service');
        var instance = M.Modal.getInstance(modal);
        instance.close();

        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

        insertServiceP(service).then((result) => {

            getServices(setServices, setTableServices);
            setCurrentPage(1);

            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando

            swal({
                title: 'Éxito',
                text: 'Servicio guardado correctamente',
                icon: 'success',
                buttons: 'Aceptar'
            }).then(result => {
                if (result) {
                    //Limpia variables y reinicia inputs
                    cleanVariables();
                }
            });

        });
    }

    const selectService = (service_id) => {

        const service = tableServices.find(obj => {
            return obj.service_id === service_id;
        });

        setId(service.service_id);
        setName(service.name);
        setPrice(service.price);
        setDescription(service.description);
        setRegistration_date(service.registration_date);
        activeInputs();
    }

    const updateService = () => {
        const service = {
            service_id: id,
            name: name,
            price: price,
            state: 1,
            registration_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
            description: description != '' ? description : 'Sin descripción'
        };

        //Cierra modal
        const modal = document.querySelector('#modal_service');
        var instance = M.Modal.getInstance(modal);
        instance.close();

        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

        updateServiceP(service).then((result) => {
            getServices(setServices, setTableServices);
            setCurrentPage(1);

            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando

            swal({
                title: 'Éxito',
                text: 'Servicio guardado correctamente',
                icon: 'success',
                buttons: 'Aceptar'
            }).then(result => {
                if (result) {
                    //Limpia variables y reinicia inputs
                    cleanVariables();
                }
            });
        });
    }

    const cleanVariables = () => {
        setId('');
        setName('');
        setPrice('');
        setDescription('');
        inactiveInputs();
    }

    const inactiveInputs = () => {
        var elems = document.getElementsByClassName('formLbl');
        if (elems.length) {
            for (let index = 0; index < elems.length; index++) {
                elems[index].classList.remove('active');
            }
        }
    }
    const activeInputs = () => {
        var elems = document.getElementsByClassName('formLbl');
        if (elems.length) {
            for (let index = 0; index < elems.length; index++) {
                elems[index].classList.add('active');
            }
        }
    }

    useEffect(() => {

        document.body.style.pointerEvents = 'none'; //Desactiva clicks
        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

        getServices(setServices, setTableServices).then(() => {
            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
        });
    }, [])

    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><HomeRepairServiceIcon fontSize='large' /></h5>
                        <h5 >Servicios</h5>
                    </div>
                </div>

                <div className='center main-content' id='page-content'>
                    <div className="row" style={{ margin: '30px 20px 20px 20px', paddingTop: '20px' }}>
                        <div className="input-field  col s12 m9">
                            <i className="prefix"><SearchIcon fontSize='large' /></i>
                            <input value={search} onChange={handleChange} placeholder="Buscar por nombre o código" id="search" type="text"></input>
                        </div>
                        <div className='input-field col s12 m3'>
                            <button onClick={() => { cleanVariables(); setIsEditing(false); setIsWatching(false); }} data-target="modal_service" className="btn waves-effect waves-teal modal-trigger">Nuevo servicio</button>
                        </div>
                    </div>

                    {/* START TABLE */}
                    {
                        services !== [] && services.length > 0
                            ? <div style={{ margin: '0px 20px 0px 20px' }}>
                                <table className="centered striped responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            services.slice((currentPage - 1) * amountPerPage, (currentPage - 1) * amountPerPage + amountPerPage)
                                                .map(service => (
                                                    <tr key={service.service_id}>
                                                        <td width={'15%'} >{service.service_id}</td>
                                                        <td width={'25%'} >{service.name}</td>
                                                        <td width={'20%'} >{service.price}</td>
                                                        <td width={'20%'}>
                                                            <a onClick={() => { setIsEditing(false); setIsWatching(true); selectService(service.service_id); }} className='modal-trigger' href="#modal_service" style={{ marginRight: '5px' }}><i className="material-icons">visibility</i></a>
                                                            <a onClick={() => { setIsEditing(true); setIsWatching(false); selectService(service.service_id); }} className='modal-trigger' href="#modal_service" style={{ marginRight: '5px' }}><i className="material-icons">edit</i></a>
                                                            <a href="#!" onClick={() => confirmDeleteService(service.service_id)} ><i className="material-icons">delete</i></a>
                                                        </td>
                                                    </tr>
                                                ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            : <div>No se encontraron datos</div>
                    }

                    {/* END TABLE */}
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} />
                </div>
                {/* <!-- Modal Structure --> */}
                <div id="modal_service" className="modal">
                    <div className="modal-content">
                        <div className='center'>
                            {isEditing ? <h4>Editar servicio</h4> : isWatching ? <h4>Observar servicio</h4> : <h4>Agregar servicio</h4>}
                        </div>
                        <div className='row'>
                            <div className='input-field col s12 m6'>
                                <i className="prefix"><BuildIcon fontSize='medium' /></i>
                                <input disabled={isWatching ? true : false} value={name} id="name" type="text" autoComplete='off' maxLength={45} required onChange={(e) => setName(e.target.value)} />
                                <label className='formLbl' htmlFor="name">Nombre</label>
                            </div>
                            <div className='input-field col s12 m6'>
                                <i className="prefix"><AttachMoneyIcon fontSize='medium' /></i>
                                <input disabled={isWatching ? true : false} value={price} id="purchase_price" type="number" autoComplete='off' min={0} required onChange={(e) => setPrice(e.target.value)} />
                                <label className='formLbl' htmlFor="purchase_price">Precio</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12 m12'>
                                <i className="prefix"><DescriptionIcon fontSize='medium' /></i>
                                <input disabled={isWatching ? true : false} value={description} id="description" type="text" maxLength={80} autoComplete='off' required onChange={(e) => setDescription(e.target.value)} />
                                <label className='formLbl' htmlFor="description">Descripción</label>
                            </div>
                        </div>
                        {
                            isWatching
                                ? <div className='row'>
                                    <div className='input-field col s12 m6'>
                                        <i className="prefix"><InventoryIcon fontSize='medium' /></i>
                                        <input disabled value={id} id="original_stock" type="number" autoComplete='off' min={0} required onChange={(e) => setId(e.target.value)} />
                                        <label className='active' htmlFor="original_stock">Código</label>
                                    </div>
                                    <div className='input-field col s12 m6'>
                                        <i className="prefix"><CalendarMonthIcon fontSize='medium' /></i>
                                        <input disabled value={registration_date} id="registration_date" type="text" autoComplete='off' min={0} required onChange={(e) => setRegistration_date(e.target.value)} />
                                        <label className='active' htmlFor="registration_date">Fecha de registro</label>
                                    </div>

                                </div>
                                : <div />
                        }
                        <div className='row center' style={{ marginTop: '24px' }}>
                            {isEditing
                                ? <button onClick={updateService} className="btn waves-effect waves-teal ">Editar</button>
                                : !isWatching ? <button onClick={insertService} className="btn waves-effect waves-teal ">Guardar</button> : <div />}

                        </div>

                    </div>
                </div>
                {/* <!-- END Modal Structure --> */}
            </div>
        </div>
    )
}

export default ServicesPage