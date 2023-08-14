// Home.js
import React from 'react';
// components
import Banniere from '../components/Banniere';
import Card from '../components/Card';
// css
import '../sass/home.scss'
import '../sass/banniere.scss';


const Home = () => {
  return (
    <div className='home'>
      <Banniere backgroundImage='/images/Image%20source%201.jpg'>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banniere>
      <Card />
    </div>
  );
};

export default Home;

