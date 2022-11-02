import React from 'react';
import AnimateLink from './AnimateLink';
import { motion } from 'framer-motion';
import { AnimateGroup } from 'react-simple-animate';

const headerLinks = [{ label: 'home', link: '/' }, { label: 'about', link: '/about' }, { label: 'albums', link: '/albums' }, { label: 'events', link: '/events' }];

const AnimateLinks = () => {
    return (
        <AnimateGroup play>
            <motion.ul className='navbar__links'>
                {headerLinks.map(({link, label}) => (
                    <AnimateLink key={label} linkName={link} label={label} />
                ))}
            </motion.ul>
        </AnimateGroup>
    )
}

export default AnimateLinks