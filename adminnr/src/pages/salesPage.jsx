import React, { useContext, useEffect, useState } from 'react'

import "../styles/inventory.css";
import "../styles/loading.css";

import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';

import { getSales } from '../functions/functions';
import { Pagination } from '../components/pagination';

import M from "materialize-css";
import { StoreContext } from '../store/storeProvider';
import { types } from '../store/storeReducer';

function SalesPage() {

    const [sales, setSales] = useState([]); //Con los datos dinámicos
    const [tableSales, setTableSales] = useState([]); //Con los datos estáticos
    const [search, setSearch] = useState(''); //Contenido del input buscar
    const [currentPage, setCurrentPage] = useState(1); //La página en la que se encuentra actualmente
    const amountPerPage = 5; //Cantidad de registros por página
    const maxPages = Math.ceil(sales.length / amountPerPage); //Calcula la cantidad de páginas

    const [store, dispatch] = useContext(StoreContext);

    const handleChange = e => { //Cuando escribe en la barra de búsqueda
        setSearch(e.target.value);
        filterSales(e.target.value);
    }

    const filterSales = (searchTerm) => {
        var searchResults = tableSales.filter((element) => {
            if (element.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return element;
            }
        })
        setCurrentPage(1);
        setSales(searchResults);
    }

    useEffect(() => {

        document.body.style.pointerEvents = 'none'; //Desactiva clicks
        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

        getSales(setSales, setTableSales).then(() => {
            dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
            document.body.style.pointerEvents = 'all'; //Activa clicks
        });

    }, []);

    useEffect(() => {
        let collapsible = document.querySelectorAll(".collapsible");
        M.Collapsible.init(collapsible, { accordion: false });
    });

    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><BarChartIcon fontSize='large' /></h5>
                        <h5 >Registro de ventas</h5>
                    </div>
                </div>

                <div className='center main-content' id='page-content'>
                    <div className="row" style={{ margin: '30px 20px 20px 20px', paddingTop: '20px' }}>
                        <div className="input-field  col s12 m12">
                            <i className="prefix"><SearchIcon fontSize='large' /></i>
                            <input value={search} onChange={handleChange} placeholder="Buscar por código" id="search" type="text"></input>
                            {/* <label htmlFor="search">Buscar</label> */}
                        </div>

                    </div>

                    {/* START TABLE */}
                    {
                        sales !== [] && sales.length > 0
                            ? <div style={{ margin: '0px 20px 0px 20px' }}>
                                <ul className="collapsible popout">
                                    {
                                        sales.slice((currentPage - 1) * amountPerPage, (currentPage - 1) * amountPerPage + amountPerPage)
                                            .map(item => (
                                                <li key={item.id} >
                                                    <div className="collapsible-header" style={{ alignItems: 'center', textAlign: 'start' }}><i className="material-icons">expand_more</i><p><strong>Código: </strong>{item.id} - <strong>Total Venta:</strong> ₡{item.total_price} - <strong>Fecha:</strong> {item.date}</p></div>
                                                    <div className="collapsible-body" style={{ textAlign: 'start', padding: ' 0px 70px 20px 70px' }}>

                                                        <h5 style={{ textAlign: 'center' }}>Información General</h5>
                                                        <hr className="solid" style={{ width: '100%', border: 0, borderTop: '1px solid #ddd' }}></hr>
                                                        <p><strong>Código: </strong>{item.id}</p>
                                                        <p><strong>Impuesto (13%): </strong>₡ {item.tax}</p>
                                                        <p><strong>Descuento: </strong>₡ {item.discount}</p>
                                                        <p><strong>Subtotal: </strong>₡ {item.subtotal_price}</p>
                                                        <p><strong>Total: </strong>₡ {item.total_price}</p>
                                                        <p><strong>Estado: </strong>{item.state}</p>
                                                        <p><strong>Fecha de realización: </strong>{item.date}</p>
                                                        <p><strong>Usuario que realizó la venta: </strong>{item.user_name}</p>
                                                        <hr className="solid" style={{ width: '100%', border: 0, borderTop: '1px solid #ddd' }}></hr>
                                                        <h5 style={{ textAlign: 'center' }}>Contenido de la venta</h5>
                                                        <hr className="solid" style={{ width: '100%', border: 0, borderTop: '1px solid #ddd' }}></hr>
                                                        {
                                                            item.items.map(itm => (
                                                                <div key={itm.sells_description_id}>
                                                                    <p><strong>Código: </strong>{itm.item_id}</p>
                                                                    <p><strong>Nombre: </strong>{itm.item_name}</p>
                                                                    <p><strong>Cantidad vendida: </strong>{itm.amount}</p>
                                                                    <p><strong>Precio venta (Unitario): </strong>₡ {itm.item_price}</p>                                                                    
                                                                    {itm.purchase_price
                                                                        ? <div>
                                                                            <p><strong>Precio compra (Unitario): </strong>₡ {itm.purchase_price}</p>
                                                                            <p><strong>Beneficio por venta: </strong>₡ {(itm.item_price - itm.purchase_price).toFixed(2)}</p>
                                                                            <p><strong>Beneficio total: </strong>₡ {((itm.item_price - itm.purchase_price)*itm.amount).toFixed(2)}</p>
                                                                        </div>
                                                                        : <p><strong>Beneficio total: </strong>₡ {(itm.item_price*itm.amount).toFixed(2)}</p>}
                                                                    <hr className="solid" style={{ width: '100%', border: 0, borderTop: '1px solid #ddd' }}></hr>
                                                                </div>
                                                            ))
                                                        }

                                                    </div>
                                                </li>
                                            ))
                                    }
                                </ul>

                            </div>
                            : <div>No se encontraron datos</div>
                    }

                    {/* END TABLE */}
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} />
                </div>
            </div>
        </div >
    )
}

export default SalesPage