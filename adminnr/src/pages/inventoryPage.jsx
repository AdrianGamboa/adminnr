import React, { useEffect, useState } from 'react'
import "../styles/inventory.css";
import "../styles/loading.css";
import SearchIcon from '@mui/icons-material/Search';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';

import { getProducts, postProducts } from '../functions/functions';
import { Pagination } from '../components/pagination';
import { Loader } from '../components/loader';


function InventoryPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]); //Con los datos dinámicos
  const [tableProducts, setTableProducts] = useState([]); //Con los datos estáticos
  const [search, setSearch] = useState(''); //Contenido del input buscar
  const [currentPage, setCurrentPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(5);
  const maxPages = Math.ceil(products.length / amountPerPage);

  const handleChange = e => {
    setSearch(e.target.value);
    filterProducts(e.target.value);
  }

  const filterProducts = (searchTerm) => {
    var searchResults = tableProducts.filter((element) => {
      if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || element.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return element;
      }
    })
    setCurrentPage(1);
    setProducts(searchResults);
  }


  useEffect(() => {
    getProducts(setProducts, setTableProducts);
  }, [])

  return (
    <div>
      <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
        <div className='row' >
          <h5 ><WarehouseIcon fontSize='large' /></h5>
          <h5 >Inventario</h5>
        </div>

      </div>
      <div className='center main-content' id='page-content'>

        <div className="row" style={{ margin: '30px 20px 20px 20px', paddingTop: '20px' }}>
          <div className="input-field  col s12 m9">
            <i className="prefix"><SearchIcon fontSize='large' /></i>
            <input value={search} onChange={handleChange} placeholder="Buscar por nombre o código" id="search" type="text"></input>
            {/* <label htmlFor="search">Buscar</label> */}
          </div>
          <div className='input-field col s12 m3'>
            <button data-target="modal1" className="btn waves-effect waves-teal modal-trigger">Nuevo artículo</button>
          </div>
        </div>

        {/* START TABLE */}
        {
          products != []
            ? <div style={{ margin: '0px 20px 0px 20px' }}>
              <table className="striped responsive-table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio venta</th>
                    <th className='center'>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    products.slice((currentPage - 1) * amountPerPage, (currentPage - 1) * amountPerPage + amountPerPage)
                      .map(product => (
                        <tr key={product.id}>
                          <td>{product.name}</td>
                          <td>{product.name}</td>
                          <td>{product.name}</td>
                          <td>{product.name}</td>
                          <td className='center'>
                            <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i className="material-icons">visibility</i></a>
                            <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i className="material-icons">edit</i></a>
                            <a className='modal-trigger' href="#modal1" ><i className="material-icons">delete</i></a>
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
      <div id="modal1" className="modal">
        <div className="modal-content">
          <div className='center'>
            <h4>Agregar artículo</h4>
            {!isLoading ? <div/> : <Loader/>}
          </div>
          <div className='row'>

            <div className='input-field col s12 m6'>
              <i className="prefix"><BuildIcon fontSize='medium' /></i>
              <input id="username" type="text" autoComplete='off' required />
              <label htmlFor="username">Nombre</label>
            </div>
            <div className='input-field col s12 m6'>
              <i className="prefix"><InventoryIcon fontSize='medium' /></i>
              <input id="stock" type="text" autoComplete='off' required />
              <label htmlFor="stock">Cantidad</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 m6'>
              <i className="prefix"><AttachMoneyIcon fontSize='medium' /></i>
              <input id="purchase_price" type="text" autoComplete='off' required />
              <label htmlFor="purchase_price">Precio de compra</label>
            </div>

            <div className='input-field col s12 m6'>
              <i className="prefix"><AttachMoneyIcon fontSize='medium' /></i>
              <input id="sale_price" type="text" autoComplete='off' required />
              <label htmlFor="sale_price">Precio de venta</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 m12'>
              <i className="prefix"><DescriptionIcon fontSize='medium' /></i>
              <input id="description" type="text" autoComplete='off' required />
              <label htmlFor="description">Descripción</label>
            </div>

          </div>
          <div className='row center' style={{ marginTop: '24px' }}>
            <button onClick={() => postProducts(setIsLoading)} className="btn waves-effect waves-teal ">Guardar</button>
          </div>

        </div>
      </div>
      {/* <!-- END Modal Structure --> */}

    </div>

  )
}

export default InventoryPage