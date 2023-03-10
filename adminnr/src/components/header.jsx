import React from 'react'
import logo from './../assets/images/nrlogo.png';
import SettingsIcon from '@mui/icons-material/Settings';
import { logout } from '../functions/functions';

function Header() {
    return (
        <header className="page-topbar" id="header">
            <div className="navbar navbar-fixed">
                <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
                    <div className="nav-wrapper">
                        <ul className="navbar-list right">
                            <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light toggle-fullscreen" href="#!"><i className="material-icons">settings_overscan</i></a></li>
                            <li ><a className="waves-effect waves-block waves-light profile-button" href="#!" data-target="profile-dropdown"><i className="material-icons">settings</i></a></li>
                        </ul>
                        {/* <!-- settings-dropdown--> */}
                        <ul className="dropdown-content" id="profile-dropdown">
                            {/* <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i className="material-icons">person_outline</i> Profile</a></li>
                            <li><a className="grey-text text-darken-1" href="app-chat.html"><i className="material-icons">chat_bubble_outline</i> Chat</a></li>
                            <li><a className="grey-text text-darken-1" href="page-faq.html"><i className="material-icons">help_outline</i> Help</a></li>
                            <li className="divider"></li>
                            <li><a className="grey-text text-darken-1" href="user-lock-screen.html"><i className="material-icons">lock_outline</i> Lock</a></li> */}
                            <li><a onClick={logout} className="grey-text text-darken-1"><i className="material-icons">keyboard_tab</i>Cerrar sesión</a></li>
                        </ul>
                    </div>
                    <nav className="display-none search-sm">
                        <div className="nav-wrapper">
                            <form id="navbarForm">
                                <div className="input-field search-input-sm">
                                    <input className="search-box-sm mb-0" type="search" required="" id="search" placeholder="Explore Materialize" data-search="template-list" />
                                    <label className="label-icon" htmlFor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                                    <ul className="search-list collection search-list-sm display-none"></ul>
                                </div>
                            </form>
                        </div>
                    </nav>
                </nav>
            </div>
        </header>
    )
}

export default Header