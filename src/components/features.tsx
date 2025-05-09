"use client";

import { motion } from "motion/react";
import {
  SparklesIcon as Sparkles,
  ClockIcon as Clock,
  Square3Stack3DIcon as Layers,
  BoltIcon as Zap,
  ArrowUpTrayIcon as Share,
  ShieldCheckIcon as Shield,
} from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      title: "AI-powered editing",
      description: "Intelligent editing suggestions that learn from your style",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Time-saving tools",
      description: "Automate repetitive tasks and focus on creativity",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Advanced compositing",
      description: "Layer effects and transitions with precision",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Lightning fast rendering",
      description: "Export videos in record time with optimized processing",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Seamless sharing",
      description: "Publish directly to all major platforms in one click",
      icon: <Share className="h-6 w-6" />,
    },
    {
      title: "Secure cloud storage",
      description: "Your projects are always safe and accessible",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
    >
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <span className="text-indigo-500 px-4 py-1 rounded-2xl border border-indigo-900/20 bg-indigo-900/10 mb-4">
          Features
        </span>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">
            An experience you&apos;d expect from a<br />
            professional tool
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">
            Designed for professionals, accessible to everyone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/10 p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-indigo-500  flex items-center gap-2 mb-4">
                {feature.icon}
                <h3 className="text-base font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-400 font-rubik">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
