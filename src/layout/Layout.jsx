import React from 'react';
/*layout*/
import Header from './header/Header'
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <div className='container'>
                <Header />
                <main> {children} </main>
            </div>
            <Footer className='full' />
        </div>
    );
};

export default Layout;