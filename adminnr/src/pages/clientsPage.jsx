import React from 'react'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

function ClientsPage() {
  return (
    <div>
      <div className="container">
        <div className="section">
          <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
            <div className='row' >
              <h5 ><SupervisedUserCircleIcon fontSize='large' /></h5>
              <h5 >Clientes</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsPage