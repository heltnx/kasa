import React from 'react';
import { Link } from 'react-router-dom';
import '../style/landing404.css'

const Landing404 = () => {
    return (
        <div className='landing404'>
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="l404" to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Landing404;