import React from "react";
import caseStudies from "../utils/caseStudies";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Description */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-20 items-center text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex-shrink-0 bg-[var(--primary)] text-black py-3 px-8 rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <h2 className="text-4xl sm:text-3xl font-medium">
              Case Studies
            </h2>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <p className="text-[20px] text-[var(--secondary)]">
              Explore Real-life Examples of Our Proven Digital Marketing Success through Our Case Studies.
            </p>
          </motion.div>
        </motion.div>

        {/* Case Studies Cards */}
        <div className="bg-black text-white p-8 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="p-4 border-2 border-gray-700 rounded-md"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-[var(--primary)] flex items-center hover:underline underline-offset-4 transition-all duration-300"
                >
                  Learn More <MdOutlineArrowOutward className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
