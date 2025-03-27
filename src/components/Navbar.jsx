import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  function toggleMenu() {
    setShowMenuButton(!showMenuButton);
  }

  function handleMenuClick(name) {
    setActiveItem(name);
    setShowMenuButton(false);
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
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div>
            <a href="/">
              <img src="/logo.png" alt="" className="h-8" />
            </a>
          </div>

          {/* nav items for large devices*/}
          <div className="space-x-8 hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                // Calls the function only on click by using an arrow function and passing the item name as an argument to the function handleMenuClick.
                onClick={() => handleMenuClick(item.name)}
                className={`block text-black px-2 hover:bg-[var(--primary)] rounded-sm hover:underline underline-offset-4 transition-all duration-300
                    ${activeItem === item.name ? 'bg-[var(--primary)] text-black underline underline-offset-4' : ''}
                `}
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

          {/* mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[var(--primary)] focus:outline-none"
            >
              {showMenuButton ? (
                <IoClose className="size-6" />
              ) : (
                <IoIosMenu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {showMenuButton && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 text-center space-y-3 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`block text-black px-2 hover:bg-[var(--primary)] rounded-sm hover:underline underline-offset-4 transition-all duration-300
                    ${activeItem === item.name ? 'bg-[var(--primary)]' : ''}
                `}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block border px-4 py-2 border-black hover:bg-[var(--primary)] hover:border-[var(--primary)] rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
