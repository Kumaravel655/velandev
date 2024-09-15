import React from 'react';
import { motion } from 'framer-motion';
// import Stats from './Stats';

function Technologies() {
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.25, rotate: 10 },
    pulse: {
      scale: [1.5, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <div className='w-full h-full bg-[#2a2a2e] flex flex-col items-center px-4 md:px-10'>
      <span className='title text-[#61DAFB] text-2xl mt-20'> ••• Technologies We Use ••• </span>
      <div className='container flex flex-col items-center mt-[10vh] mb-[10vh]'>
        <div className="icon-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10  p-4 rounded-md">
          <motion.img
            src="/icons/icons8-angular-48.png"
            alt="Angular Icon"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-node-js-48.png"
            alt="Node JS"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-css-48.png"
            alt="CSS3"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-html5-48.png"
            alt="HTML5"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-mongo-db-48.png"
            alt="MongoDB"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-nextjs-64.png"
            alt="Next.js"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-react-native-48.png"
            alt="React Native"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-python-48.png"
            alt="Python"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-ruby-48.png"
            alt="Ruby"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
          <motion.img
            src="/icons/icons8-wordpress-48.png"
            alt="WordPress"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
           <motion.img
            src="/icons/django.png"
            alt="WordPress"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
           <motion.img
            src="/icons/icons8-nodejs-96.png"
            alt="WordPress"
            className="w-20 h-20"
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
          />
        </div>
      </div>
      {/* <Stats /> */}
    </div>
  );
}

export default Technologies;
