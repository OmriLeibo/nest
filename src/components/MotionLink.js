import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './MotionLink.scss';

const MotionLink = ({ link, children }) => {
  return (
    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{originX: 0.5}}>
      <NavLink to={`${link}`} className='motion-links__link'>
        {children}
      </NavLink>
    </motion.li>
  );
};

export default MotionLink;
