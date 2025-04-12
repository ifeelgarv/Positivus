import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  function handleMenuClick(name) {
    setActiveItem(name);
    setIsOpen(false);
  }

  // Array of Objects for Navbar Menu Items
  const menuItems = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur border border-white/15 rounded-[27px] md:rounded-full">
            <div className="flex justify-between h-16 items-center p-2 px-4">
              <div>
                <a href="/">
                  <img src="/logo.png" alt="" className="h-8" />
                </a>
              </div>

              {/* For Larger Devices */}
              <div className="space-x-8 hidden md:flex items-center">
                {menuItems.map((item, index) => (
                  <a
                    onClick={() => handleMenuClick(item.name)}
                    className={`group relative px-2 py-1 transition-all duration-300
        ${
          activeItem === item.name
            ? "text-black after:bg-[var(--primary)] after:w-full"
            : "text-black after:bg-black after:w-0 group-hover:after:w-full"
        }
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300`}
                    key={index}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="border px-4 py-2 border-black hover:bg-[var(--primary)] hover:border-[var(--primary)] rounded-md transition-all duration-300"
                >
                  Request a quote
                </a>
              </div>

              {/* Mobile Menu Button having Animated Hamburger */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-[var(--primary)] focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                    aria-hidden="true"
                  >
                    <line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                      className={`origin-left transition-all duration-300 ${
                        isOpen ? "rotate-45 -translate-y-1" : ""
                      }`}
                    />
                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      className={`transition-all duration-300 ${
                        isOpen ? "opacity-0" : ""
                      }`}
                    />
                    <line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      className={`origin-left transition-all duration-300 ${
                        isOpen ? "-rotate-45 translate-y-1" : ""
                      }`}
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="px-4 pt-2 pb-3 text-center space-y-3 sm:px-3">
                    {menuItems.map((item, index) => (
                      <a
                        onClick={() => handleMenuClick(item.name)}
                        className={`block text-black px-2 py-2 hover:bg-[var(--primary)] rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${
                          activeItem === item.name ? "bg-[var(--primary)]" : ""
                        }`}
                        key={index}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="#contact"
                      className="block border px-4 py-2 border-black hover:bg-[var(--primary)] hover:border-[var(--primary)] rounded-md transition-all duration-300 mt-2"
                    >
                      Request a quote
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="pb-20"></div>
    </>
  );
};

export default Navbar;
