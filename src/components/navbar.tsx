"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bars3Icon as Menu, XMarkIcon as X } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Image from "next/image";
import aiditaLogo from "@/assets/aidita-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-900/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={aiditaLogo}
                alt="Aidita Logo"
                width={120}
                height={40}
              />
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                href="#features"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-rubik"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-rubik"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-rubik"
              >
                Testimonials
              </Link>
              <Link
                href="#integrations"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-rubik"
              >
                Integrations
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-rubik"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button variant="link" className="text-gray-300 mr-4 font-rubik">
              Log in
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 !py-1 h-8 font-rubik">
              Sign up
            </Button>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden border-b border-slate-900/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-rubik"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-rubik"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-rubik"
            >
              Testimonials
            </Link>
            <Link
              href="#integrations"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-rubik"
            >
              Integrations
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-rubik"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="flex items-center px-5">
              <Button
                variant="link"
                className="text-gray-300 w-full text-left font-rubik"
              >
                Log in
              </Button>
            </div>
            <div className="mt-3 px-5 pb-3">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 font-rubik">
                Sign up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
