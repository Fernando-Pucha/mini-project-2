import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import ProductsList from './pages/ProductsList';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="contentCenter" style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>

      
      <Footer />
    </div>
  );
}

export default App
