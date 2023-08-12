import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*layout*/
import Header from '../layout/Header';
import Footer from '../layout/Footer';
/*pages */
import Home from '../pages/Home';
import About from '../pages/About';
import Logement from '../pages/Logement';
import Landing404 from '../pages/Landing404';


const Router = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="*" element={<Landing404 />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Router;
