'use client';
import styles from './style.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';

export default function index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header} style={{zIndex:1000000, position:'absolute'}}>
            <div className={styles.bar}>
                <Link href="/">JASPREET</Link>
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    <p className={styles.shop}>Login</p>
                </motion.div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}
