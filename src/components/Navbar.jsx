import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ scrollToSection }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Detect mobile screen
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Update the isMobile state based on window width
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Debug: log the current pathname
  console.log('Current Pathname:', location.pathname);

  // Determine if we are on the relevant page
  const shouldHideMobileMenu = [
    '/quote',
    '/exploreservices',
    '/introduction',
    '/Web',
    '/Mobile',
    '/Seo',
    '/DevOps',
    '/CustomSolution',
  ].includes(location.pathname);
//bg-zinc-900
  return (
    <div className='fixed z-[999] w-full px-6 py-4 lg:px-20 lg:py-8 font-["DM"] font-bold bg-[#000] flex justify-between items-center'>
      <Link to="/" className='flex items-center'>
        
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
        <span className="ml-4 text-lg lg:text-xl font-['Neue_Montreal'] font-bold text-[#61DAFB]">Velandev</span>
      </Link>
      {!shouldHideMobileMenu && !isMobile && (
        <div className='hidden lg:flex items-center gap-10'>
          {["Home", "Features", "About", "Services", "Contacts"].map((item, index) => (
            <a
              key={index}
              className='text-base lg:text-lg capitalize font-light text-white cursor-pointer'
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </a>
          ))}
          <Link to="/quote">
            <button
              className='ml-4 px-4 py-2 bg-[#61DAFB] text-white rounded hover:bg-[#4FB4D3]'
            >
              Get a Quote
            </button>
          </Link>
        </div>
      )}
      {!shouldHideMobileMenu && (
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-white'>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}
      {isMobileMenuOpen && !shouldHideMobileMenu && (
        <div className='absolute top-16 left-0 w-full bg-[#282C34] flex flex-col items-center py-4 lg:hidden'>
          {["Home", "Features", "About", "Services", "Contacts"].map((item, index) => (
            <a
              key={index}
              className='text-lg capitalize font-light text-white py-2 cursor-pointer'
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(item.toLowerCase());
              }}
            >
              {item}
            </a>
          ))}
          <Link to="/quote" onClick={toggleMobileMenu}>
            <button
              className='mt-4 px-4 py-2 bg-[#61DAFB] text-white rounded hover:bg-[#4FB4D3]'
            >
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
