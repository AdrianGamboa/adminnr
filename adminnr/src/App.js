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

  // setter
  // localStorage.setItem('my-key', textForStorage);

  // getter
  // const textFromStorage = localStorage.getItem('my-key');

  return (
    <div>
      <StoreProvider>
        <Router>
          {localStorage.getItem('user-token') ?
            <div>
              <Navbar />
              <Header />
            </div> : <div></div>}

          <div id="main">
            <div className="row">
              <div className="col s12">
                <div className="container">
                  <LoaderGlobal />
                  <Routes>
                    <Route path="/" element={localStorage.getItem('user-token') ? <HomePage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/home" element={localStorage.getItem('user-token') ? <HomePage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/login" element={localStorage.getItem('user-token') ? <Navigate to="/home" /> : <LoginPage />}>  </Route>
                    <Route path="/inventory" element={localStorage.getItem('user-token') ? <InventoryPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/services" element={localStorage.getItem('user-token') ? <ServicesPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/sales" element={localStorage.getItem('user-token') ? <SalesPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/sell" element={localStorage.getItem('user-token') ? <SellPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/clients" element={localStorage.getItem('user-token') ? <ClientsPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/reports" element={localStorage.getItem('user-token') ? <ReportsPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/userAdmin" element={localStorage.getItem('user-token') ? <UserAdminPage /> : <Navigate to="/login" />}>  </Route>
                    <Route path="/help" element={localStorage.getItem('user-token') ? <HelpPage /> : <Navigate to="/login" />}>  </Route>
                  </Routes>
                </div>
                <div className="content-overlay"></div>
              </div>
            </div>
            {localStorage.getItem('user-token') ? <Footer /> : <div></div>}

          </div>
        </Router>
      </StoreProvider>

    </div>

  );
}

export default App;
