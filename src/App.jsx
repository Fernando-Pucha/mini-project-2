import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import AddProduct from './components/AddProduct';
import DetailsProductsList from './components/DetailsProductsList';
import { useState } from 'react';
import dataFunkoPop from './Data.json';

function App() {

  const [funkos, setFunkos] = useState(dataFunkoPop);
  const [counterIdFunkos, setCounterIdFunkos] = useState(dataFunkoPop.length+1);

  const handleDelete = (idToDelete) => {
      const updatedFunkos = funkos.filter((funko) => funko.id !== idToDelete);
      setFunkos(updatedFunkos);
  };

  const addFunko= (newFunko) =>{
    setFunkos([...funkos,newFunko])
    setCounterIdFunkos(precounterIdFunkos=>precounterIdFunkos+1)
  }

  const updateFunko = (updatedFunko) => {
    setFunkos(funkos.map(funko =>
      funko.id === updatedFunko.id ? updatedFunko : funko
    ));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="contentCenter" style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage funkos={funkos} handleDelete={handleDelete}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/funkoDetails/:funkoId" element={<DetailsProductsList funkos={funkos} updateProduct={updateFunko}/>} />
          <Route path="/addProduct" element={<AddProduct counterIdFunkos={counterIdFunkos} addProduct={addFunko}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
