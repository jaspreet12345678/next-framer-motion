import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './contact.module.css';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const scale = 1 + Math.min(window.scrollY * 0.0005, 0.2); // Adjust the scale factor as needed
          controls.start({
            scale,
            transition: { duration: 0.5, ease: "easeInOut" } // Smooth zoom transition
          });
        } else {
          controls.start({ scale: 1 }); // Reset scale when out of view
        }
      });
    };
  
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1 // Trigger when at least 10% of the component is in view
    });
  
    const currentRef = containerRef.current; // Copy the current ref value
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);
  

  return (
    <div
      className={styles.contactUsContainer}
      style={{ maxWidth: '1280px', margin: '0 auto' }}
      ref={containerRef}
    >
      <div className={styles.imageWrapper}>
        <motion.img
          ref={ref}
          src={inView ? "/images/2.jpeg" : ""}
          alt="Contact Image"
          className={styles.image}
          animate={controls}
          initial={{ scale: 1 }}
        />
      </div>
      <div className={styles.formContainer}>
        <h2>Feel Free to Contact</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
