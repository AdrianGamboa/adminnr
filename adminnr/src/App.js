import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import SellsPage from './pages/sellsPage';
import InventoryPage from './pages/inventoryPage';
import ReportsPage from './pages/reportsPage';
import ClientsPage from './pages/clientsPage';

function App() {

  // this.state.isUserAuthenticated ?
  //   <Navigate to='/home' /> :
  //   <Navigate to='/login' />

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/inventory' element={<InventoryPage />} />
        <Route path='/sells' element={<SellsPage />} />
        <Route path='/clients' element={<ClientsPage />} />
        <Route path='/reports' element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
