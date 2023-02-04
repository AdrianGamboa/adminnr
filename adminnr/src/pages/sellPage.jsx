import React, { useContext, useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import swal from 'sweetalert';
import M from "materialize-css";

import { getProducts, getServices, insertSell } from '../functions/functions';
import { StoreContext } from '../store/storeProvider';
import { types } from '../store/storeReducer';

function SellPage() {

    const [sellContent, setSellContent] = useState([]); //Con lo que se va a vender
    const [products, setProducts] = useState([]); //Con los datos dinámicos
    const [tableProducts, setTableProducts] = useState([]); //Con los datos estáticos
    const [services, setServices] = useState([]); //Con los datos dinámicos
    const [tableServices, setTableServices] = useState([]); //Con los datos estáticos
    const [search, setSearch] = useState(''); //Contenido del input buscar
    const [search2, setSearch2] = useState(''); //Contenido del input buscar

    const [store, dispatch] = useContext(StoreContext);

    //Variables del resumen de la venta
    const [subTotalNoDisc, setSubTotalNoDisc] = useState(0); //Sub total sin descuento
    const [discount, setDiscount] = useState(0); //Sub total sin descuento


    const handleChange = e => { //Cuando escribe en la barra de búsqueda
        setSearch(e.target.value);
        filterProducts(e.target.value);
    }
    const handleChange2 = e => { //Cuando escribe en la barra de búsqueda
        setSearch2(e.target.value);
        filterServices(e.target.value);
    }

    const filterProducts = (searchTerm) => {
        var searchResults = tableProducts.filter((element) => {
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
                || element.product_id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return element;
            }
        })
        setProducts(searchResults);
    }

    const filterServices = (searchTerm) => {
        var searchResults = tableServices.filter((element) => {
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
                || element.service_id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return element;
            }
        })
        setServices(searchResults);
    }

    const AddToSell = (id, type) => {
        var item =
            type === 1
                ? tableProducts.find(obj => {
                    return obj.product_id === id;
                })
                : tableServices.find(obj => {
                    return obj.service_id === id;
                });

        item = {
            id: type === 1 ? item.product_id : item.service_id,
            name: item.name,
            amount: 1,
            sale_price: type === 1 ? item.sale_price : item.price,
            stock: type === 1 ? item.stock : 0,
            type: type
        }

        const exists = sellContent.find(obj => {
            return obj.id === id && obj.type === type;
        });

        if (!exists) {
            // Agregar al array
            setSellContent([
                ...sellContent,
                item
            ]);

            setSubTotalNoDisc(subTotalNoDisc + (item.amount * item.sale_price));
        }
        else {
            M.toast({
                html: type === 1 ? 'El producto ya fue agregado a la venta' : 'El servicio ya fue agregado a la venta'
            })
        }
    }

    const deleteFromSell = (id) => {
        //Quitar del array
        setSellContent(
            sellContent.filter(a =>
                a.id !== id
            )
        );
    }
    const changeAmount = (index, type) => {
        //Si type es 1 = Agregar cantidad, sino es quitar
        // 1. Make a shallow copy of the items
        let items = [...sellContent];
        // 2. Make a shallow copy of the item you want to mutate
        let item = { ...items[index] };
        // 3. Replace the property you're intested in
        if (type === 1) {
            if (item.amount < 100) {
                if (item.type === 2 || item.amount + 1 <= item.stock) {
                    setSubTotalNoDisc(subTotalNoDisc + parseInt(item.sale_price));
                    item.amount = item.amount + 1;
                }
                else {
                    M.toast({
                        html: 'No hay más productos en inventario'
                    })
                }
            }
        }
        else {
            if (item.amount > 1) {
                setSubTotalNoDisc(subTotalNoDisc - parseInt(item.sale_price));
                item.amount = item.amount - 1;
            }
        }
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        items[index] = item;
        // 5. Set the state to our new copy
        setSellContent(items);
    }

    const makeSell = () => {
        if (sellContent !== [] && sellContent.length > 0) {
            swal({
                title: 'Realizar venta',
                text: '¿Seguro que quiere realizar la venta?',
                icon: 'warning',
                buttons: ['No', 'Si']
            }).then(result => {
                if (result) {
                    dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando
                    //Hace la venta
                    const user = JSON.parse(localStorage.getItem('user-data'));
                    const sell = {
                        total_price: ((subTotalNoDisc - discount) + (subTotalNoDisc - discount) * 0.13).toFixed(2),
                        subtotal_price: subTotalNoDisc - discount,
                        tax: ((subTotalNoDisc - discount) * 0.13).toFixed(2),
                        discount: discount,
                        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                        state: 'Finalizado',
                        users_user_id: user.id,
                        clients_client_id: 1,
                        sellContent: sellContent
                    };

                    insertSell(sell).then((result) => {
                        dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
                        swal({
                            title: 'Éxito',
                            text: 'Venta realizada correctamente',
                            icon: 'success',
                            buttons: 'Aceptar'
                        }).then(result => {
                            if (result) {
                                //Limpia variables
                                setSubTotalNoDisc(0);
                                setDiscount(0);
                                setSellContent([]);
                            }
                        });

                    });
                }
            })
        }
        else {
            swal({
                title: 'No hay contenido',
                text: 'Debe agregar contenido a la venta para continuar',
                icon: 'warning',
                buttons: 'Aceptar'
            })
        }
    }

    useEffect(() => {
        
        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

        getProducts(setProducts, setTableProducts).then(() => {
            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando           
        });

        getServices(setServices, setTableServices).then(() => {
            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando            
        });

    }, [])

    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><ShoppingCartIcon fontSize='large' /></h5>
                        <h5 >Vender</h5>
                    </div>
                </div>
                <div className='center main-content' id='page-content' style={{ paddingBottom: '20px' }}>
                    <div className="row" style={{ margin: '30px 20px 20px 20px', paddingTop: '20px' }}>
                        <div className="input-field  col s12 m8" onClick={() => console.log('Seleccione cliente')}>
                            <i className="prefix"><PersonIcon fontSize='large' /></i>
                            <input disabled id="client" type="text"></input>
                            <label htmlFor="client">A nombre de:</label>
                        </div>
                        <div className='input-field col s12 m4'>
                            <button data-target="modal2" className="btn waves-effect waves-teal modal-trigger">Agregar artículo/servicio</button>
                        </div>
                    </div>

                    {/* START TABLE */}
                    {
                        sellContent !== [] && sellContent.length > 0 ?
                            <div style={{ margin: '0px 20px 0px 20px' }}>
                                <table className="centered striped responsive-table" style={{ paddingBottom: '20px' }}>
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Descripción</th>
                                            <th>Precio Unitario</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellContent.map((content, index) => (
                                            <tr key={index}>
                                                <td width={'10%'} ><p style={{ fontSize: '18px' }}>{content.id}</p></td>
                                                <td width={'20%'} ><p style={{ fontSize: '18px' }}>{content.name}</p></td>
                                                <td width={'15%'} ><p style={{ fontSize: '18px' }}>₡{content.sale_price}</p></td>
                                                <td width={'20%'} >
                                                    <a onClick={() => changeAmount(index, 2)} href="#!"><i className="material-icons" style={{ fontSize: '18px' }}>remove</i></a>
                                                    <p style={{ display: 'inline', margin: '0px 10px ', fontSize: '18px' }}>{content.amount}</p>
                                                    <a onClick={() => changeAmount(index, 1)} href="#!"><i className="material-icons" style={{ fontSize: '18px' }}>add</i></a>
                                                </td>
                                                <td width={'20%'} ><p style={{ fontSize: '18px' }}>₡{content.sale_price * content.amount}</p></td>
                                                <td width={'10%'}>
                                                    <a onClick={() => deleteFromSell(content.id)} href="#!"><i className="material-icons">delete</i></a>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            : <div>No se encuentran datos</div>
                    }
                    {/* END TABLE */}


                </div>
                <div className='center main-content' >
                    <div className=" center row" style={{
                        margin: '20px 20px 20px 20px', padding: '20px 0px', display: 'flex',
                        flexWrap: 'wrap', textAlign: 'center'
                    }}>
                        <div className='col s6 m2' style={{ lineHeight: '130px' }}><h5 style={{ lineHeight: 'normal', display: 'inline-block', verticalAlign: 'middle' }}>Sub total sin descuento: ₡{subTotalNoDisc}</h5></div>
                        <div className='col s6 m2' style={{ lineHeight: '130px' }}><h5 style={{ lineHeight: 'normal', display: 'inline-block', verticalAlign: 'middle' }}>Descuento: ₡<input id="discount" type="number" min={0} onChange={(e) => setDiscount(e.target.value)} value={discount} style={{ width: '60%', fontSize: '1.64rem', fontFamily: 'Montserrat, sans-serif', color: '#333' }}></input></h5></div>
                        <div className='col s6 m2' style={{ lineHeight: '130px' }}><h5 style={{ lineHeight: 'normal', display: 'inline-block', verticalAlign: 'middle' }}>Sub total con descuento: ₡{subTotalNoDisc - discount}</h5></div>
                        <div className='col s6 m2' style={{ lineHeight: '130px' }}><h5 style={{ lineHeight: 'normal', display: 'inline-block', verticalAlign: 'middle' }}>Impuesto (13%): ₡{((subTotalNoDisc - discount) * 0.13).toFixed(2)}</h5></div>
                        <div className='col s6 m2' style={{ lineHeight: '130px' }}><h5 style={{ lineHeight: 'normal', display: 'inline-block', verticalAlign: 'middle' }}>Total: ₡{((subTotalNoDisc - discount) + (subTotalNoDisc - discount) * 0.13).toFixed(2)}</h5></div>
                        <div className='col s6 m2' style={{ lineHeight: '130px' }}><button onClick={makeSell} className="btn waves-effect waves-teal" style={{ lineHeight: 'normal', display: 'inline-block', verticalAlign: 'middle' }}>Continuar</button></div>

                    </div>
                </div>

                {/* <!-- Modal Structure --> */}
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <div className='center'>
                            <h4>Agregar Artículo/Servicio</h4>
                            {/* {!isLoadingL ? <div /> : <Loader />} */}
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col m6"><a className="active" href="#test1">Productos</a></li>
                                    <li className="tab col m6"><a href="#test2">Servicios</a></li>
                                </ul>
                            </div>
                            <div id="test1" className="col s12">

                                <div className="row main-content" style={{ margin: '30px 20px 20px 20px' }}>
                                    <div className="input-field  col s12 m12">
                                        <i className="prefix"><SearchIcon fontSize='large' /></i>
                                        <input value={search} onChange={handleChange} placeholder="Buscar por nombre o código" id="search" type="text"></input>
                                    </div>
                                </div>
                                {
                                    products !== [] && products.length > 0 ?
                                        products.map(product => (
                                            <div key={product.product_id} className='row main-content' style={{ padding: '20px', marginTop: '20px' }}>
                                                <div className='col m9' style={{ lineHeight: '36px' }}>
                                                    Código: {product.product_id} - Artículo: {product.name}
                                                </div>
                                                <div className='center col m3'>
                                                    <button onClick={() => AddToSell(product.product_id, 1)} className="btn waves-effect waves-teal">Agregar</button>
                                                </div>
                                            </div>
                                        )
                                        ) : <div>No se encontraron datos</div>
                                }

                            </div>
                            <div id="test2" className="col s12">
                                <div className="row main-content" style={{ margin: '30px 20px 20px 20px' }}>
                                    <div className="input-field  col s12 m12">
                                        <i className="prefix"><SearchIcon fontSize='large' /></i>
                                        <input value={search2} onChange={handleChange2} placeholder="Buscar por nombre o código" id="search2" type="text"></input>
                                    </div>
                                </div>
                                {
                                    services !== [] && services.length > 0 ?
                                        services.map(service => (
                                            <div key={service.service_id} className='row main-content' style={{ padding: '20px', marginTop: '20px' }}>
                                                <div className='col m9' style={{ lineHeight: '36px' }}>
                                                    Código: {service.service_id} - Servicio: {service.name}
                                                </div>
                                                <div className='center col m3'>
                                                    <button onClick={() => AddToSell(service.service_id, 2)} className="btn waves-effect waves-teal">Agregar</button>
                                                </div>
                                            </div>
                                        )
                                        ) : <div>No se encontraron datos</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Modal Structure --> */}
            </div>
        </div>
    )
}

export default SellPage