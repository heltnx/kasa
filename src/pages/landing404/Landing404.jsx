import React from 'react';
import { Link } from 'react-router-dom';
import '../landing404/landing404.scss'
import Layout from '../../layout/Layout';

const Landing404 = () => {
    return (
        <Layout>
            <div className='landing404'>
                <span>404</span>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="l404" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </Layout>
    );
};

export default Landing404;