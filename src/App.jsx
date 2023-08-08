import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*pages */
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Logement from './pages/Logement.jsx';
import Landing404 from './pages/Landing404.jsx';
/*layout*/
import Header from './layout/Header.jsx';
import Footer from './layout/Footer';
/*css*/

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Logement" element={<Logement />} />
            <Route path="*" element={<Landing404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
