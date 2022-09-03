import React from 'react';

import './Header.css';
import images from '../../constants/images';

const Header = () => (
  <div className="header">
      <div className='search'>
        <a href='#'><i class='bx bx-search'></i></a> 
        <input type="text" placeholder='Search collections'></input>
      </div>
      <div>
        <h1 className='gwei'>
          <span className='color1'>71</span>
          <span className='color2'>GWEI</span>
        </h1>
      </div>
      <div className='mini-div'></div>
      <div className='welcome'>
        <h1 className='welcometex'>Hi, 02a...2837</h1>
        <a href='#'><i class='bx bx-menu-alt-right'></i></a>
      </div>
      <span className='icn-esc'>
      <a href='#'><i class='bx bx-search'></i></a>
      </span>
      <span className="icn-esc">
      <a href='#'><img src={images.menu} alt="logo" /></a>
      </span>
      <div className='div-head'></div>
  </div>
);

export default Header;
