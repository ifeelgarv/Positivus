import React from 'react';
import logo1 from "../assets/logos/amazon.png";
import logo2 from "../assets/logos/dribble.png";
import logo3 from "../assets/logos/hubspot.png";
import logo4 from "../assets/logos/netflix.png";
import logo5 from "../assets/logos/notion.png";
import logo6 from "../assets/logos/zoom.png";

const Marquee = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="pt-24 overflow-hidden relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
      <div className="inline-flex w-full animate-marquee space-x-12">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <img 
            key={index} 
            src={logo} 
            alt={`Logo ${index + 1}`} 
            className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;