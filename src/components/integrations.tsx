"use client"

import { motion } from "framer-motion"
import { Github, Youtube, Figma, Slack } from "lucide-react"

const Integrations = () => {
  const integrations = [
    {
      title: "GitHub",
      description: "Version control for your video projects",
      icon: <Github className="h-8 w-8" />,
      color: "from-gray-700 to-gray-900",
    },
    {
      title: "YouTube",
      description: "Publish directly to your channel",
      icon: <Youtube className="h-8 w-8" />,
      color: "from-red-700 to-red-900",
    },
    {
      title: "Figma",
      description: "Import designs directly into your videos",
      icon: <Figma className="h-8 w-8" />,
      color: "from-purple-700 to-purple-900",
    },
    {
      title: "Slack",
      description: "Get notifications and share progress",
      icon: <Slack className="h-8 w-8" />,
      color: "from-green-700 to-green-900",
    },
  ]

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold font-manrope">Integrated with your tools</h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">Connect with the tools you already use</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {integrations.map((integration, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${integration.color} p-6 rounded-lg border border-gray-800`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-white mb-4">{integration.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white font-manrope">{integration.title}</h3>
            <p className="text-gray-300 font-rubik">{integration.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Integrations
