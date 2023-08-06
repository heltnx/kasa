// Home.js

import React from 'react';
import Banniere from '../components/Banniere';
import '../style/home.css'
import '../style/banniere.css';

const Home = () => {
  return (
    <div>
      <Banniere backgroundImage='/images/Image%20source%201.jpg'>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banniere>
      
    </div>
  );
};

export default Home;

