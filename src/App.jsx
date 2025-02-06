import './App.css'
/* import { Routes, Route } from "react-router-dom"; */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
     {/*  
      <Routes>
       
        <Route path="/" element={ <HomePageWithNavigate /> } />
        <Route path="/about" element={ <AboutPage /> } />
        
        <Route
          path="/projects"
          element={ <ProjectsPage projects={projectsData} /> }
        />

        <Route path="*" element={ <ErrorPage /> } />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App
