import { motion } from 'framer-motion';
import styles from './SkillPercentage.module.css'; // Ensure you have this CSS module

const Circle = ({ score, title }) => {
  const percentage = parseInt(score, 10); // Convert score to number

  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle}>
        <motion.div
          className={styles.water}
          initial={{ height: '0%' }}
          animate={{ height: `${percentage}%` }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <div className={styles.score}>{score}</div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

const SkillPercentage = () => {
  const skills = [
    { score: '75%', title: 'Graphic Design' },
    { score: '85%', title: 'Web Development' },
    { score: '90%', title: 'Brand Design' },
    { score: '80%', title: 'Web Designing' }
  ];

  return (
    <div className={styles.container}>
      {skills.map((skill, index) => (
        <Circle key={index} score={skill.score} title={skill.title} />
      ))}
    </div>
  );
};

export default SkillPercentage;
