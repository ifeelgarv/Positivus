import React from "react"; 
import servicesData from "../utils/servicesCardData";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            <h2 className="text-4xl sm:text-3xl font-medium">Services</h2>
          </motion.div>

          <motion.div
            className="md:w-2/3"
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
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </motion.div>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Text Wala Part */}
              <div className="md:w-1/2 flex flex-col h-full justify-between space-y-4">
                <button
                  className={`text-base sm:text-2xl font-semibold rounded-sm w-full py-1.5 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>

                <a
                  href="#"
                  className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80 group`}
                >
                  <MdOutlineArrowOutward className="size-6 rounded-full transition-rotate duration-300 group-hover:rotate-45" />
                  <span className="text-base sm:text-lg font-medium">
                    Learn More
                  </span>
                </a>
              </div>

              {/* Image Wala Part */}
              <div className="md:w-1/2 order-first md:order-last">
                <img
                  src={service.image}
                  alt=""
                  className="w-full object-cover rounded-md mb-2 h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
