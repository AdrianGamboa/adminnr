import React from 'react'
import logo from './../assets/images/nrlogop.png';
export const Loader = () => {
    return (
        <div className='main-content overlay'>
            <div className="loader">
                <img src={logo} />
            </div>
            <div style={{ flexBasis: '100%', height: '0', marginBottom:'10%' }}>
                <h5>Cargando</h5>
            </div>

        </div>
    )
}
