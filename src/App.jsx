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
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logement" element={<Logement />} />
          <Route path="/Landing404" element={<Landing404 />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
