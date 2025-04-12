import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bannerImage from "../assets/banner.png";
import Marquee from "./Marquee";

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { margin: "-50px 0px -50px 0px" });
  const isRightInView = useInView(rightRef, { margin: "-50px 0px -50px 0px" });

  return (
    <section className="bg-white pt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left side */}
          {/* Animating left content */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-[56%]"
          >
            <div>
              <h1 className="text-[5.5vw] sm:text-[28px] md:text-[3.7vw] sm:text-left text-center leading-none font-semibold text-[var(--secondary)]">
                Navigating the digital landscape for success
              </h1>

              <p className="text-[5vw] sm:text-[26px] w-[96%] mt-6 sm:mt-10 mb-5 sm:mb-7 text-gray-600 text-center sm:text-left">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>

              <button
                type="button"
                className="text-[5vw] sm:text-[25px] px-8 sm:px-10 py-5 sm:py-6 bg-black text-white font-semibold rounded-[15px] hover:bg-[var(--primary)] hover:text-black transition-all duration-300 block sm:inline-block mx-auto sm:mx-0"
              >
                Book a consultation
              </button>
            </div>
          </motion.div>

          {/* Right side */}
          {/* Animating right image */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-[56%] order-first md:order-last -mt-12 md:mt-0"
          >
            <img
              src={bannerImage}
              alt=""
              className="w-full h-auto rounded-md"
            />
          </motion.div>
        </div>

        {/* marquee effect */}
        <Marquee />
      </div>
    </section>
  );
};

export default Hero;
