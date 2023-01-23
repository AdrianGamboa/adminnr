import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import SalesPage from './pages/salesPage';
import InventoryPage from './pages/inventoryPage';
import ReportsPage from './pages/reportsPage';
import ClientsPage from './pages/clientsPage';
import SellPage from './pages/sellPage';
import ServicesPage from './pages/servicesPage';
import UserAdminPage from './pages/userAdminPage';
import HelpPage from './pages/helpPage';

import Footer from './components/footer'
import Header from './components/header'
import Navbar from './components/navbar'
import LoaderGlobal from './components/loaderGlobal';

import "./styles/loading.css";
import StoreProvider from './store/storeProvider';

function App() {

  // this.state.isUserAuthenticated ?
  //   <Navigate to='/home' /> :
  //   <Navigate to='/login' />

  return (
    <div>
      <StoreProvider>
        <Router>
          <Navbar />
          <Header />
          <div id="main">
            <div className="row">
              <div className="col s12">
                <div className="container">
                  <LoaderGlobal/>
                  <Routes>
                    <Route path='/' element={<Navigate to='/login' />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/inventory' element={<InventoryPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/sales' element={<SalesPage />} />
                    <Route path='/sell' element={<SellPage />} />
                    <Route path='/clients' element={<ClientsPage />} />
                    <Route path='/reports' element={<ReportsPage />} />
                    <Route path='/userAdmin' element={<UserAdminPage />} />
                    <Route path='/help' element={<HelpPage />} />
                  </Routes>

                </div>
                <div className="content-overlay"></div>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </StoreProvider>

    </div>

  );
}

export default App;
