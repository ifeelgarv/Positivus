import React from 'react';
import { motion } from 'framer-motion';
import ctaImage from "../assets/cta-image.png";

const CTA = () => {
  return (
    <section className='relative px-6 py-12'>
      <div className='max-w-7xl mx-auto bg-[#F3F3F3] rounded-3xl sm:pt-24 sm:pb-18 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-8'>

        {/* Left Section with scroll animation */}
        <motion.div
          className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className='text-3xl font-bold text-[var(--secondary)] mb-4'>
            Let's make things happen
          </h1>
          <p className='text-gray-600 mb-6 md:w-[78%]'>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className='inline-block text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-5 bg-black text-white font-semibold rounded-[15px] hover:bg-[var(--primary)] hover:text-black transition-all duration-300'>
            Get your free proposal
          </button>
        </motion.div>

        {/* Right Section with Image */}
        <motion.div
          className='hidden md:flex md:w-1/2 justify-center items-center relative'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={ctaImage}
            alt='cta-image'
            className='md:absolute md:-top-52 md:bottom-0'
            style={{ transform: 'scale(1.1)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
