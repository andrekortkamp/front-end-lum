import React from 'react';


import { Navbar, Header, CardCollection, TradeGraph, SalesGraph, Intro } from './container';
import './App.css';
import images from './constants/images';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <div className="navbar-logo">
      <a href='#'><img src={images.logo} alt="logo" /></a>
      </div>
    <CardCollection />
    <TradeGraph />
    <SalesGraph />
    <Intro />
  </div>
);

export default App;
