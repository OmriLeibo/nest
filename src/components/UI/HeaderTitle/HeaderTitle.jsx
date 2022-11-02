import React from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';

const HeaderTitle = () => {
  return (
    <Animate
          play
          start={{ opacity: 0, transform: 'translate(0, 0)' }}
          end={{ opacity: 1, transform: 'translate(10px, 10px)' }}
        >
          <h1 className='header__title'>NEST</h1>
        </Animate>
  )
}

export default HeaderTitle