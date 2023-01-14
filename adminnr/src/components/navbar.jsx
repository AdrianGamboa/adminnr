import React from 'react'
import logo from './../assets/images/nrlogo.png';
import "../styles/navbar.css";
import { useState, useEffect } from 'react';
import ListIcon from '@mui/icons-material/List';
import { useLocation } from 'react-router-dom';

function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [activeId, setActiveId] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/inventory') {
            setActiveId(1);
        }
        else if (location.pathname === '/sells') {
            setActiveId(2);
        }
        else if (location.pathname === '/clients') {
            setActiveId(3);
        }
        else if (location.pathname === '/reports') {
            setActiveId(4);
        }
        else if (location.pathname === '/home') {
            setActiveId(5);
        }
    }, [location]);


    return (
        <nav className="navigationp">
            <div style={{ marginLeft: '10px', marginTop: '25px' }}>
                <a href="/home" className="brand-namep"><img src={logo} alt="logo" width={110} /></a>
            </div>
            <button className="hamburgerp"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>
                <i><ListIcon fontSize='large' sx={{ color: 'white' }} /></i>
            </button>
            <div
                className={
                    isNavExpanded ? "navigationp-menup expandedp" : "navigationp-menup"
                }
            >
                <ul className='ulp'>                    
                    <li id='1' className={`${activeId === 1 ? "active" : ""}`} onClick={() => setActiveId(1)}>
                        <a href="/inventory">Inventario</a>
                    </li>
                    <li id='2' className={`${activeId === 2 ? "active" : ""}`} onClick={() => setActiveId(2)}>
                        <a href="/sells">Ventas</a>
                    </li>
                    <li id='3' className={`${activeId === 3 ? "active" : ""}`} onClick={() => setActiveId(3)}>
                        <a href="/clients">Clientes</a>
                    </li>
                    <li id='4' className={`${activeId === 4 ? "active" : ""}`} onClick={() => setActiveId(4)}>
                        <a href="/reports">Reportes</a>
                    </li>
                    <li id='5' className={`${activeId === 5 ? "active" : ""}`} onClick={() => setActiveId(5)}>
                        <a href="/home">Otros</a>
                    </li>
                </ul>
            </div>
        </nav>
    );


}

export default Navbar