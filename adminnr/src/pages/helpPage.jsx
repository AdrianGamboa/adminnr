import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function HelpPage() {
    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><HelpOutlineIcon fontSize='large' /></h5>
                        <h5 >Ayuda</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpPage