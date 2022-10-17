import React from 'react';
import './Header.scss';
import AppBar from '@mui/material/AppBar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';

const Header = () => {
  return (
    <AppBar
      sx={{
        background: 'black',
      }}
    >
      <nav className='navbar'>
       
        <ul className='navbar__links'>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link to='/'>HOME</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link to='/about'>ABOUT</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link to='/events'>EVENTS</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link to={'/albums'}>ALBUMS</Link>
          </motion.li>
        </ul>
      </nav>
      <Outlet />
    </AppBar>
  );
};

export default Header;
