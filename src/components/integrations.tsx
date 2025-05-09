"use client";

import { motion } from "motion/react";
// import { Github, Youtube, Figma, Slack } from "lucide-react";

const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0112 6.8c1.02.01 2.05.14 3.01.42 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Youtube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0112 6.8c1.02.01 2.05.14 3.01.42 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Figma = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0112 6.8c1.02.01 2.05.14 3.01.42 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Slack = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0112 6.8c1.02.01 2.05.14 3.01.42 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Integrations = () => {
  const integrations = [
    {
      title: "GitHub",
      description: "Version control for your video projects",
      icon: <Github />,
      color: "from-gray-700 to-gray-900",
    },
    {
      title: "YouTube",
      description: "Publish directly to your channel",
      icon: <Youtube />,
      color: "from-red-700 to-red-900",
    },
    {
      title: "Figma",
      description: "Import designs directly into your videos",
      icon: <Figma />,
      color: "from-purple-700 to-purple-900",
    },
    {
      title: "Slack",
      description: "Get notifications and share progress",
      icon: <Slack />,
      color: "from-green-700 to-green-900",
    },
  ];

  return (
    <section
      id="integrations"
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
          Integrated with your tools
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">
          Connect with the tools you already use
        </p>
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
            <h3 className="text-xl font-bold mb-2 text-white font-manrope">
              {integration.title}
            </h3>
            <p className="text-gray-300 font-rubik">
              {integration.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
