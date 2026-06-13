import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    };
  }
};

const FunnelContainer = ({ children, step, totalSteps, direction }) => {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="funnel-container">
      <div className="glass-effect glass-1"></div>
      <div className="glass-effect glass-2"></div>
      
      <div className="logo-container">
        <FaBrain size={32} color="#0b57d0" style={{ marginRight: '10px' }} />
        <span className="logo-text">NeuroFlow</span>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="step-wrapper"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FunnelContainer;
