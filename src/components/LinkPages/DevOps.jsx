import React from 'react';
import { motion } from 'framer-motion';

function DevOps() {
  return (
    <div className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center py-10">
      <motion.span 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
        className="title text-[#61DAFB] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-20 sm:mt-24 md:mt-32 lg:mt-40"
      >
        ••• DevOps Engineering •••
      </motion.span>
      <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
        className="content-container w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 mt-10 lg:mt-20"
      >
        <div className="text-container w-full lg:w-1/2 font-['DM_sans'] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
          DevOps is a transformative approach that integrates development and operations teams to streamline and enhance the software development lifecycle. By fostering a culture of collaboration and shared responsibility, DevOps breaks down traditional silos and promotes continuous improvement. Key practices include Continuous Integration and Continuous Deployment (CI/CD), which automate code integration, testing, and deployment, accelerating time-to-market while reducing errors. Infrastructure as Code (IaC) enables the automated management of infrastructure, ensuring consistency and scalability. Automated testing is incorporated to validate code quality throughout the development process, while comprehensive monitoring and logging provide insights into application performance and system health. Leveraging cloud services offers scalability and flexibility, and integrating security practices through DevSecOps addresses vulnerabilities from the outset. Overall, DevOps improves efficiency, enhances software quality, and enables faster delivery, supporting dynamic and rapidly evolving application needs.
        </div>
        <div className="icon-container w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <img
            src="/icons/infinity.png"
            alt="Infinity"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default DevOps;
