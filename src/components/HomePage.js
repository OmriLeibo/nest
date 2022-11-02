import React from 'react';
import { motion } from 'framer-motion';
import PopUpModal from './UI/PopUpModal/PopUpModal';
import MotionText from './UI/MotionText/MotionText';
import './HomePage.scss';

const HomePage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 2 }}
      className='home-page__main'
    >
      <PopUpModal />
      <MotionText>WELCOME</MotionText>
    </motion.div>
  );
};

export default HomePage;
