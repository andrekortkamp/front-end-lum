import React from 'react';
import './TradeGraph.css';


const TradeGraph = () => (
    <div>
      
      <div className='trade-card'>
        <h1 className='trade-name'>Sales</h1>
        <h2 className='showing-trade'>Showing 2300 sales.</h2>
        <h3 className='time-trade-card'>Time:</h3>
      <div className='time-select'>
      <a href='#'><span className='time-24h'>24H</span></a>
      <a href='#'><span className='time-7D'>7D</span></a>
      <a href='#'><span className='time-30D'>30D</span></a>
      <a href='#'><span className='time-90D'>90D</span></a>
      <a href='#'><span className='time-6M'>6M</span></a>
      <a href='#'><span className='time-all'>ALL</span></a>
      </div>
      </div>

      <div className='trade-graphic'>
      <div>
    </div>
      </div>
    </div>
);


export default TradeGraph;
