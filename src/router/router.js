import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*pages */
import Home from '../pages/home/Home.jsx';
import About from '../pages/about/About.jsx';
import Logement from '../pages/logement/Logement.jsx';
import Landing404 from '../pages/landing404/Landing404.jsx';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Landing404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
