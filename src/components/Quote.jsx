import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Map from './Map';


function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ff8lwsr',
        'template_e416sbo',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use Vite's environment variable here
      )
      .then(
        () => {
          setStatus('SUCCESS! Your message has been sent.');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          setStatus(`FAILED: ${error.text}`);
        }
      );
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);

      // Cleanup timeout if status changes before 3 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <div className='w-full min-h-[100vh] bg-[#2a2a2e] flex flex-col lg:flex-row justify-between py-20'>
        {/* Left Side */}
        <motion.div  initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }} className='flex flex-col justify-center items-start p-6 lg:ml-20 w-full lg:w-1/2'>
          <div className='mb-10'>
            <span className='title text-[#61DAFB] text-2xl'> ••• Let's do work together ••• </span>
            <p className='text-white mt-10 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-["Founders_Grotesk_X-Condensed"]'>
              Got a project in mind? Don't hesitate to reach out to us!</p>
          </div>
          <div className='border border-gray-300 p-4 mb-4'>
            <div className='flex items-center mb-2'>
              <img width="48" height="48" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/>
              <p className="text-blue-500 text-xl lg:text-2xl">Location</p>
            </div>
            <p className="text-white text-sm lg:text-base">137b,sholighur,vellore,tamiladu,india</p>
          </div>
          <div className='border border-gray-300 p-4 mb-4'>
            <div className='flex items-center mb-2'>
              <img width="48" height="48" src="https://img.icons8.com/color/48/new-post.png" alt="new-post"/>
              <p className="text-blue-500 text-xl lg:text-2xl">Email</p>
            </div>
            <p className="text-white text-sm lg:text-base">Velandev@gmail.com</p>
          </div>
          <div className='border border-gray-300 p-4 mb-4'>
            <div className='flex items-center mb-2'>
              <img width="48" height="48" src="https://img.icons8.com/color/48/phone.png" alt="phone"/>
              <p className="text-blue-500 text-xl lg:text-2xl">Phone</p>
            </div>
            <p className="text-white text-sm lg:text-base">+91 6369472659 <br/> +91 9025530104</p>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div  initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }} className='flex flex-col justify-center items-center mt-2 p-6 lg:mr-20 w-full lg:w-1/2'>
          <form ref={form} onSubmit={sendEmail} className='bg-white p-6 rounded-lg w-full'>
            <label className='block mb-2'>Name</label>
            <input type="text" name="from_name" className='border border-gray-300 p-2 mb-4 w-full' />
            <label className='block mb-2'>Email</label>
            <input type="email" name="from_email" className='border border-gray-300 p-2 mb-4 w-full' />
            <label className='block mb-2'>Message</label>
            <textarea name="message" className='border border-gray-300 p-2 mb-4 w-full'></textarea>
            <input type="submit" value="Send" className='bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer w-full' />
          </form>
          
          {/* Status Message */}
          {status && (
            <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded'>
              {status}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Map Section */}
    
    </>
  );
}

export default Contact;
