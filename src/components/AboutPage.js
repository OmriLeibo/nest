import React from 'react';
import './AboutPage.scss';
import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

const AboutPage = () => {
  return (
    <div className='about__main'>
      <motion.div>
        <h1>About Us</h1>
      </motion.div>
      {/* <VideoBackground /> */}
    </div>
  );
};

export default AboutPage;
