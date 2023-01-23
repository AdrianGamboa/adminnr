import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

function HomePage() {
    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><HomeIcon fontSize='large' /></h5>
                        <h5 >Inicio</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage