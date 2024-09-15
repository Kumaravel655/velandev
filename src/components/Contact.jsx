import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const controls = useAnimation();
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [controls]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ff8lwsr',
        'template_e416sbo',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('SUCCESS! Your message has been sent.');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus(`FAILED: ${error.text || 'An error occurred'}`);
        }
      );
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const slideIn = {
    hidden: { opacity: 0, y: 100 }, // Start 100px to the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to the original position
  };

  return (
    <div ref={contactRef} className='w-full min-h-screen bg-[#2a2a2e] flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-8'>
      {/* Left Side */}
      <motion.div 
        initial='hidden' 
        animate={controls} 
        variants={slideIn} 
        className='flex flex-col justify-center items-start lg:ml-20 mb-8 lg:mb-0 w-full lg:w-1/2'
      >
        <div className='mb-10'>
          <span className='title text-[#61DAFB] text-2xl'> ••• Contact Us ••• </span>
          <p className='text-white mt-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-["DM_sans"]'>
            Got a project in mind? Don't hesitate to reach out to us!
          </p>
        </div>
        <div className='border border-gray-300 p-4 mb-4 w-full'>
          <div className='flex items-center mb-2'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/>
            <p className="text-blue-500 text-lg lg:text-xl ml-4">Location</p>
          </div>
          <p className="text-white text-sm lg:text-base">137b,sholighur,vellore,tamiladu,india</p>
        </div>
        <div className='border border-gray-300 p-4 mb-4 w-full'>
          <div className='flex items-center mb-2'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/new-post.png" alt="new-post"/>
            <p className="text-blue-500 text-lg lg:text-xl ml-4">Email</p>
          </div>
          <p className="text-white text-sm lg:text-base">Velandev@gmail.com</p>
        </div>
        <div className='border border-gray-300 p-4 mb-4 w-full'>
          <div className='flex items-center mb-2'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/phone.png" alt="phone"/>
            <p className="text-blue-500 text-lg lg:text-xl ml-4">Phone</p>
          </div>
          <p className="text-white text-sm lg:text-base">+91 6369472659<br/>+91 9025530104</p>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div 
        initial='hidden' 
        animate={controls} 
        variants={slideIn} 
        className='flex justify-center items-center w-full lg:w-1/2'
      >
        <form ref={form} onSubmit={sendEmail} className='bg-white p-6 rounded-lg w-full max-w-lg mx-auto'>
          <label className='block mb-2'>Name</label>
          <input type="text" name="from_name" className='border border-gray-300 p-2 mb-4 w-full' />
          <label className='block mb-2'>Email</label>
          <input type="email" name="from_email" className='border border-gray-300 p-2 mb-4 w-full' />
          <label className='block mb-2'>Message</label>
          <textarea name="message" className='border border-gray-300 p-2 mb-4 w-full'></textarea>
          <input type="submit" value="Send" className='bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer w-full' />
        </form>
      </motion.div>

      {/* Status Message */}
      {status && (
        <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded'>
          {status}
        </div>
      )}
    </div>
  );
}

export default Contact;
