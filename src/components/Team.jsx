import React, { useState } from "react";
import teamData from "../utils/teamData";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Team = () => {
  const [showTeam, setShowTeam] = useState(6);

  function handleShowItems() {
    setShowTeam((prevItems) => prevItems + 3);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const socialButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  const hrVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "80%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
        duration: 0.7,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        delay: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Description */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-20 items-center text-center md:text-left"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Ensures it animates when scrolling back up
        >
          <motion.div
            className="flex-shrink-0 bg-[var(--primary)] text-black py-3 px-8 rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h2 className="text-4xl sm:text-3xl font-medium">Team</h2>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <p className="text-[20px] text-[var(--secondary)]">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {teamData.slice(0, showTeam).map((items, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg border shadow-lg p-6 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover="hover"
              layout
            >
              <div className="relative mb-4">
                <div className="flex flex-col sm:flex-row sm:items-end items-start justify-start">
                  <motion.img
                    src={items.image}
                    alt="team member"
                    className="rounded-full w-32 h-32 object-cover"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    whileHover="hover"
                  />
                  <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                    <h3 className="text-xl font-semibold">{items.name}</h3>
                    <p className="text-[var(--secondary)]">{items.position}</p>
                  </motion.div>
                  <motion.a
                    href="#"
                    className="absolute top-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer"
                    variants={socialButtonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    whileHover="hover"
                  >
                    <FaLinkedinIn className="size-5" />
                  </motion.a>
                </div>
              </div>

              <div className="px-2">
                <motion.hr 
                  className="my-4 border-[var(--secondary)]" 
                  variants={hrVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                />
                <motion.p 
                  className="text-black"
                  variants={descriptionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  {items.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Part */}
        {showTeam < teamData.length && (
          <div className="flex justify-end mt-8 w-full">
            <motion.button
              onClick={handleShowItems}
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-[var(--primary)] hover:text-black transition-all duration-300 cursor-pointer"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover="hover"
              whileTap="tap"
            >
              See All Teams
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
