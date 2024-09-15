import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import Stats from './Stats';
import './Landing.css';

function LandingPage() {
  const lines = [
    "Web Development Solutions & IT Services",
    "Mobile Development Solutions and Services",
    "SEO for better experience of your business",
    "DevOps Engineering and Services"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === lines.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const textTransition = { duration: 1, ease: 'easeInOut' };

  return (
    <div className='relative w-full h-screen'>
      {/* Blurred Background Image */}
      <div 
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: 'url("/images/B.jpg")',
          filter: 'blur(2px)',
          zIndex: -1,
        }}
      ></div>

      {/* Content on top of the background */}
      <div className='relative w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-4'>
        {/* Rotating Circle of FaCircle Icons */}
        <div className='absolute top-[12%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-spin-counterclockwise hidden sm:flex'>
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
        <div className='absolute top-[12%] right-[10%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-spin-counterclockwise hidden sm:flex'>
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

        <div className="text-container flex flex-col items-center text-center w-full mt-[10vh] sm:mt-[12vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
              transition={textTransition}
              className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl font-['Founders_Grotesk_X-Condensed'] text-white mb-10"
            >
              {lines[activeIndex] === "SEO for better experience of your business" ? (
                <>
                  SEO for better experience <br /> of your business
                </>
              ) : lines[activeIndex] === "Web Development Solutions & IT Services" ? (
                <>
                  Web Development Solutions <br /> & IT Services
                </>
              ) : lines[activeIndex] === "Mobile Development Solutions and Services" ? (
                <>
                  Mobile Development Solutions <br /> and Services
                </>
              ) : lines[activeIndex] === "DevOps Engineering and Services" ? (
                <>
                  DevOps Engineering <br /> and Services
                </>
              ) : (
                lines[activeIndex]
              )}
            </motion.div>
          </AnimatePresence>
          <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/introduction">
              <button className='flex uppercase items-center justify-center gap-2 font-bold sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-lg text-white hover:bg-blue-900 transition duration-300'>
                Get Started &gt;&gt;
              </button>
            </Link>
            <Link to="/exploreservices">
              <button className='flex uppercase items-center justify-center gap-2 font-bold sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-lg text-white hover:bg-blue-900 transition duration-300'>
                Explore Services &gt;&gt;
              </button>
            </Link>
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
}

export default LandingPage;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// function LandingPage() {
//   const lines = [
//     "Web Development Solutions & IT Services",
//     "Mobile Development Solutions and Services",
//     "SEO for better experience of your business",
//     "DevOps Engineering and Services"
//   ];

//   const images = [
//     '/images/A.jpg',
//     '/images/B.jpg',
//     '/images/C.jpg',
//     '/images/E.jpg'
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prevIndex => (prevIndex === lines.length - 1 ? 0 : prevIndex + 1));
//     }, 4000); // Increased time for a smoother transition

//     return () => clearInterval(interval);
//   }, []);

//   const textVariants = {
//     enter: { opacity: 0, y: 20 },
//     center: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   };

//   const imageVariants = {
//     enter: { opacity: 0, scale: 0.95 },
//     center: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 1.05 },
//   };

//   const textTransition = { duration: 1, ease: 'easeInOut' }; // Slightly longer duration
//   const imageTransition = { duration: 1, ease: 'easeInOut' }; // Slightly longer duration

//   return (
//     <div className='relative w-full h-screen bg-[#1e1e22] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20'>
//       <div className="text-container flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             variants={textVariants}
//             transition={textTransition}
//             className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl font-['Founders_Grotesk_X-Condensed'] text-white mb-6 lg:mb-10"
//           >
//             {lines[activeIndex] === "SEO for better experience of your business" ? (
//               <>
//                 SEO <br /> for better experience of your business
//               </>
//             ) : lines[activeIndex] === "Web Development Solutions & IT Services" ? (
//               <>
//                 Web Development Solutions <br /> & IT Services
//               </>
//             ) : lines[activeIndex] === "Mobile Development Solutions and Services" ? (
//               <>
//                 Mobile Development Solutions <br /> and Services
//               </>
//             ) : lines[activeIndex] === "DevOps Engineering and Services" ? (
//               <>
//                 DevOps Engineering <br /> and Services
//               </>
//             ) : (
//               lines[activeIndex]
//             )}
//           </motion.div>
//         </AnimatePresence>
//         <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
//           <Link to="/introduction">
//             <button className='flex uppercase items-center justify-center gap-2 sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-full text-white hover:bg-blue-900 transition duration-300'>
//               Get Started &gt;&gt;
//             </button>
//           </Link>
//           <Link to="/exploreservices">
//             <button className='flex uppercase items-center justify-center gap-2 sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-full text-white hover:bg-blue-900 transition duration-300'>
//               Explore Services &gt;&gt;
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="image-container flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={activeIndex}
//             src={images[activeIndex % images.length]}
//             alt="Dynamic"
//             initial="enter"
//             animate="center"
//             exit="exit"
//             variants={imageVariants}
//             transition={imageTransition}
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg"
//           />
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
