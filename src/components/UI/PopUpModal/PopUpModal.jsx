import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0px 0px 80px 30px gray',
    color: 'white',
    fontFamily: 'Monoton, cursive',
    overflowY: 'scroll',
};


const PopUpModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        const timeout = setTimeout(openModal, 3000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <Modal
            sx={modalStyle}
            open={isModalOpen}
            onClose={closeModal}
        >
            <motion.ul
                layout
                style={{ textAlign: 'center', listStyle: 'none' }}
                className='upcoming-shows'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: [5, 1],
                    rotate: [5, 12, 15, 10, 5, 2],
                }}
                transition={{
                    ease: 'easeOut',
                    duration: 0.1,
                    times: [0.5, 0.4, 0.2, 1],
                    repeat: 0,
                    repeatDelay: 1,
                }}
            >
                <motion.h1>UPCOMING - SHOWS : </motion.h1>
                <motion.li>29.09.2022 - PACHO</motion.li>
                <motion.li>20.10.2022 - JUNK</motion.li>
                <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><motion.li>
                    VISIT-US-ON
                    <FaInstagram />
                </motion.li>
                </a>
            </motion.ul>
        </Modal>
    )
}

export default PopUpModal