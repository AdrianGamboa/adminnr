import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom';


function SellsPage() {
  const navigate = useNavigate();
  return (
    <div>
            <Navbar />
            <Header />
            <div id="main">
                <div className="row">
                    <div className="col s12">
                        <div className="container">
                            <div className="section">
                                Sells Page                                
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

export default SellsPage