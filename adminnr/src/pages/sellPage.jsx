import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SellPage() {
    return (
        <div>
            <Navbar />
            <Header />
            <div id="main">
                <div className="row">
                    <div className="col s12">
                        <div className="container">
                            <div className="section">
                                <div className='center main-content' style={{ marginTop: '20px', paddingBottom: '5px', paddingTop: '5px' }}>
                                    <div className='row' >
                                        <h5 ><ShoppingCartIcon fontSize='large' /></h5>
                                        <h5 >Vender</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-overlay"></div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SellPage