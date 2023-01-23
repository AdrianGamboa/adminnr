import { createContext, useReducer } from 'react';
import storeReducer, { initialStore } from './storeReducer';
import logo from '../assets/images/nrlogop.png';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore);
    const { isLoading } = store;

    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {!isLoading.isLoading ? <div></div> : <div className='center'>
                <div className='main-content overlayG'>
                    <div className="loaderG">
                        <img src={logo} />
                    </div>
                    <div style={{ flexBasis: '100%', height: '0', marginBottom: '10%' }}>
                        <h5>Cargando</h5>
                    </div>

                </div>
            </div>}

            {children}
        </StoreContext.Provider>
    )
}
export { StoreContext }
export default StoreProvider;