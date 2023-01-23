import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function UserAdminPage() {
    return (
        <div>
            <div className="section">
                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                    <div className='row' >
                        <h5 ><AccountBoxIcon fontSize='large' /></h5>
                        <h5 >Administración de usuarios</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAdminPage