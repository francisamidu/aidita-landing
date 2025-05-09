"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="checker-bg">
      <div className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="text-center flex flex-col items-center gap-6">
          <div className="border border-gray-800 rounded-4xl py-1 px-6 flex items-center gap-2 w-fit bg-gray-800/40 backdrop-blur-sm">
            <span className="text-indigo-500 font-bold">New!</span>
            <span>We just released the beta version of Aidita</span> 🚀
          </div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
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
            The only AI video editor you need. Powerful AI-driven video editing
            that makes creating professional content simple and intuitive.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6 ">
              Get started for free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 group hover:bg-white hover:text-black"
            >
              <PlayIcon className="mr-2 h-5 w-5 text-white group-hover:text-black" />
              Watch demo
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
