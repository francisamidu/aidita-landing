"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Interface = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold font-manrope">
          Interface,
          <br />
          streamlined.
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">
          Designed for efficiency and creativity, not complexity
        </p>
      </motion.div>

      <motion.div style={{ opacity, scale }} className="relative">
        <div className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 rounded-lg p-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <img src="/dark-video-editor.png" alt="Aidita interface" className="w-full h-auto" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Interface
