import React from 'react';
import { motion } from 'framer-motion';
import Web from '../components/LinkPages/Web';
import Mobile from '../components/LinkPages/Mobile';
import Seo from '../components/LinkPages/Seo';
import DevOps from '../components/LinkPages/DevOps';
import Footer from '../components/Footer';
import CustomSolution from '../components/LinkPages/CustomSolution';
import '../components/Landing.css';
import { FaCircle } from 'react-icons/fa';


// const pageVariants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0 },
// };

// const pageTransition = {
//   type: 'spring',
//   stiffness: 50,
// };

function ExploreServices() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='explore w-full min-h-screen bg-[#1e1e22] py-10'>
        <div
          className="flex flex-col items-center overflow-hidden"
          style={{ backgroundColor: '#1e1e22' }} // Ensure background color is set
        >
          <div className="w-full">
            <Web />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <Mobile />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <Seo />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <DevOps />
            <hr className="w-3/4 bg-gray-100 mx-auto my-0" /> {/* Reduced margin-top */}
            <CustomSolution />
          </div>
        </div>
        <div className='fixed top-[12%] right-[10%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-spin-counterclockwise hidden sm:flex'>
          <div className='relative w-full h-full flex items-center justify-center'>
            {[...Array(12)].map((_, i) => (
              <FaCircle
                key={i}
                className='text-white absolute'
                style={{
                  top: `${50 - 45 * Math.cos((i * 30) * (Math.PI / 180))}%`,
                  left: `${50 + 45 * Math.sin((i * 30) * (Math.PI / 180))}%`,
                  transform: 'translate(-50%, -50%)',
                  fontSize: '8px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreServices;
