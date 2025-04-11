import React from "react";
import { motion } from "framer-motion";
import testimonialsData from "../utils/testimonialsData";

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="pt-24 pb-8 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Headline & Description */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-20 items-center text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex-shrink-0 bg-[var(--primary)] text-black py-3 px-8 rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <h2 className="text-4xl sm:text-3xl font-medium">Testimonials</h2>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <p className="text-[20px] text-[var(--secondary)]">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative mb-12 overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((items, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[380px] max-w-md px-2"
              >
                <motion.div
                  whileHover={{
                    backgroundColor: "var(--primary)",
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                  className="h-48 bg-white rounded-lg border shadow-lg p-6 transition-all duration-300 cursor-pointer"
                >
                  <p className="text-base font-medium mb-4">{items.text}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {items.author}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
