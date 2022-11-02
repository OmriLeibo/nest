import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import MotionLink from './MotionLink';
import { Animate, AnimateGroup } from 'react-simple-animate';
import VideoBackground from './VideoBackground';

const Header = () => {
  return (
    <motion.div
      className='box'
      animate={{
        scale: [1, 0.2, 0.2, 0.1, 1],
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 3, 5, 5, 5],
        repeat: 0,
        repeatDelay: 1
      }}
    >

      <Animate
        play
        start={{ opacity: 0, transform: 'translate(0, 0)' }}
        end={{ opacity: 1, transform: 'translate(10px, 10px)' }}
      >
        <h1 className='header__title'>NEST</h1>
      </Animate>

      <AnimateGroup play>
        <motion.ul className='navbar__links'>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={0}
          >
            <MotionLink link='/'>HOME</MotionLink>
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={1}
          >
            <MotionLink link='/about'>ABOUT</MotionLink>
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={2}
          >
            <MotionLink link='/albums'>ALBUMS</MotionLink>
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={3}
          >
            <MotionLink link='/events'>EVENTS</MotionLink>
          </Animate>
        </motion.ul>
      </AnimateGroup>
    </motion.div>
  );
};

export default Header;
