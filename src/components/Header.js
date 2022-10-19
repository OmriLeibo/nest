import React from 'react';
import './Header.scss';
import MotionLink from './MotionLink';

const Header = () => {
  return (
    <ul className='navbar__links'>
      <MotionLink link='/'>HOME</MotionLink>
      <MotionLink link='/about'>ABOUT</MotionLink>
      <MotionLink link='/albums'>ALBUMS</MotionLink>
      <MotionLink link='/events'>EVENTS</MotionLink>
    </ul>
  );
};

export default Header;
