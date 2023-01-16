import React from 'react'
import "../styles/inventory.css";
import "../styles/navbar.css";
import Navbar from '../components/navbar'
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function InventoryPage() {

  return (
    <div style={{ height: '100%' }}>
      <Navbar />
      <div className='center main-content' id='page-content'>
        <h3 style={{padding:'30px 0px 0px 0px' }}>Inventario</h3>
        <div className="row" style={{ margin: '0px 20px 20px 20px', paddingTop: '20px' }}>
          <div className="input-field  col s12 m9">
            <i className="prefix"><SearchIcon fontSize='large' /></i>
            <input placeholder="Buscar por nombre o código" id="search" type="text"></input>
            {/* <label htmlFor="search">Buscar</label> */}
          </div>
          <div className='input-field col s12 m3'>
            <button className="btn waves-effect waves-teal">Nuevo artículo</button>
          </div>
        </div>

        <div style={{ margin: '0px 50px 0px 50px' }}>
          <table className="striped " >
            <thead>
              <tr>
                <th>Name</th>
                <th>Item Name</th>
                <th>Item Price</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>Alvin</td><td>Eclair</td><td>$0.87</td></tr>
              <tr><td>Alan</td><td>Jellybean</td><td>$3.76</td></tr>
              <tr><td>Alan</td><td>Jellybean</td><td>$3.76</td></tr>              
              <tr><td>Jonathan</td><td>Lollipop</td><td>$7.00</td></tr>
              <tr><td>Jonathan</td><td>Lollipop</td><td>$7.00</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="pagination" style={{marginTop:'50px'}}>
          <li className="disabled"><a href="#!"><i><ArrowBackIcon fontSize='normal' /></i></a></li>
          <li className="active"><a href="#!">1</a></li>
          <li className="waves-effect"><a href="#!">2</a></li>
          <li className="waves-effect"><a href="#!">3</a></li>
          <li className="waves-effect"><a href="#!">4</a></li>
          <li className="waves-effect"><a href="#!">5</a></li>
          <li className="waves-effect"><a href="#!"><i><ArrowForwardIcon fontSize='normal' /></i></a></li>
        </ul>
      </div>

      <div className='center' style={{ marginTop: '30px', color: 'white', backgroundColor: 'rgb(205, 82, 82)' }}>
        🚘😁 ! Hola ¡ 😁🚘
      </div>
    </div>
  )
}

export default InventoryPage