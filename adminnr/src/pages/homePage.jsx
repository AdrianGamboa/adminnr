import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import InventoryPage from './inventoryPage'



function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <div id="main">
                <div className="row">
                    <div className="col s12">
                        <div className="container">
                            <div className="section">
                                <InventoryPage />
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

export default HomePage