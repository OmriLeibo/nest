import React from 'react';
import { motion } from 'framer-motion';

const HeaderWrapper = ({ children }) => {
    return (
        <motion.div
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
        >{children}</motion.div>
    )
}

export default HeaderWrapper