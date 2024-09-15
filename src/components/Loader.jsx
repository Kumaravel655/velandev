import React from 'react';
import { motion } from 'framer-motion';
import Loader from '/loader.png';

function Preloader() {
  return (
    //bg-[#1e1e22]
    <div className="fixed inset-0 flex justify-center items-center bg-[#000] z-50">
      <motion.div
        animate={{ rotate: [0, 180] }}
        transition={{
          duration: 1,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'mirror', 
        }}
      >
        <img src={Loader} alt="Loading" className="w-32 h-32 sm:w-60 sm:h-60" />
      </motion.div>
    </div>
  );
}

export default Preloader;
