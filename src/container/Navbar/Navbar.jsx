import React from 'react';
import { FiGlobe } from 'react-icons/fi'
import { TbLiveView } from 'react-icons/tb'
import { TbCalendarTime } from 'react-icons/tb'
import { FiCrosshair } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'

import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
      <div className='v-line'></div>
      <div className='div-line'></div>
      <div className='navlist'>
        <div>
          <a href='#'>
          <span className='link_explor'><FiGlobe fontSize={24} />Explore</span>
          </a>
        </div>
        <div>
          <a href='#'>
          <span className='link_event'><TbLiveView fontSize={24} />Live Events</span>
          </a>
        </div>
        <div>
          <a href='#'>
          <span className='link_calend'><TbCalendarTime fontSize={24} />Calendar</span>
          </a>
        </div>
          <div className='h-line'></div>
        <div>
          <a href='#'>
          <span className='link_auto'><FiCrosshair fontSize={24} />Auto Buy</span>
          </a>
        </div>
        <div>
          <a href='#'>
          <span className='link_set'><FiSettings fontSize={24} />Settings</span>
          </a>
        </div>
      </div>
      <div className="header">
    </div>
      </nav>
);

export default Navbar;
