// Feedback.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './feedback.module.css'; // Import CSS Module

const Feedback = () => {
  const reviews = [
    { id: 1, name: "John Doe", image: "/images/home.png", rating: 4 },
    { id: 2, name: "Jane Smith", image: "/images/contact.png", rating: 5 },
    { id: 3, name: "Emily Johnson", image: "/images/lookbook.png", rating: 3 },
    { id: 4, name: "Harsh Raikwar", image: "/images/shop.png", rating: 2.5 }
  ];

  return (
    <div className={styles.feedbackContainer}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.card}>
          <img src={review.image} alt={review.name} className={styles.image} />
          <div className={styles.name}>{review.name}</div>
          <div className={styles.rating}>
            {Array.from({ length: 5 }, (_, index) => (
              <motion.span
                key={index}
                className={`${styles.star} ${index < review.rating ? styles.shining : ''}`}
                animate={{ scale: index < review.rating ? [1, 1.2, 1] : 1 }} // Pulsing effect
                transition={{ duration: 0.5 }}
              >
                ★
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
