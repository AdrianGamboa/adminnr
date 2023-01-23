import React from 'react'
import "../styles/navbar.css";
import { useState, useEffect } from 'react';
import logo from './../assets/images/nrlogo.png';
import { useLocation } from 'react-router-dom';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BarChartIcon from '@mui/icons-material/BarChart';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Navbar() {
        
    const [activeId, setActiveId] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            setActiveId(1);
        }
        else if (location.pathname === '/inventory') {
            setActiveId(3);
        }
        else if (location.pathname === '/sell') {
            setActiveId(2);
        }
        else if (location.pathname === '/clients') {
            setActiveId(6);
        }
        else if (location.pathname === '/sales') {
            setActiveId(5);
        }
        else if (location.pathname === '/reports') {
            setActiveId(7);
        }
        else if (location.pathname === '/services') {
            setActiveId(4);
        }
        else if (location.pathname === '/userAdmin') {
            setActiveId(8);
        }
        else if (location.pathname === '/help') {
            setActiveId(9);
        }
    }, [location]);

    return (
        <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark gradient-45deg-deep-purple-blue sidenav-gradient sidenav-active-rounded">
            <div className="brand-sidebar">
                <h1 className="logo-wrapper"><a className="brand-logo darken-1 center" href="/home"><img className="hide-on-med-and-down " src={logo} alt="Logo" /></a></h1>
            </div>
            <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion" style={{ paddingTop: '15px' }}>
                {/* Home btn */}
                <li id='1' className={`${activeId === 1 ? "bold active" : "bold"}`}><a className={`${activeId === 1 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/home"><i className="material-icons">home</i><span className="menu-title" data-i18n="Home">Inicio</span></a>
                </li>

                <li className="navigation-header"><a className="navigation-header-text">Principal</a><i className="navigation-header-icon material-icons">more_horiz</i>
                </li>
                <li id='2' className={`${activeId === 2 ? "bold active" : "bold"}`}><a className={`${activeId === 2 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/sell"><i className="material-icons">shopping_cart</i><span className="menu-title" data-i18n="Sells">Vender</span></a>
                </li>
                <li id='3' className={`${activeId === 3 ? "bold active" : "bold"}`}><a className={`${activeId === 3 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/inventory"><i className="material-icons"><WarehouseIcon /></i><span className="menu-title" data-i18n="Inventory">Inventario</span></a>
                </li>
                <li id='4' className={`${activeId === 4 ? "bold active" : "bold"}`}><a className={`${activeId === 4 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/services"><i className="material-icons"><HomeRepairServiceIcon /></i><span className="menu-title" data-i18n="Services">Servicios</span></a>
                </li>
                {/* <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="eCommerce">eCommerce</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="eCommerce-products-page.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Products Page">Products Page</span></a>
                            </li>
                            <li><a href="eCommerce-pricing.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Pricing">Pricing</span></a>
                            </li>
                        </ul>
                    </div>
                </li> */}

                <li className="navigation-header"><a className="navigation-header-text">Secundario </a><i className="navigation-header-icon material-icons">more_horiz</i>
                </li>
                <li id='5' className={`${activeId === 5 ? "bold active" : "bold"}`}><a className={`${activeId === 5 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/sales"><i className="material-icons"><BarChartIcon /></i><span className="menu-title" data-i18n="Sales">Registro de ventas</span></a>
                </li>
                <li id='6' className={`${activeId === 6 ? "bold active" : "bold"}`}><a className={`${activeId === 6 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/clients"><i className="material-icons"><SupervisedUserCircleIcon /></i><span className="menu-title" data-i18n="Clients">Clientes</span></a>
                </li>
                <li id='7' className={`${activeId === 7 ? "bold active" : "bold"}`}><a className={`${activeId === 7 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/reports"><i className="material-icons"><AssessmentIcon /></i><span className="menu-title" data-i18n="Reports">Reportes</span></a>
                </li>

                <li className="navigation-header"><a className="navigation-header-text">Configuraciones </a><i className="navigation-header-icon material-icons">more_horiz</i>
                </li>
                <li id='8' className={`${activeId === 8 ? "bold active" : "bold"}`}><a className={`${activeId === 8 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/userAdmin"><i className="material-icons">account_box</i><span className="menu-title" data-i18n="UserAdmin">Administrar usuarios</span></a>
                </li>
                {/* <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">settings</i><span className="menu-title" data-i18n="Menu levels">Ajustes</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="#!"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Second level">Second level</span></a>
                            </li>
                            <li><a className="collapsible-header waves-effect waves-cyan" href="#!"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Second level child">Second level child</span></a>
                                <div className="collapsible-body">
                                    <ul className="collapsible" data-collapsible="accordion">
                                        <li><a href="#!"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Third level">Third level</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>     */}
                <li id='9' className={`${activeId === 9 ? "bold active" : "bold"}`}><a className={`${activeId === 9 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/help"><i className="material-icons">help_outline</i><span className="menu-title" data-i18n="Help">Ayuda</span></a>
                </li>
            </ul>
            <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
        </aside>
    );


}

export default Navbar