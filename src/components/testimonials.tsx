"use client";

import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Aidita has completely transformed our video production workflow. The AI features save us hours on every project.",
      author: "Sarah Johnson",
      role: "Video Producer, CreativeStudio",
    },
    {
      quote:
        "As a YouTuber, I need to produce content quickly. Aidita helps me edit videos in half the time with better results.",
      author: "Mark Chen",
      role: "Content Creator",
    },
    {
      quote:
        "The team collaboration features are game-changing. Our remote team can now work together seamlessly.",
      author: "Jessica Williams",
      role: "Production Manager, MediaCorp",
    },
    {
      quote:
        "I've tried many video editors, but Aidita's AI suggestions are truly next level. It's like having an assistant editor.",
      author: "David Rodriguez",
      role: "Filmmaker",
    },
    {
      quote:
        "The learning curve was minimal, but the power is incredible. Perfect balance of simplicity and professional features.",
      author: "Emma Thompson",
      role: "Marketing Director, TechGrowth",
    },
    {
      quote:
        "Our agency has cut editing time by 40% since switching to Aidita. The ROI has been incredible.",
      author: "Michael Lee",
      role: "Agency Owner, VisualPeak",
    },
  ];
  const getAuthorImage = (author: string) => {
    switch (author) {
      case "Sarah Johnson":
        return "https://randomuser.me/api/portraits/women/32.jpg";
      case "Mark Chen":
        return "https://randomuser.me/api/portraits/men/20.jpg";
      case "Jessica Williams":
        return "https://randomuser.me/api/portraits/women/35.jpg";
      case "David Rodriguez":
        return "https://randomuser.me/api/portraits/men/36.jpg";
      case "Emma Thompson":
        return "https://randomuser.me/api/portraits/women/36.jpg";
      case "Michael Lee":
        return "https://randomuser.me/api/portraits/men/31.jpg";
      default:
        return "https://randomuser.me/api/portraits/men/33.jpg";
    }
  };

  return (
    <section
      id="testimonials"
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
          Loved by product people
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">
          See what our users have to say about Aidita
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-900  rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-300 italic mb-4 font-rubik p-6 bg-slate-900/10">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4 border-t py-3 px-4 border-gray-800 bg-slate-900/50">
              <img
                src={getAuthorImage(testimonial.author)}
                alt={testimonial.author}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-bold font-manrope">{testimonial.author}</p>
                <p className="text-gray-400 text-sm font-rubik">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
