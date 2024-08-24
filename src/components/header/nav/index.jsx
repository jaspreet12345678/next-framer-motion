'use client';
import styles from './style.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
    alt: "Home"
  },
  {
    title: "Shop",
    href: "/shop",
    src: "shop.png",
    alt: "Shop"
  },
  {
    title: "About Us",
    href: "/about",
    src: "about.png", 
    alt: "About Us"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
    alt: "Contact"
  }
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
        </div>
        <Image
          src={links[selectedLink.index].src}
          alt={links[selectedLink.index].alt}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
