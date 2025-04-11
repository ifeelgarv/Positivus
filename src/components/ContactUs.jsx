import React from "react";
import { motion } from "framer-motion";
import ContactImage from "../assets/contact.png";

const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Description */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-20 items-center text-center md:text-left"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="flex-shrink-0 bg-[var(--primary)] text-black py-3 px-8 rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h2 className="text-4xl sm:text-3xl font-medium">Contact Us</h2>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <p className="text-[20px] text-[var(--secondary)]">
              Connect with Us:
              <br />
              Let's Discuss Your Digital Marketing Needs
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <div className="flex flex-col md:flex-row justify-between bg-[var(--tertiary)] rounded-lg shadow-lg md:p-8 p-4">
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-4">
              {/* Radio Input */}
              <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="hi"
                    defaultChecked
                  />
                  Say Hi
                </label>
                <label className="flex items-center mt-2 md:mt-0">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="quote"
                  />
                  Get a Quote
                </label>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border border-gray-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border border-gray-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border border-gray-300"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mx-auto block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-[var(--primary)] hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Adding Image */}
          <div className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden">
            <img src={ContactImage} alt="" className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
