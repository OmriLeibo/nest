import React from 'react';
import { motion } from 'framer-motion';

const MotionText = ({ children, duration = 2, ease = 'easeIn' }) => {
    return (
        <motion.h1
            className='home__main'
            animate={{ opacity: 0.5 }}
            transition={{ duration, ease }}>
            {children}
        </motion.h1>
    )
}

export default MotionText