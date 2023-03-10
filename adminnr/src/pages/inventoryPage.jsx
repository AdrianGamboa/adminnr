import React, { useContext, useEffect, useState } from 'react'

import "../styles/inventory.css";
import "../styles/loading.css";

import SearchIcon from '@mui/icons-material/Search';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { getProducts, insertProductP, updateProductP, deleteProductP } from '../functions/functions';
import { Pagination } from '../components/pagination';
import { Loader } from '../components/loader';
import swal from 'sweetalert';
import M from "materialize-css";
import { StoreContext } from '../store/storeProvider';
import { types } from '../store/storeReducer';

function InventoryPage() {

  const [products, setProducts] = useState([]); //Con los datos dinámicos
  const [tableProducts, setTableProducts] = useState([]); //Con los datos estáticos
  const [search, setSearch] = useState(''); //Contenido del input buscar
  const [currentPage, setCurrentPage] = useState(1); //La página en la que se encuentra actualmente
  const amountPerPage = 5; //Cantidad de registros por página
  const maxPages = Math.ceil(products.length / amountPerPage); //Calcula la cantidad de páginas

  const [isEditing, setIsEditing] = useState(false); //Para saber si se está editando el producto
  const [isWatching, setIsWatching] = useState(false); //Para saber si se está viendo el producto

  const [store, dispatch] = useContext(StoreContext);

  //Variables de los productos
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [description, setDescription] = useState('');
  const [registration_date, setRegistration_date] = useState('');
  const [original_stock, setOriginal_stock] = useState('');

  const confirmDeleteProduct = (productId) => {
    swal({
      title: 'Eliminar',
      text: '¿Seguro que quiere eliminar este producto?',
      icon: 'warning',
      buttons: ['No', 'Si']
    }).then(result => {
      if (result) {

        dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando
        //Hace el delete
        deleteProductP(productId).then((result) => {
          getProducts(setProducts, setTableProducts);
          setCurrentPage(1);
          dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
          swal({
            text: 'El producto ha sido eliminado',
            icon: 'success'
          })
        });
      }
    })
  }

  const handleChange = e => { //Cuando escribe en la barra de búsqueda
    setSearch(e.target.value);
    filterProducts(e.target.value);
  }

  const filterProducts = (searchTerm) => {
    var searchResults = tableProducts.filter((element) => {
      if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || element.product_id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return element;
      }
    })
    setCurrentPage(1);
    setProducts(searchResults);
  }

  const verifyData = () => {
    if (name !== '' && purchasePrice !== '' && salePrice !== '' && amount !== '') {
      return true;
    }
    else {

      if (name === '') {
        M.toast({ html: 'Debe digitar el nombre del producto' });
      }
      if (purchasePrice === '') {
        M.toast({ html: 'Debe digitar el precio de compra del producto' });
      }
      if (salePrice === '') {
        M.toast({ html: 'Debe digitar el precio de venta del producto' });
      }
      if (amount === '') {
        M.toast({ html: 'Debe digitar la cantidad de productos' });
      }
      return false;
    }
  }

  const insertProduct = () => {
    if (verifyData()) {
      const product = {
        name: name,
        purchase_price: purchasePrice,
        sale_price: salePrice,
        stock: amount,
        original_stock: amount,
        state: 1,
        registration_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        description: description != '' ? description : 'Sin descripción'
      };

      //Cierra modal
      const modal1 = document.querySelector('#modal1');
      var instance = M.Modal.getInstance(modal1);
      instance.close();

      dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

      insertProductP(product).then((result) => {

        getProducts(setProducts, setTableProducts);
        setCurrentPage(1);
        dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando

        swal({
          title: 'Éxito',
          text: 'Producto guardado correctamente',
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
  }

  const selectProduct = (product_id) => {

    const product = tableProducts.find(obj => {
      return obj.product_id === product_id;
    });

    setId(product.product_id);
    setName(product.name);
    setAmount(product.stock);
    setPurchasePrice(product.purchase_price);
    setSalePrice(product.sale_price);
    setDescription(product.description);
    setOriginal_stock(product.original_stock);
    let mydate = new Date(product.registration_date);  
    setRegistration_date(mydate.toLocaleDateString());     
    activeInputs();
  }
  const updateProduct = () => {
    const product = {
      product_id: id,
      name: name,
      purchase_price: purchasePrice,
      sale_price: salePrice,
      stock: amount,
      original_stock: amount,
      state: 1,
      registration_date: new Date().toISOString().slice(0, 19).replace('T', ' '),      
      description: description != '' ? description : 'Sin descripción'
    };
    //Cierra modal
    const modal1 = document.querySelector('#modal1');
    var instance = M.Modal.getInstance(modal1);
    instance.close();
    dispatch({ type: types.setLoadingOn, payload: { isLoading: true } }) //Activa el mensaje de cargando

    updateProductP(product).then((result) => {
      getProducts(setProducts, setTableProducts);
      setCurrentPage(1);
      dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
      swal({
        title: 'Éxito',
        text: 'Producto guardado correctamente',
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
    setAmount('');
    setPurchasePrice('');
    setSalePrice('');
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

    getProducts(setProducts, setTableProducts).then(() => {
      dispatch({ type: types.setLoadingOff, payload: { isLoading: false } }) //Desactiva el mensaje de cargando
      document.body.style.pointerEvents = 'all'; //Activa clicks
    });
  }, [])

  return (
    <div>
      <div className="section">
        {/* Título */}
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
              <button onClick={() => { cleanVariables(); setIsEditing(false); setIsWatching(false); }} data-target="modal1" className="btn waves-effect waves-teal modal-trigger">Nuevo artículo</button>
            </div>
          </div>

          {/* START TABLE */}
          {
            products !== [] && products.length > 0
              ? <div style={{ margin: '0px 20px 0px 20px' }}>
                <table className="centered striped responsive-table">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Nombre</th>
                      <th>Cantidad</th>
                      <th>Precio venta</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      products.slice((currentPage - 1) * amountPerPage, (currentPage - 1) * amountPerPage + amountPerPage)
                        .map(product => (
                          <tr key={product.product_id}>
                            <td width={'15%'} >{product.product_id}</td>
                            <td width={'25%'} >{product.name}</td>
                            <td width={'20%'} >{product.stock}</td>
                            <td width={'20%'} >{product.sale_price}</td>
                            <td width={'20%'}>
                              <a onClick={() => { setIsEditing(false); setIsWatching(true); selectProduct(product.product_id); }} className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i className="material-icons">visibility</i></a>
                              <a onClick={() => { setIsEditing(true); setIsWatching(false); selectProduct(product.product_id); }} className='modal-trigger' href="#modal1" style={{ marginRight: '5px' }}><i className="material-icons">edit</i></a>
                              <a href="#!" onClick={() => confirmDeleteProduct(product.product_id)} ><i className="material-icons">delete</i></a>
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
              {isEditing ? <h4>Editar artículo</h4> : isWatching ? <h4>Observar artículo</h4> : <h4>Agregar artículo</h4>}
            </div>
            <div className='row'>
              <div className='input-field col s12 m6'>
                <i className="prefix"><BuildIcon fontSize='medium' /></i>
                <input disabled={isWatching ? true : false} value={name} id="name" type="text" autoComplete='off' maxLength={45} required onChange={(e) => setName(e.target.value)} />
                <label className='formLbl' htmlFor="name">Nombre</label>
              </div>
              <div className='input-field col s12 m6'>
                <i className="prefix"><InventoryIcon fontSize='medium' /></i>
                <input disabled={isWatching ? true : false} value={amount} id="stock" type="number" autoComplete='off' min={0} required onChange={(e) => { setAmount(e.target.value) }} />
                <label className='formLbl' htmlFor="stock">Cantidad</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6'>
                <i className="prefix"><AttachMoneyIcon fontSize='medium' /></i>
                <input disabled={isWatching ? true : false} value={purchasePrice} id="purchase_price" type="number" autoComplete='off' min={0} required onChange={(e) => setPurchasePrice(e.target.value)} />
                <label className='formLbl' htmlFor="purchase_price">Precio de compra</label>
              </div>
              <div className='input-field col s12 m6'>
                <i className="prefix"><AttachMoneyIcon fontSize='medium' /></i>
                <input disabled={isWatching ? true : false} value={salePrice} id="sale_price" type="number" autoComplete='off' min={0} required onChange={(e) => setSalePrice(e.target.value)} />
                <label className='formLbl' htmlFor="sale_price">Precio de venta</label>
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
                    <i className="prefix"><CalendarMonthIcon fontSize='medium' /></i>
                    <input disabled value={registration_date} id="registration_date" type="text" autoComplete='off' min={0} required onChange={(e) => setRegistration_date(e.target.value)} />
                    <label className='active' htmlFor="registration_date">Fecha de registro</label>
                  </div>
                  <div className='input-field col s12 m6'>
                    <i className="prefix"><InventoryIcon fontSize='medium' /></i>
                    <input disabled value={original_stock} id="original_stock" type="number" autoComplete='off' min={0} required onChange={(e) => setOriginal_stock(e.target.value)} />
                    <label className='active' htmlFor="original_stock">Cantidad original</label>
                  </div>
                </div>
                : <div />
            }
            <div className='row center' style={{ marginTop: '24px' }}>
              {isEditing
                ? <button onClick={updateProduct} className="btn waves-effect waves-teal ">Editar</button>
                : !isWatching ? <button onClick={insertProduct} className="btn waves-effect waves-teal ">Guardar</button> : <div />}

            </div>

          </div>
        </div>
        {/* <!-- END Modal Structure --> */}
      </div>
    </div>


  )
}

export default InventoryPage