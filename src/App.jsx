import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import DetailsProductsList from './components/DetailsProductsList';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="contentCenter" style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/funkoDetails/:funkoId" element={<DetailsProductsList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>


      <Footer />
    </div>
  );
}

export default App
