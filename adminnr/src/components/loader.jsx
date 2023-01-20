import React from 'react'
import logo from './../assets/images/nrlogop.png';
export const Loader = () => {
    return (
        <div className='main-content overlay '>
            <div className="center loader">
                <img src={logo} />
            </div>
            <h5>Cargando</h5>
        </div>
    )
}
