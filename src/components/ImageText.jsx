import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ImageTextComponent() {
  const [text, setText] = useState('');
  const fullText = "I Enjoy Solving Problems\nWith Scalable Solutions";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;    
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', maxWidth: '1280px' }}>
      <div style={{ display: 'flex', width: '50%', gap: '20px', marginTop: '60px' }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/5.jpg" alt="Image 1" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        </motion.div>
        <div style={{ gap: '20px' }}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/images/6.jpg" alt="Image 2" style={{ width: '145px', height: '145px', objectFit: 'cover' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src="/images/2.jpg" alt="Image 3" style={{ width: '145px', height: '145px', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>

      <div style={{ width: '50%', paddingLeft: '20px', marginTop: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', textTransform: 'uppercase' }}>About Me</h2>
        </div>

  
        <motion.p
          style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'pre-line' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.p>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
          Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
          aeci velit, sed quia non numquam eius modi tempora incidunt lao
          magnam aliquam quaerat voluptatem reprehenderit.
          <br /><br />
          Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
          reprehenderit non numquam eius.
        </p>
        <motion.a
          href="/path/to/cv.pdf"
          download
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none',
            textTransform: 'uppercase',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>
    </div>
  );
}
