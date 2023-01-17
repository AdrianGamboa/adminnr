import React from 'react'
import Navbar from '../components/navbar'
import logo1 from '../assets/theme/images/logo/materialize-logo.png';

function HomePage() {
  return (
    // <!-- BEGIN: SideNav-->
    <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark gradient-45deg-deep-purple-blue sidenav-gradient sidenav-active-rounded">
        <div className="brand-sidebar">
            <h1 className="logo-wrapper"><a className="brand-logo darken-1" href="index.html"><img className="hide-on-med-and-down " src={logo1} alt="no sirve jode" /><img className="show-on-medium-and-down hide-on-med-and-up" src="../../public/assets/images/logo/materialize-logo-color.png" alt="materialize logo" /><span className="logo-text hide-on-med-and-down">Materialize</span></a><a className="navbar-toggler" href="#"><i className="material-icons">radio_button_checked</i></a></h1>
        </div>
        <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
            <li className="active bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">settings_input_svideo</i><span className="menu-title" data-i18n="Dashboard">Dashboard</span><span className="badge badge pill orange float-right mr-10">3</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="dashboard-modern.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Modern">Modern</span></a>
                        </li>
                        <li className="active"><a className="active" href="dashboard-ecommerce.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="eCommerce">eCommerce</span></a>
                        </li>
                        <li><a href="dashboard-analytics.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Analytics">Analytics</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">dvr</i><span className="menu-title" data-i18n="Templates">Templates</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a className="collapsible-header waves-effect waves-cyan" href="#!"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Vertical">Vertical</span></a>
                            <div className="collapsible-body">
                                <ul className="collapsible" data-collapsible="accordion">
                                    <li><a href="../vertical-modern-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Modern Menu">Modern Menu</span></a>
                                    </li>
                                    <li><a href="../vertical-menu-nav-dark-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Navbar Dark">Navbar Dark</span></a>
                                    </li>
                                    <li><a href="../vertical-gradient-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Gradient Menu">Gradient Menu</span></a>
                                    </li>
                                    <li><a href="../vertical-dark-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Dark Menu">Dark Menu</span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a className="collapsible-header waves-effect waves-cyan" href="#!"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Horizontal">Horizontal</span></a>
                            <div className="collapsible-body">
                                <ul className="collapsible" data-collapsible="accordion">
                                    <li><a href="../horizontal-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Horizontal Menu">Horizontal Menu</span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="navigation-header"><a className="navigation-header-text">Applications</a><i className="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li className="bold"><a className="waves-effect waves-cyan " href="app-email.html"><i className="material-icons">mail_outline</i><span className="menu-title" data-i18n="Mail">Mail</span><span className="badge new badge pill pink accent-2 float-right mr-2">5</span></a>
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
            <li className="navigation-header"><a className="navigation-header-text">User Interface </a><i className="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">cast</i><span className="menu-title" data-i18n="Cards">Cards</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="cards-basic.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Cards">Cards</span></a>
                        </li>
                        <li><a href="cards-advance.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Cards Advance">Cards Advance</span></a>
                        </li>
                        <li><a href="cards-extended.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Cards Extended">Cards Extended</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">invert_colors</i><span className="menu-title" data-i18n="CSS">CSS</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="css-typography.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Typograpy">Typograpy</span></a>
                        </li>
                        <li><a href="css-color.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Color">Color</span></a>
                        </li>
                        <li><a href="css-grid.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Grid">Grid</span></a>
                        </li>
                        <li><a href="css-helpers.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Helpers">Helpers</span></a>
                        </li>
                        <li><a href="css-media.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Media">Media</span></a>
                        </li>
                        <li><a href="css-pulse.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Pulse">Pulse</span></a>
                        </li>
                        <li><a href="css-sass.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Sass">Sass</span></a>
                        </li>
                        <li><a href="css-shadow.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Shadow">Shadow</span></a>
                        </li>
                        <li><a href="css-animations.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Animations">Animations</span></a>
                        </li>
                        <li><a href="css-transitions.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Transitions">Transitions</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">photo_filter</i><span className="menu-title" data-i18n="Basic UI">Basic UI</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a className="collapsible-header waves-effect waves-cyan" href="#!"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Buttons">Buttons</span></a>
                            <div className="collapsible-body">
                                <ul className="collapsible" data-collapsible="accordion">
                                    <li><a href="ui-basic-buttons.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Basic">Basic</span></a>
                                    </li>
                                    <li><a href="ui-extended-buttons.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Extended">Extended</span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="ui-icons.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Icons">Icons</span></a>
                        </li>
                        <li><a href="ui-alerts.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Alerts">Alerts</span></a>
                        </li>
                        <li><a href="ui-badges.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Badges">Badges</span></a>
                        </li>
                        <li><a href="ui-breadcrumbs.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Breadcrumbs">Breadcrumbs</span></a>
                        </li>
                        <li><a href="ui-chips.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Chips">Chips</span></a>
                        </li>
                        <li><a href="ui-collections.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Collections">Collections</span></a>
                        </li>
                        <li><a href="ui-navbar.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Navbar">Navbar</span></a>
                        </li>
                        <li><a href="ui-pagination.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Pagination">Pagination</span></a>
                        </li>
                        <li><a href="ui-preloader.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Preloader">Preloader</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">settings_brightness</i><span className="menu-title" data-i18n="Advanced UI">Advanced UI</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="advance-ui-carousel.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Carousel">Carousel</span></a>
                        </li>
                        <li><a href="advance-ui-collapsibles.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Collapsibles">Collapsibles</span></a>
                        </li>
                        <li><a href="advance-ui-toasts.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Toasts">Toasts</span></a>
                        </li>
                        <li><a href="advance-ui-tooltip.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Tooltip">Tooltip</span></a>
                        </li>
                        <li><a href="advance-ui-dropdown.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Dropdown">Dropdown</span></a>
                        </li>
                        <li><a href="advance-ui-feature-discovery.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Discovery">Discovery</span></a>
                        </li>
                        <li><a href="advance-ui-media.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Media">Media</span></a>
                        </li>
                        <li><a href="advance-ui-modals.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Modals">Modals</span></a>
                        </li>
                        <li><a href="advance-ui-scrollspy.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Scrollspy">Scrollspy</span></a>
                        </li>
                        <li><a href="advance-ui-tabs.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Tabs">Tabs</span></a>
                        </li>
                        <li><a href="advance-ui-waves.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Waves">Waves</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">add_to_queue</i><span className="menu-title" data-i18n="Extra Components">Extra Components</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="extra-components-range-slider.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Range Slider">Range Slider</span></a>
                        </li>
                        <li><a href="extra-components-sweetalert.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Sweetalert">Sweetalert</span></a>
                        </li>
                        <li><a href="extra-components-nestable.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Nestable">Nestable</span></a>
                        </li>
                        <li><a href="extra-components-treeview.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Treeview">Treeview</span></a>
                        </li>
                        <li><a href="extra-components-ratings.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Ratings">Ratings</span></a>
                        </li>
                        <li><a href="extra-components-tour.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Tour">Tour</span></a>
                        </li>
                        <li><a href="extra-components-i18n.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="i18n">i18n</span></a>
                        </li>
                        <li><a href="extra-components-highlight.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Highlight">Highlight</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="navigation-header"><a className="navigation-header-text">Tables &amp; Forms </a><i className="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li className="bold"><a className="waves-effect waves-cyan " href="table-basic.html"><i className="material-icons">border_all</i><span className="menu-title" data-i18n="Basic Tables">Basic Tables</span></a>
            </li>
            <li className="bold"><a className="waves-effect waves-cyan " href="table-data-table.html"><i className="material-icons">grid_on</i><span className="menu-title" data-i18n="Data Tables">Data Tables</span></a>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">chrome_reader_mode</i><span className="menu-title" data-i18n="Forms">Forms</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="form-elements.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Elements">Form Elements</span></a>
                        </li>
                        <li><a href="form-select2.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Select2">Form Select2</span></a>
                        </li>
                        <li><a href="form-validation.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Validation">Form Validation</span></a>
                        </li>
                        <li><a href="form-masks.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Masks">Form Masks</span></a>
                        </li>
                        <li><a href="form-editor.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Editor">Form Editor</span></a>
                        </li>
                        <li><a href="form-file-uploads.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="File Uploads">File Uploads</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="bold"><a className="waves-effect waves-cyan " href="form-layouts.html"><i className="material-icons">image_aspect_ratio</i><span className="menu-title" data-i18n="Form Layouts">Form Layouts</span></a>
            </li>
            <li className="bold"><a className="waves-effect waves-cyan " href="form-wizard.html"><i className="material-icons">settings_ethernet</i><span className="menu-title" data-i18n="Form Wizard">Form Wizard</span></a>
            </li>
            <li className="navigation-header"><a className="navigation-header-text">Charts</a><i className="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">pie_chart_outlined</i><span className="menu-title" data-i18n="Chart">Chart</span></a>
                <div className="collapsible-body">
                    <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="charts-chartjs.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="ChartJS">ChartJS</span></a>
                        </li>
                        <li><a href="charts-chartist.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Chartist">Chartist</span></a>
                        </li>
                        <li><a href="charts-sparklines.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Sparkline Charts">Sparkline Charts</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="navigation-header"><a className="navigation-header-text">Misc </a><i className="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">photo_filter</i><span className="menu-title" data-i18n="Menu levels">Menu levels</span></a>
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
            <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.com/materialize-material-design-admin-template/documentation/index.html" target="_blank"><i className="material-icons">import_contacts</i><span className="menu-title" data-i18n="Documentation">Documentation</span></a>
            </li>
            <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.ticksy.com/" target="_blank"><i className="material-icons">help_outline</i><span className="menu-title" data-i18n="Support">Support</span></a>
            </li>
        </ul>
        <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
    </aside>
    // <!-- END: SideNav-->
    // <!-- BEGIN: Header-->
    // <header className="page-topbar" id="header">
    //     <div className="navbar navbar-fixed">
    //         <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
    //             <div className="nav-wrapper">
    //                 <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
    //                     <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Materialize" data-search="template-list"/>
    //                     <ul className="search-list collection display-none"></ul>
    //                 </div>
    //                 <ul className="navbar-list right">
    //                     <li className="dropdown-language"><a className="waves-effect waves-block waves-light translation-button" href="#" data-target="translation-dropdown"><span className="flag-icon flag-icon-gb"></span></a></li>
    //                     <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light toggle-fullscreen" href="#1"><i className="material-icons">settings_overscan</i></a></li>
    //                     <li className="hide-on-large-only search-input-wrapper"><a className="waves-effect waves-block waves-light search-button" href="#1"><i className="material-icons">search</i></a></li>
    //                     <li><a className="waves-effect waves-block waves-light notification-button" href="#1" data-target="notifications-dropdown"><i className="material-icons">notifications_none<small className="notification-badge">5</small></i></a></li>
    //                     <li><a className="waves-effect waves-block waves-light profile-button" href="#1" data-target="profile-dropdown"><span className="avatar-status avatar-online"><img src="../../public/assets/images/avatar/avatar-7.png" alt="avatar"/><i></i></span></a></li>
    //                     <li><a className="waves-effect waves-block waves-light sidenav-trigger" href="#" data-target="slide-out-right"><i className="material-icons">format_indent_increase</i></a></li>
    //                 </ul>
    //                 {/* <!-- translation-button--> */}
    //                 <ul className="dropdown-content" id="translation-dropdown">
    //                     <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="en"><i className="flag-icon flag-icon-gb"></i> English</a></li>
    //                     <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="fr"><i className="flag-icon flag-icon-fr"></i> French</a></li>
    //                     <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="pt"><i className="flag-icon flag-icon-pt"></i> Portuguese</a></li>
    //                     <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="de"><i className="flag-icon flag-icon-de"></i> German</a></li>
    //                 </ul>
    //                 {/* <!-- notifications-dropdown--> */}
    //                 <ul className="dropdown-content" id="notifications-dropdown">
    //                     <li>
    //                         <h6>NOTIFICATIONS<span className="new badge">5</span></h6>
    //                     </li>
    //                     <li className="divider"></li>
    //                     <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
    //                         <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
    //                     </li>
    //                     <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
    //                         <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
    //                     </li>
    //                     <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
    //                         <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
    //                     </li>
    //                     <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
    //                         <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
    //                     </li>
    //                     <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
    //                         <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
    //                     </li>
    //                 </ul>
    //                 {/* <!-- profile-dropdown--> */}
    //                 <ul className="dropdown-content" id="profile-dropdown">
    //                     <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i className="material-icons">person_outline</i> Profile</a></li>
    //                     <li><a className="grey-text text-darken-1" href="app-chat.html"><i className="material-icons">chat_bubble_outline</i> Chat</a></li>
    //                     <li><a className="grey-text text-darken-1" href="page-faq.html"><i className="material-icons">help_outline</i> Help</a></li>
    //                     <li className="divider"></li>
    //                     <li><a className="grey-text text-darken-1" href="user-lock-screen.html"><i className="material-icons">lock_outline</i> Lock</a></li>
    //                     <li><a className="grey-text text-darken-1" href="user-login.html"><i className="material-icons">keyboard_tab</i> Logout</a></li>
    //                 </ul>
    //             </div>
    //             <nav className="display-none search-sm">
    //                 <div className="nav-wrapper">
    //                     <form id="navbarForm">
    //                         <div className="input-field search-input-sm">
    //                             <input className="search-box-sm mb-0" type="search" required="" id="search" placeholder="Explore Materialize" data-search="template-list"/>
    //                             <label className="label-icon" htmlFor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
    //                             <ul className="search-list collection search-list-sm display-none"></ul>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </nav>
    //         </nav>
    //     </div>
    // </header>
  )
}

export default HomePage