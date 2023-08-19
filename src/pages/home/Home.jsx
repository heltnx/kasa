// Home.js
import React from 'react';
// components
import Banniere from '../../components/banniere/Banniere';
import Card from '../../components/card/Card';
// scss
import '../home/home.scss'
import '../../components/banniere/banniere.scss';
import Layout from '../../layout/Layout';


const Home = () => {
  return (
    <Layout>
      <div className='home'>
        <Banniere backgroundImage='/images/Image%20source%201.jpg'>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banniere>
        <Card />
      </div>
    </Layout>

  );
};

export default Home;

