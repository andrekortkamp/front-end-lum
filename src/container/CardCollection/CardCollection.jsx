import React from 'react';

import './CardCollection.css';
import images from '../../constants/images';

const CardCollection = () => (
  <div className='card-collection'>
        <div className='bored'>
          <img src={images.bored} alt="bored" />
        </div>
        <div className='name-card'>
          <h1 className='boredname'>Bored Ape Yacht Club</h1>
          <h2 className='wallet'>0x6080b4.s01993825...</h2>
        </div>
        <div className='iconscard'>
          <a href='#'><div className='icon-copy'>
          <img src={images.iconcopy} alt="copy" />
          </div></a>
          <a href='#'><div className='icon-moni'>
          <img src={images.iconmoni} />
          </div></a>
          <a href='#'><div className='icon-open'>
          <img src={images.iconopen} />
          </div></a>
          <a href='#'><div className='icon-ethers'>
          <img src={images.iconethers} />
          </div></a>
          <div className='lifetime-card'>
            <h1 className='lifet-name'>LIFETIME</h1>
            <h2 className='days-lifet'>453d</h2>
          </div>
          <div className='items-card'>
            <h1 className='items-name'>ITEMS</h1>
            <h2 className='number-items'>10K</h2>
          </div>
          <div className='floor-card'>
            <h1 className='floor-name'>FLOOR</h1>
            <div className='floor-icon'>
            <i class='bx bx-menu'></i>
            <h2 className='number-floor'>145</h2>
            </div>
          </div>
          <div className='roy-card'>
            <h1 className='roy-name'>ROYALTES</h1>
            <h2 className='number-roy'>7,5%</h2>
          </div>
          <div className='vol24h-card'>
            <h1 className='vol24h-name'>VOL 24H</h1>
            <div className='vol24h-icon'>
            <i class='bx bx-menu'></i>
            <h2 className='number-vol24h'>1.581K</h2>
            </div>
          </div>
          <div className='vol7d-card'>
            <h1 className='vol7d-name'>VOL 7D</h1>
            <div className='vol7d-icon'>
            <i class='bx bx-menu'></i>
            <h2 className='number-vol7d'>12.9K</h2>
            </div>
          </div>
          <div className='vol-mark'>
            <img src={images.arrow} />
            <h1 className='mark-text'>12,02%</h1>

          </div>
          <div className='vol-mark7d'>
          <img src={images.Arrow2} />
            <h1 className='mark7d-text'>12,02%</h1>

          </div>
        </div>
      </div>
);

export default CardCollection;
