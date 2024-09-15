import React from 'react';
import { motion } from 'framer-motion';
import { DiResponsive } from "react-icons/di";
import { MdAppSettingsAlt } from "react-icons/md";
import { GiBullseye } from "react-icons/gi";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import { FcSupport } from "react-icons/fc";

const bounce = {
  hidden: { scale: 1 },
  visible: { 
    scale: [1, 1.2, 1], 
    transition: { 
      duration: 1, 
      ease: 'easeOut', 
      repeat: Infinity,
      repeatType: 'loop'
    }
  },
};

function Features() {
  return (
    <div className='w-full h-full bg-[#2a2a2e] flex flex-col items-center px-4 md:px-10'>
      <span className='title text-[#61DAFB] text-xl mt-20 text-center'> ••• Key Functionalities ••• </span>
      <span className='mt-8 md:mt-16 sub-title font-["Founders_Grotesk_X-Condensed"] text-white text-3xl md:text-5xl lg:text-7xl mb-4 text-center'>
        The Designing Features of Web
      </span>
      <div className='p-6 md:p-16 rounded-lg flex flex-wrap justify-center gap-3'>
        <FeatureItem icon={<DiResponsive className='text-2xl md:text-3xl lg:text-5xl' color='#61DAFB' />} text="Responsive Design" />
        <FeatureItem icon={<MdAppSettingsAlt className='text-2xl md:text-3xl lg:text-5xl' color='#61DAFB' />} text="Extensive Configuration" />
        <FeatureItem icon={<GiBullseye className='text-2xl md:text-3xl lg:text-5xl' color='#61DAFB' />} text="Modern Motion Design" />
        <FeatureItem icon={<TiArrowMaximiseOutline className='text-2xl md:text-3xl lg:text-5xl' color='#61DAFB' />} text="SEO Friendly Coding" />
        <FeatureItem icon={<FcSupport className='text-2xl md:text-3xl lg:text-5xl' color='#61DAFB' />} text="Best Technical Assistance" />
      </div>
    </div>
  );
}

const FeatureItem = ({ icon, text }) => {
  return (
    <motion.div 
      className='flex flex-col items-center bg-[#1e1e22] p-2 md:p-4 lg:p-6 m-1 md:m-3 rounded-lg hover:bg-gray-900 transition duration-300'
      variants={bounce}
      initial='hidden'
      animate='visible'
    >
      <motion.div 
        className='rounded-full bg-[#2a2a2e] p-1 md:p-2 lg:p-3'
        variants={bounce}
        initial='hidden'
        animate='visible'
      >
        {icon}
      </motion.div>
      <span className='text-white mt-2 font-semibold text-xs md:text-sm lg:text-base'>{text}</span>
    </motion.div>
  );
}

export default Features;
