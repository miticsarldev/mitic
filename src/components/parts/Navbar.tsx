"use client";

import navLinks from "@/utils/navLinks";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <header className="h-20 w-full flex items-center">
        <div className="container mx-auto flex justify-between max-w-full h-full items-center px-5 relative">
          <Link
            href="/"
            className="flex items-center pointer-events-auto relative h-full"
          >
            <Image
              width={0}
              height={0}
              src="/logo/logo_mitic_light.png"
              alt="Logo"
              className="w-auto h-10"
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex lg:space-x-6 xl:space-x-10 items-center h-full">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group h-full flex items-center z-10"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={link.href}
                  className={`text-mitic-3 before:content-[''] text-[.9375em] uppercase font-bold cursor-pointer transition-all duration-300 h-full flex items-center before:absolute before:bottom-0 before:left-1/2 before:w-0 before:hover:w-[40px] before:-translate-x-1/2 before:h-2 before:bg-mitic-3 before:transition-all before:duration-300 ${
                    hoveredItem === link.name ? "before:w-[40px]" : ""
                  }`}
                >
                  {link.name}
                </a>
                {link.hasdropdown && hoveredItem === link.name && (
                  <ul className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 rounded-md transition-all duration-300 z-10 before:absolute before:content-[''] before:bottom-[100%] before:left-0 before:right-0 before:hover:w-full before:h-[20px] text-left before:transition-all before:duration-300">
                    {link.subLinks?.map((dropdown) => (
                      <li
                        key={dropdown.name}
                        className="text-mitic-3 hover:text-gray-900 flex items-center justify-start"
                      >
                        <a
                          className="p-2 whitespace-nowrap hover:bg-mitic-1/10 w-full rounded-md"
                          href={dropdown.href}
                        >
                          {dropdown.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <div>
            <button
              className="p-1 border-2 border-yellow-400 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image
                width={0}
                height={0}
                src="/images/menu-button.png"
                alt="Logo"
                className="w-auto h-5"
                unoptimized
              />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed inset-0 bg-mitic-3 z-50 p-6"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 bg-mitic-6 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <motion.nav
              className="flex flex-col space-y-4 mt-8 text-blue-400"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1, // Delay between each link appearing
                  },
                },
              }}
            >
              {[
                "L'AGENCE",
                "COMMUNICATION",
                "WEBMARKETING",
                "WEB",
                "RÉALISATIONS",
                "CONTACT",
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={
                    link === "CONTACT"
                      ? "bg-blue-100 text-blue-800 px-4 py-2 rounded-md inline-block"
                      : "text-gray-600 hover:text-gray-900"
                  }
                  initial={{ opacity: 0, x: -20 }} // Slide from left with opacity 0
                  animate={{ opacity: 1, x: 0 }} // Slide to its position with opacity 1
                  exit={{ opacity: 0, x: -20 }} // Slide out when menu closes
                  transition={{ duration: 0.5, type: "tween" }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.nav>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-sm text-blue-400">
              <button>mentions légales</button>
              <button>politique de confidentialité</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
