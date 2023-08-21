import React from 'react';
/*layout*/
import Header from './header/Header'
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main className='container'> {children} </main>
            <Footer className='full' />
        </div>
    );
};

export default Layout;