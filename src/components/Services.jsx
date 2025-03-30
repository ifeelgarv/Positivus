import React from "react";
import servicesData from "../utils/servicesCardData";
import LinkIcon from "../assets/link-icon.png";

const Services = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Description */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center text-center md:text-left">
          <div className="flex-shrink-0 bg-[var(--primary)] text-black py-3 px-8 rounded-md">
            <h2 className="text-4xl sm:text-3xl font-medium">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-[20px] text-[var(--secondary)]">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map through servicesData to create cards dynamically */}
          {servicesData.map((service, index) => (
            <div key={index} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}>
              <div className="md:w-1/2 flex flex-col h-full justify-between space-y-4">
                <button
                  className={`text-base sm:text-2xl font-semibold rounded-sm w-full py-1.5 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>
                <a href="#" className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}>
                  <img src={LinkIcon} alt="" className="size-6 rounded-full" />
                  <span className="text-base sm:text-lg font-medium">Learn More</span>
                </a>
              </div>

              {/* image */}
              <div className="md:w-1/2 order-first md:order-last">
                <img src={service.image} alt="" className="w-full object-cover rounded-md mb-2 h-auto"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
