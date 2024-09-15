import React from 'react';
import { motion } from 'framer-motion';

function Web() {
  return (
    <div className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center py-13">
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="title text-[#61DAFB] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-20 sm:mt-24 md:mt-32 lg:mt-40"
      >
        ••• Web App Development •••
      </motion.span>
      <div className="content-container w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 mt-10 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="text-container w-full lg:w-1/2 font-['DM_sans'] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5"
        >
          Web app development services encompass a comprehensive range of solutions designed to create, maintain, and enhance web applications. These services include custom web application development, where expert developers tailor applications to meet specific business needs and objectives. They also involve UI/UX design, ensuring that the application is visually appealing and easy to navigate, providing a seamless user experience. Web app development services often cover front-end and back-end development, utilizing modern frameworks and technologies to build responsive, dynamic, and secure applications. Additionally, these services may offer integration with third-party systems, API development, and cloud deployment, enabling businesses to scale their applications efficiently. Testing and quality assurance are integral components, ensuring that the application is robust and free from bugs. Post-launch support and maintenance services are also provided to ensure the ongoing performance, security, and updates of the web application. Whether for e-commerce, content management, or enterprise solutions, web app development services play a crucial role in delivering high-quality, scalable, and efficient web applications tailored to the unique needs of businesses.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="icon-container w-full lg:w-1/2 flex items-center mb-5 justify-center mt-10 lg:mt-0"
        >
          <img
            src="/icons/programming.png"
            alt="Programming"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Web;
