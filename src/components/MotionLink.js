import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MotionLink.scss';

const MotionLink = ({ link, children }) => {
  return (
    <div className='motion-links'>
      <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link to={`${link}`} className='motion-links__link'>{children}</Link>
      </motion.li>
    </div>
  );
};

export default MotionLink;
