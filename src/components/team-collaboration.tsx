"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const TeamCollaboration = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold font-manrope">
          Build team workflows with
          <br />
          Cycles
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">
          Collaborate seamlessly with your team on video projects
        </p>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative">
        <div className="bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-lg p-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <img
              src="/video-editor-collaboration.png"
              alt="Aidita team collaboration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeamCollaboration;
