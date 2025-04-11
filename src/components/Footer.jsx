import React from "react";
import FooterLogo from "../assets/footer-logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-[var(--secondary)] rounded-t-2xl">
        {/* First Section of Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo */}
          <div>
            <img src={FooterLogo} alt="" className="h-8" />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">
              About us
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#use-cases" className="text-white hover:text-gray-400">
              Use Cases
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Blog
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end space-x-4">
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaFacebookF className="hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaTwitter className="text-black hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaLinkedinIn className="text-black hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Second Section of Footer */}
        <div className="flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            <button className="bg-[var(--primary)] text-black px-4 py-2 rounded-md font-medium">
              Contact us:
            </button>
            <div className="text-gray-200 space-y-2">
              <p>Email: contact@positivus.com</p>
              <p className="mt-3">Phone: 555-567-8901</p>
              <p className="mt-3">
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-[#292A32] justify-center items-center p-16 rounded-md">
            <form className="flex flex-col justify-center h-12 md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-8 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button className="bg-[var(--primary)] text-black px-6 py-2 rounded-md font-medium cursor-pointer">
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        {/* Third Section of Footer */}
        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
        <div className="flex flex-col md:flex-row md:items-center text-md sm:text-[14px] md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5">
          <p className="mb-2 md:mb-0">© 2025 Positivus. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-8">
            <p className="underline underline-offset-4 cursor-pointer">Privacy Policy</p>
            <p className="underline underline-offset-4 cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
