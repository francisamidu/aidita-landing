"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-manrope leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The AI video editor
          <br />
          you&apos;ll enjoy using
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto font-rubik"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Powerful AI-driven video editing that makes creating professional
          content simple and intuitive.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 font-rubik">
            Get started for free
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <img
              src="/placeholder.svg?key=id048"
              alt="Aidita video editor interface"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent -bottom-10 pointer-events-none"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
