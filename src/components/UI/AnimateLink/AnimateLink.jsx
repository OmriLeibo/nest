import React from 'react';
import MotionLink from '../../MotionLink';
import { Animate } from 'react-simple-animate';

const AnimateLink = ({ linkName, label }) => {
  console.log(linkName, label)
  return (
    <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
      <MotionLink link={linkName}>{label.toUpperCase()}</MotionLink>
    </Animate>
  );
};

export default AnimateLink;
