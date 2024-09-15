import React, { useRef, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const slideIn = {
  hidden: { opacity: 0, y: -100 },  // Move from bottom to top
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to final position
};

function QuickLinks({ scrollToSection }) {
  const controls = useAnimation();
  const quickLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (quickLinksRef.current) {
        const rect = quickLinksRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
//bg-[#1e1e22]
  return (
    <div className='w-full h-screen bg-[#000]  flex flex-col justify-center items-center'>
      <motion.div 
          ref={quickLinksRef}
          variants={slideIn} 
          initial='hidden' 
          animate={controls} 
          className='flex flex-col sm:flex-row justify-between items-center max-w-screen-lg w-full px-4 sm:px-8 gap-8 sm:gap-12'>
        {/* Left section with Velandev and its description */}
        <div className='flex flex-col items-center text-center sm:text-left'>
          <div className='flex items-center justify-center mb-6 -ml-[16vw]'>
            {/* Logo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='mr-4'
            >
              <rect width="100" height="100" rx="10" fill="#282C34" />
              <path
                d="M 30 35 L 40 45 L 30 55"
                stroke="#61DAFB"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 70 35 L 60 45 L 70 55"
                stroke="#61DAFB"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="70" r="5" fill="#61DAFB" />
            </svg>
            {/* Velandev text */}
            <div className="text-lg sm:text-3xl font-semibold font-['Neue Montreal'] text-[#61DAFB]">Velandev</div>
          </div>
          {/* Velandev description */}
          <div className="text-gray-400 text-left text-sm sm:text-xl lg:text-2xl">
            <p>Velandev offers customized IT solutions<br/>
            designed to suit your specific requirements.<br/>
            Our team of experienced professionals blends<br/>
            technical expertise with innovative thinking<br/>
            to achieve outstanding outcomes.<br/>
            We enable businesses across various industries<br/>
            to excel in today’s digital world.<br/>
            Explore our services to see how we can elevate <br/>
            your organization to new heights.</p>
          </div>
          {/* Social Media Icons */}
          <div className='flex mt-8 -ml-[18vw] space-x-6'>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-blue-500 text-3xl sm:text-4xl">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/kumaravel-v-17/" target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-blue-500 text-3xl sm:text-4xl">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-blue-500 text-3xl sm:text-4xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right section with Quick Links and its additional text */}
        <div className='flex flex-col items-center mt-8 sm:mt-0 text-left sm:text-left'>
          {/* Quick Links section */}
          <div className="text-lg sm:text-3xl font-semibold font-['DM_sans'] text-white mb-4 -ml-[6vw]">Quick Links</div>
          {/* Links */}
          <div className="text-gray-500 text-sm sm:text-xl lg:text-2xl">
            <ul className="list-disc pl-6 sm:pl-8">
              <li><span onClick={() => scrollToSection('features')}>To Know Our Web Features</span></li>
              <li><span onClick={() => scrollToSection('services')}>Our Solution and Services</span></li>
              <li><span onClick={() => scrollToSection('about')}>About Us</span></li>
              <li><span onClick={() => scrollToSection('technologies')}>Our Technologies</span></li>
              <li><span onClick={() => scrollToSection('home')}>Welcome at Velandev</span></li>
              <li><span onClick={() => scrollToSection('contacts')}>Let's do working together</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default QuickLinks;
