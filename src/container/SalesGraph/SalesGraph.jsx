import React from 'react';

import './SalesGraph.css';

const SalesGraph = () => (
  <div>
    <div className='list-title'>
        <h1 className='listing-title'>Sales Floor and Average Price</h1>
        <h3 className='time-trade-card2'>Time:</h3>
        <div className='time-select2'>
        <a href='#'><span className='time-24h2'>24H</span></a>
        <a href='#'><span className='time-7D2'>7D</span></a>
        <a href='#'><span className='time-30D2'>30D</span></a>
          <a href='#'><span className='time-90D2'>90D</span></a>
          </div>
      </div>
      <div className='frame50'></div>
  </div>
);

export default SalesGraph;