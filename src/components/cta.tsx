"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="bg-gray-900 rounded-lg border border-gray-800 p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 w-16 h-16 bg-purple-600 backdrop-blur-3xl shadow-lg shadow-purple-900/20 rounded-full flex items-center justify-center"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>
        <h2 className="text-3xl font-bold mb-4 font-manrope">
          Get started with Aidita today
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-rubik">
          Join thousands of creators who are already using Aidita to transform
          their video editing workflow. You dont want to miss out on this.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 font-rubik">
            Get started for free
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cta;
