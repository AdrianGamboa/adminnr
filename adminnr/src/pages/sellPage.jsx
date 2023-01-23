import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SellPage() {
    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><ShoppingCartIcon fontSize='large' /></h5>
                        <h5 >Vender</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellPage