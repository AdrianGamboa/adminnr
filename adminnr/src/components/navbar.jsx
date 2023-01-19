import React from 'react'
import "../styles/navbar.css";
import { useState, useEffect } from 'react';
import logo from './../assets/images/nrlogo.png';
import ListIcon from '@mui/icons-material/List';
import logo1 from '../assets/theme/images/logo/materialize-logo.png';
import { useLocation } from 'react-router-dom';
import { height, width } from '@mui/system';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [activeId, setActiveId] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            setActiveId(1);
        }
        else if (location.pathname === '/inventory') {
            setActiveId(2);
        }
        else if (location.pathname === '/sells') {
            setActiveId(2);
        }
        else if (location.pathname === '/clients') {
            setActiveId(4);
        }
        else if (location.pathname === '/reports') {
            setActiveId(5);
        }        
    }, [location]);

    function contentVisibility() {
        const element = document.getElementById("page-content");

        if (!isNavExpanded) {
            element.style.pointerEvents = 'none';
            element.style.opacity = '0';
            element.style.background = '#CCC';
        } else {
            element.style.pointerEvents = 'all';
            element.style.opacity = '1';
            element.style.background = 'white';
        }
    }
    return (
        <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark gradient-45deg-deep-purple-blue sidenav-gradient sidenav-active-rounded">
            <div className="brand-sidebar">
                <h1 className="logo-wrapper"><a className="brand-logo darken-1 center" href="/home"><img className="hide-on-med-and-down " src={logo} alt="Logo" /></a></h1>
            </div>
            <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion" style={{paddingTop: '15px'}}>
                {/* Home btn */}
                <li id='1' className={`${activeId === 1 ? "bold active" : "bold"}`}><a className={`${activeId === 1 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/home"><i className="material-icons">home</i><span className="menu-title" data-i18n="Home">Inicio</span></a>
                </li>

                <li className="navigation-header"><a className="navigation-header-text">Applications</a><i className="navigation-header-icon material-icons">more_horiz</i>
                </li>

                <li id='2' className={`${activeId === 2 ? "bold active" : "bold"}`}><a className={`${activeId === 2 ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"}`} href="/sells"><i className="material-icons">shopping_cart</i><span className="menu-title" data-i18n="Sells">Ventas</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="app-chat.html"><i className="material-icons">chat_bubble_outline</i><span className="menu-title" data-i18n="Chat">Chat</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="app-todo.html"><i className="material-icons">check</i><span className="menu-title" data-i18n="ToDo">ToDo</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="app-kanban.html"><i className="material-icons">format_list_bulleted</i><span className="menu-title" data-i18n="Kanban">Kanban</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="app-file-manager.html"><i className="material-icons">content_paste</i><span className="menu-title" data-i18n="File Manager">File manager</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="app-contacts.html"><i className="material-icons">import_contacts</i><span className="menu-title" data-i18n="Contacts">Contacts</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><i className="material-icons">today</i><span className="menu-title" data-i18n="Calendar">Calendar</span></a>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">receipt</i><span className="menu-title" data-i18n="Invoice">Invoice</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="app-invoice-list.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Invoice List</span></a>
                            </li>
                            <li><a href="app-invoice-view.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Invoice View</span></a>
                            </li>
                            <li><a href="app-invoice-edit.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice Edit">Invoice Edit</span></a>
                            </li>
                            <li><a href="app-invoice-add.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice Add">Invoice Add</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="eCommerce">eCommerce</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="eCommerce-products-page.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Products Page">Products Page</span></a>
                            </li>
                            <li><a href="eCommerce-pricing.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Pricing">Pricing</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-header"><a className="navigation-header-text">Pages </a><i className="navigation-header-icon material-icons">more_horiz</i>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="user-profile-page.html"><i className="material-icons">person_outline</i><span className="menu-title" data-i18n="User Profile">User Profile</span></a>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">content_paste</i><span className="menu-title" data-i18n="Pages">Pages</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="page-contact.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Contact">Contact</span></a>
                            </li>
                            <li><a href="page-blog-list.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Blog">Blog</span></a>
                            </li>
                            <li><a href="page-search.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Search">Search</span></a>
                            </li>
                            <li><a href="page-knowledge.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Knowledge">Knowledge</span></a>
                            </li>
                            <li><a href="page-timeline.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Timeline">Timeline</span></a>
                            </li>
                            <li><a href="page-faq.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="FAQs">FAQs</span></a>
                            </li>
                            <li><a href="page-account-settings.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Account Settings">Account Settings</span></a>
                            </li>
                            <li><a href="page-blank.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Blank">Page Blank</span></a>
                            </li>
                            <li><a href="page-collapse.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Collapse">Page Collapse</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">crop_original</i><span className="menu-title" data-i18n="Medias">Medias</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="media-gallery-page.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Gallery Page">Gallery Page</span></a>
                            </li>
                            <li><a href="media-hover-effects.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Media Hover Effects">Media Hover Effects</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">face</i><span className="menu-title" data-i18n="User">User</span><span className="badge badge pill purple float-right mr-10">3</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="page-users-list.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="List">List</span></a>
                            </li>
                            <li><a href="page-users-view.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="View">View</span></a>
                            </li>
                            <li><a href="page-users-edit.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Edit">Edit</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">lock_open</i><span className="menu-title" data-i18n="Authentication">Authentication</span><span className="badge badge pill purple float-right mr-10">10</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="user-login.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Login">Login</span></a>
                            </li>
                            <li><a href="user-register.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Register">Register</span></a>
                            </li>
                            <li><a href="user-forgot-password.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Forgot Password">Forgot Password</span></a>
                            </li>
                            <li><a href="user-lock-screen.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Lock Screen">Lock Screen</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">filter_tilt_shift</i><span className="menu-title" data-i18n="Misc">Misc</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li><a href="page-404.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="404">404</span></a>
                            </li>
                            <li><a href="page-maintenance.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Maintenanace">Page Maintenanace</span></a>
                            </li>
                            <li><a href="page-500.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="500">500</span></a>
                            </li>
                        </ul>
                    </div>
                </li>                                
                
                <li className="navigation-header"><a className="navigation-header-text">Configuraciones </a><i className="navigation-header-icon material-icons">more_horiz</i>
                </li>
                <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">settings</i><span className="menu-title" data-i18n="Menu levels">Ajustes</span></a>
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
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.com/materialize-material-design-admin-template/documentation/index.html" target="_blank"><i className="material-icons">account_box</i><span className="menu-title" data-i18n="Documentation">Administrar usuarios</span></a>
                </li>
                <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.ticksy.com/" target="_blank"><i className="material-icons">help_outline</i><span className="menu-title" data-i18n="Support">Ayuda</span></a>
                </li>
            </ul>
            <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
        </aside>
        // <nav className="navigationp">
        //     <div style={{ marginLeft: '10px', marginTop: '25px' }}>
        //         <a href="/home" className="brand-namep"><img src={logo} alt="logo" width={110} /></a>
        //     </div>
        //     <button className="hamburgerp"
        //         onClick={() => {
        //             setIsNavExpanded(!isNavExpanded);
        //             contentVisibility();

        //         }}>
        //         <i><ListIcon fontSize='large' sx={{ color: 'white' }} /></i>
        //     </button>
        //     <div className={isNavExpanded ? "navigationp-menup expandedp" : "navigationp-menup"}>
        //         <ul className='ulp'>
        //             <li id='1' className={`${activeId === 1 ? "active" : ""}`} onClick={() => setActiveId(1)}>
        //                 <a href="/inventory">Productos</a>
        //             </li>
        //             <li id='2' className={`${activeId === 2 ? "active" : ""}`} onClick={() => setActiveId(2)}>
        //                 <a href="/sells">Servicios</a>
        //             </li>
        //             <li id='2' className={`${activeId === 2 ? "active" : ""}`} onClick={() => setActiveId(2)}>
        //                 <a href="/sells">Ventas</a>
        //             </li>
        //             <li id='3' className={`${activeId === 3 ? "active" : ""}`} onClick={() => setActiveId(3)}>
        //                 <a href="/clients">Clientes</a>
        //             </li>
        //             <li id='4' className={`${activeId === 4 ? "active" : ""}`} onClick={() => setActiveId(4)}>
        //                 <a href="/reports">Reportes</a>
        //             </li>
        //             <li id='5' className={`${activeId === 5 ? "active" : ""}`} onClick={() => setActiveId(5)}>
        //                 <a href="/home">Otros</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );


}

export default Navbar