import React from 'react';
import { motion } from 'framer-motion';

export default function Description() {
    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 50, duration: 2 }
        }
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 50, duration: 2 }
        }
    };

    const topVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, duration: 2 }
        }
    };

    const bottomVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, duration: 2 }
        }
    };

    return (
        <div className='flex justify-center my-40 flex-wrap text-center'>
            <motion.span
                className='text-[7.5vw] uppercase leading-none'
                initial="hidden"
                animate="visible"
                variants={leftVariants}
            >
                The quick
            </motion.span>
            <motion.span
                className='text-[7.5vw] uppercase leading-none'
                initial="hidden"
                animate="visible"
                variants={topVariants}
            >
                brown fox
            </motion.span>
            <motion.span
                className='text-[7.5vw] uppercase leading-none'
                initial="hidden"
                animate="visible"
                variants={rightVariants}
            >
                jumps over
            </motion.span>
            <motion.span
                className='text-[7.5vw] uppercase leading-none'
                initial="hidden"
                animate="visible"
                variants={bottomVariants}
            >
                the lazy dog
            </motion.span>
        </div>
    );
}
