import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function Services() {
  const controls = useAnimation();
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [controls]);

  return (
    <div ref={servicesRef} className='w-full h-full bg-[#000] flex flex-col items-center justify-center'>
      <motion.span
        variants={slideIn}
        initial='hidden'
        animate={controls}
        className='title text-[#61DAFB] text-2xl mt-20 sm:mt-[10vh]'
      >
        ••• Our Services •••
      </motion.span>
      <motion.span
        variants={slideIn}
        initial='hidden'
        animate={controls}
        className='mt-20 sm:mt-[10vh] sub-title font-["Founders_Grotesk_X-Condensed"] text-white text-4xl sm:text-8xl mb-4'
      >
        Our Expertise
      </motion.span>
      <div className='sm:mt-10 flex flex-wrap justify-center gap-5 sm:gap-10 p-4 rounded-lg transition duration-300'>
        <Link to="/Web">
          <ServiceCard controls={controls} icon="/icons/programming.png" alt="Programming" title="Web Application Development" />
        </Link>
        <Link to="/Mobile">
          <ServiceCard controls={controls} icon="/icons/app-settings.png" alt="App Settings" title="Mobile Application Developments" />
        </Link>
        <Link to="/Seo">
          <ServiceCard controls={controls} icon="/icons/seo.png" alt="SEO" title="Search Engine Optimization" />
        </Link>
        <Link to="/DevOps">
          <ServiceCard controls={controls} icon="/icons/infinity.png" alt="Infinity" title="DevOps Engineering" />
        </Link>
        <Link to="/CustomSolutions">
          <ServiceCard controls={controls} icon="/icons/office.png" alt="Office" title="Custom Enterprise Solutions" />
        </Link>
      </div>
    </div>
  );
}

function ServiceCard({ controls, icon, alt, title }) {
  return (
    <motion.div
      variants={slideIn}
      initial='hidden'
      animate={controls}
      className="flex flex-col items-center w-40 sm:w-60"
    >
      <img src={icon} alt={alt} className="w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-125" />
      <span className="text-white mt-2 text-sm sm:text-base font-[Neue-Montreal] font-semibold text-center">{title}</span>
    </motion.div>
  );
}

export default Services;
