import React, { useContext } from 'react'
import { StoreContext } from '../store/storeProvider';
import logo from './../assets/images/nrlogo.png';
function LoaderGlobal() {
    
    const [store, dispatch] = useContext(StoreContext);
    const { isLoading } = store;
    
    return (
        <div>
            {
                !isLoading.isLoading
                    ? <div></div>
                    : <div className='center'>
                        <div className='main-content overlayG'>
                            <div className="loaderG">
                                <img src={logo} alt='Logo'/>
                            </div>
                            <div style={{ flexBasis: '100%', height: '0', marginBottom: '10%' }}>
                                <h5>Cargando</h5>
                            </div>

                        </div>
                    </div>
            }
        </div>
    )
}

export default LoaderGlobal