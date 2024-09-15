import React from 'react';
import { motion } from 'framer-motion';

function CustomSolution() {
  return (
    <div className="w-full min-h-screen bg-[#1e1e22] flex flex-col items-center py-13">
      <motion.span 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
        className="title text-[#61DAFB] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-20 sm:mt-24 md:mt-32 lg:mt-40"
      >
        ••• Custom Enterprise Solutions •••
      </motion.span>
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }}
        className="content-container w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 mt-10 lg:mt-20"
      >
        <div className="text-container w-full lg:w-1/2 font-['DM_sans'] text-white text-lg sm:text-xl md:text-2xl lg:text mb-5-3xl">
          Custom enterprise solutions refer to tailored software systems designed to meet the specific needs and requirements of large organizations. Unlike off-the-shelf software, which provides a one-size-fits-all approach, custom solutions are developed to address unique business processes, challenges, and goals. These solutions can encompass a wide range of applications, including customer relationship management (CRM) systems, enterprise resource planning (ERP) systems, supply chain management (SCM) tools, and more. Custom enterprise solutions are built with flexibility and scalability in mind, allowing organizations to adapt the software as their needs evolve. They often involve a thorough analysis of existing workflows and business needs to ensure that the solution integrates seamlessly with other systems and processes within the organization. Development typically involves a collaborative approach between the organization and the software provider to design, build, and implement a solution that enhances operational efficiency, improves data management, and supports strategic decision-making. Key benefits of custom enterprise solutions include the ability to tailor functionality to specific business processes, provide a competitive edge through unique features, and offer scalability to accommodate growth and changing requirements. Additionally, these solutions often include robust support and maintenance services to ensure continued performance and address any issues that arise. Custom enterprise solutions ultimately enable organizations to streamline operations, enhance productivity, and achieve their strategic objectives more effectively.
        </div>
        <div className="icon-container w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
          <img
            src="/icons/office.png"
            alt="Office"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default CustomSolution;
