import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import processSteps from "../utils/processSteps";

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  function handleToggle(index) {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center text-center md:text-left">
          <div className="flex-shrink-0 bg-[var(--primary)] text-black py-3 px-8 rounded-md">
            <h2 className="text-4xl sm:text-3xl font-medium">
              Our Working Process
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-[20px] text-[var(--secondary)]">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
        </div>

        {/* Accordion section */}
        <div>
          {processSteps.map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`border mb-4 overflow-hidden bg-white rounded-lg shadow-lg ${
                openIndex === index
                  ? "border-[var(--primary)]"
                  : "border-gray-300"
              }`}
            >
              <motion.button
                onClick={() => handleToggle(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                  openIndex === index
                    ? "bg-[var(--primary)]"
                    : "bg-var(--tertiary)"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-[var(--secondary)] font-extrabold text-lg sm:text-2xl mr-4">
                    {items.number}
                  </span>
                  <h3 className="text-base sm:text-xl font-semibold">{items.question}</h3>
                </div>

                <motion.div 
                  className="bg-white text-black border p-1 sm:p-1.5 rounded-full flex-shrink-0 ml-2"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[var(--primary)] text-[var(--secondary)]">
                      <hr className="mt-0 mb-5 border-black" />
                      <motion.p 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-gray-700 text-sm sm:text-base"
                      >
                        {items.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;