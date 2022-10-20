import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import MotionLink from './MotionLink';
import { Animate, AnimateKeyframes, AnimateGroup} from "react-simple-animate";

const Header = () => {
  return (
    <div>
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <h1>React simple animate</h1>
      </Animate>
      <AnimateKeyframes
        play
        delay={5}
        iterationCount={10}
        keyframes={['opacity: 0', 'opacity: 1']}
      >
        <h1>React simple animate with keyframes</h1>
      </AnimateKeyframes>
      <AnimateGroup play>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
        first
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
        second
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
        third
      </Animate>
    </AnimateGroup>

      <motion.ul className='navbar__links'>
        <MotionLink link='/'>HOME</MotionLink>
        <MotionLink link='/about'>ABOUT</MotionLink>
        <MotionLink link='/albums'>ALBUMS</MotionLink>
        <MotionLink link='/events'>EVENTS</MotionLink>
      </motion.ul>
    </div>
  );
};

export default Header;
