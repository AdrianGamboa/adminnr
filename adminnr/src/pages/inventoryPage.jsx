import React from 'react'
import "../styles/inventory.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';

function InventoryPage() {

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
            <input placeholder="Buscar por nombre o código" id="search" type="text"></input>
            {/* <label htmlFor="search">Buscar</label> */}
          </div>
          <div className='input-field col s12 m3'>
            <button data-target="modal1" className="btn waves-effect waves-teal modal-trigger">Nuevo artículo</button>
          </div>
        </div>

        {/* START TABLE */}
        <div style={{ margin: '0px 20px 0px 20px' }}>
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
              <tr>
                <td>Alvin</td><td>Eclair</td><td>$0.87</td><td>Alvin</td>
                <td className='center'>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">visibility</i></a>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">edit</i></a>
                  <a className='modal-trigger' href="#modal1" ><i class="material-icons">delete</i></a>
                </td>
              </tr>
              <tr>
                <td>Alvin</td><td>Eclair</td><td>$0.87</td><td>Alvin</td>
                <td className='center'>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">visibility</i></a>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">edit</i></a>
                  <a className='modal-trigger' href="#modal1" ><i class="material-icons">delete</i></a>
                </td>
              </tr>
              <tr>
                <td>Alvin</td><td>Eclair</td><td>$0.87</td><td>Alvin</td>
                <td className='center'>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">visibility</i></a>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">edit</i></a>
                  <a className='modal-trigger' href="#modal1" ><i class="material-icons">delete</i></a>
                </td>
              </tr>
              <tr>
                <td>Alvin</td><td>Eclair</td><td>$0.87</td><td>Alvin</td>
                <td className='center'>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">visibility</i></a>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">edit</i></a>
                  <a className='modal-trigger' href="#modal1" ><i class="material-icons">delete</i></a>
                </td>
              </tr>
              <tr>
                <td>Alvin</td><td>Eclair</td><td>$0.87</td><td>Alvin</td>
                <td className='center'>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">visibility</i></a>
                  <a className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i class="material-icons">edit</i></a>
                  <a className='modal-trigger' href="#modal1" ><i class="material-icons">delete</i></a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        {/* END TABLE */}
        <ul className="pagination" style={{ marginTop: '50px', paddingBottom: '50px' }}>
          <li className="disabled"><a href="#!"><i><ArrowBackIcon fontSize='normal' /></i></a></li>
          <li className="active"><a href="#!">1</a></li>
          <li className="waves-effect"><a href="#!">2</a></li>
          <li className="waves-effect"><a href="#!">3</a></li>
          <li className="waves-effect"><a href="#!">4</a></li>
          <li className="waves-effect"><a href="#!">5</a></li>
          <li className="waves-effect"><a href="#!"><i><ArrowForwardIcon fontSize='normal' /></i></a></li>
        </ul>
      </div>

      {/* <!-- Modal Structure --> */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <div className='center'>
            <h4>Agregar artículo</h4>
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
            <button className="btn waves-effect waves-teal ">Guardar</button>
          </div>

        </div>
      </div>
      {/* <!-- END Modal Structure --> */}

    </div>

  )
}

export default InventoryPage