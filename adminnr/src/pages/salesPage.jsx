import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';

function SalesPage() {
    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><BarChartIcon fontSize='large' /></h5>
                        <h5 >Registro de ventas</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPage