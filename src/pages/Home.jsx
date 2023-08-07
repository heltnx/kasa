// Home.js
import React from 'react';

// components
import Banniere from '../components/Banniere';
import Card from '../components/Card';
// css
import '../style/home.css'
import '../style/banniere.css';


const Home = () => {
  return (
    <div>
      <Banniere backgroundImage='/images/Image%20source%201.jpg'>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banniere>
      <div className='item-contain'>
        <Card />
      </div>
    </div>
  );
};

export default Home;

