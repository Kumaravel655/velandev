import React from 'react';
import "./Testimonial.css";
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { testimonials } from '../data';

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function Testimonial() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className='testimonials bg-gray-300 py-12'>
      <motion.div
        ref={ref}
        className='container mx-auto'
        variants={slideIn}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className='flex flex-col lg:flex-row lg:items-center'>
          <div className='lg:w-1/2 mb-8 lg:mb-0 font-["DM_sans"] text-center lg:text-left'>
            <h3 className='text-2xl font-bold mb-4'>Testimonials</h3>
            <p className='text-lg'>
              Appreciation from our passionate & satisfied clients.
            </p>
          </div>
          <div className='lg:w-1/2'>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 3000 }}
              slidesPerView='auto'
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name} className='p-6'>
                  <div className='testimonial-item bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center mb-4'>
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        className='testimonial-img w-24 h-24 rounded-full border-4 border-gray-100 mr-4'
                      />
                      <div>
                        <h3 className='text-xl font-semibold'>
                          {testimonial.name}
                        </h3>
                        <h4 className='text-sm text-gray-500'>
                          {testimonial.job}
                        </h4>
                        <div className='stars flex mt-2 text-yellow-400'>
                          <FaStar className='w-5 h-5' />
                          <FaStar className='w-5 h-5' />
                          <FaStar className='w-5 h-5' />
                          <FaStar className='w-5 h-5' />
                          <FaStar className='w-5 h-5' />
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-600 italic'>
                      <FaQuoteRight className='left-icon mr-2 inline' />
                      <span>{testimonial.comment}</span>
                      <FaQuoteRight className='right-icon ml-2 inline transform rotate-360' />
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className='swiper-pagination mt-6'></div>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonial;
