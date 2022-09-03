import React from 'react';

import images from '../../constants/images';
import './Intro.css';

const Intro = () => (
    <div>
      
      <div className='title-hype'>
        <h1 className='time-hype'>Time:</h1>
        <div className='hype-box'>
        <a href='#'><span className='hype-1m'>1M</span></a>
        <a href='#'><span className='hype-5m'>5M</span></a>
        <a href='#'><span className='hype-15m'>15M</span></a>
        <a href='#'><span className='hype-30m'>30M</span></a>
        <a href='#'><span className='hype-1h'>1H</span></a>
        <a href='#'><span className='hype-1d'>1D</span></a>
        </div>
      </div>

      <div className='hype-trend'>
        <h1 className='trend-bars'>Hype Trend</h1>
        <h2 className='thermo-trend'>HYPE THERMOMETER</h2>
        <div className='very-hype-box'>
        <img className='uptrend-hypet'  src={images.uptrend} alt="uptrend" />
        <h3 className='very-hype'>VERY HYPED</h3>
        </div>
      </div>

      <div className='frame90'>
        
        <h1 className='vol-frame90'>VOLUME</h1>
        
        <div className='totalbox-hype'>
        <img className='hypeimg1' src={images.hype1} alt="hype1" />
        <div className='salef-frame90'>
          
          <span className='porc-box-frame90'>
            <img className='uptrend'  src={images.arrow} alt="uptrend" />
            <h1 className='porc-frame901'>9,28%</h1>
          </span>
          
          <span className='boxnum-frame901'> 
          <i class='bx bx-menu'></i>
          <h1 className='num-frame'>1.9K</h1>
          </span>
        
        </div>
        </div>

        <div className='div-trends'></div>

        <h1 className='sales-floors-name'>SALES FLOOR</h1>
        
        <div className='totalbox-floors'>
        <img className='hypeimg2' src={images.hype2} alt="hype2" />
        <div className='box-floor-num'>
          
          <span className='porc-sales'>
            <img src={images.arrow} />
            <h1 className='porc-sales-num'>4,19%</h1>
          </span>
          
          <span className='num-floor'>
          <i class='bx bx-menu'></i>
            <h1 className='floor-145'>145</h1>
          </span>
        
        </div>
        </div>



        <div className='div-trends2'></div>



        <h1 className='sales-amount-name'>SALES AMOUNT</h1>
        
        <div className='totalbox-amount'>
        <img className='hypeimg3' src={images.hype3} alt="hype3" />
        <div className='box-amount-num'>
          
          <span className='porc-amount'>
            <img src={images.arrow} />
            <h1 className='porc-amount-num'>2,32%</h1>
          </span>
          
          <span className='num-amount'>
            <h1 className='amount-1203'>1.203</h1>
          </span>
        
        </div>
        </div>
      </div>

      <div className='title-trend'>
        <h1 className='time-trend'>Time:</h1>
        <div className='trend-box'>
        <a href='#'><span className='trend-1m'>1M</span></a>
        <a href='#'><span className='trend-5m'>5M</span></a>
        <a href='#'><span className='trend-15m'>15M</span></a>
        <a href='#'><span className='trend-30m'>30M</span></a>
        <a href='#'><span className='trend-1h'>1H</span></a>
        <a href='#'><span className='trend-1d'>1D</span></a>
        </div>
      </div>
      
      <div className='trend-traits'>
        <h1 className='traits-name'>Trending Traits</h1>
        <span className='porc-traits-box'>
          <h2 className='porc-traits'>%</h2>
          <img src={images.icn} />
        </span>
        <span className='avg-traits'>
          <h3 className='avg-last'>AVG LAST SALES</h3>
          <img src={images.icn} />
        </span>
      </div>

      <div className='painel-trends'>
        <div className='cross-trends'>
          
          <span className='cross-name-box'>
          <h1 className='fur-name'>FUR:</h1>
          <h2 className='cross-name'>CROSS</h2>
          </span>
          
          <h1 className='porc-name-trends'>1,49%</h1>
          
          <span className='num-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-name-trends'>192.4</h1>
          
          </span>
        </div>
        
        <div className='div-trends1'></div>

        <div className='bored-trends-mount'>
          
          <span className='bored-name-box'>
          <h1 className='fur-name'>MOUNT:</h1>
          <h2 className='cross-name'>BORED DAGGER</h2>
          </span>
          
          <h1 className='porc-bored-trends'>0,49%</h1>
          
          <span className='mount-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-bored-trends'>190.7</h1>
          
          </span>
        </div>

        <div className='div-trends3'></div>


        <div className='eyes-trends-mount'>
          
          <span className='eyes-name-box'>
          <h1 className='fur-name'>EYES:</h1>
          <h2 className='cross-name'>CYBORG</h2>
          </span>
          
          <h1 className='porc-eyes-trends'>1,08%</h1>
          
          <span className='eyes-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-bored-trends'>190.7</h1>
          
          </span>
        </div>

        <div className='div-trends4'></div>

        <div className='earring-trends-mount'>
          
          <span className='earring-name-box'>
          <h1 className='fur-name'>EARRING:</h1>
          <h2 className='cross-name'>DMT</h2>
          </span>
          
          <h1 className='porc-earring-trends'>2,15%</h1>
          
          <span className='earring-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-bored-trends'>159.3</h1>
          
          </span>
        </div>


        <div className='div-trends5'></div>


        <div className='hat-trends-mount'>
          
          <span className='hat-name-box'>
          <h1 className='fur-name'>HAT:</h1>
          <h2 className='cross-name'>BORED UNSHAVEN PIZZA</h2>
          </span>
          
          <h1 className='porc-hat-trends'>0,26%</h1>
          
          <span className='hat-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-bored-trends'>289.1</h1>
          
          </span>
        </div>

        <div className='div-trends6'></div>


        <div className='earring2-trends-mount'>
          
          <span className='earring2-name-box'>
          <h1 className='fur-name'>EARRING:</h1>
          <h2 className='cross-name'>DMT</h2>
          </span>
          
          <h1 className='porc-earring2-trends'>2,15%</h1>
          
          <span className='earring2-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-bored-trends'>159.3</h1>
          
          </span>
        </div>

        <div className='div-trends7'></div>


        <div className='eyes2-trends-mount'>
          
          <span className='eyes2-name-box'>
          <h1 className='fur-name'>EYES:</h1>
          <h2 className='cross-name'>CYBORG</h2>
          </span>
          
          <h1 className='porc-eyes2-trends'>1,08%</h1>
          
          <span className='eyes2-box-trends'>
            <i class='bx bx-menu'></i>
            <h1 className='num-bored-trends'>190.7</h1>
          
          </span>
        </div>




      </div>
    
    </div>
);

export default Intro;
