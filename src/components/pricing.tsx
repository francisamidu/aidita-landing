"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      period: "per month",
      description:
        "Perfect for individuals and small projects. Free for 1 month",
      features: [
        "AI-powered editing suggestions",
        "720p video export",
        "5GB cloud storage",
        "Basic effects library",
        "Email support",
      ],
      cta: "Get started",
      popular: false,
      color: "border-gray-800 hover:border-gray-700",
    },
    {
      name: "Premium",
      price: "$49",
      period: "per month",
      description: "Ideal for professionals and content creators",
      features: [
        "Everything in Basic",
        "4K video export",
        "50GB cloud storage",
        "Advanced effects library",
        "Priority support",
        "Team collaboration (up to 3 users)",
      ],
      cta: "Get started",
      popular: true,
      color: "border-indigo-600 hover:border-indigo-500",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For teams and businesses with advanced needs",
      features: [
        "Everything in Premium",
        "8K video export",
        "Unlimited cloud storage",
        "Custom effects creation",
        "Dedicated support",
        "Unlimited team collaboration",
        "White-label exports",
      ],
      cta: "Contact sales",
      popular: false,
      color: "border-gray-800 hover:border-gray-700",
    },
  ];

  return (
    <section
      id="pricing"
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
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-rubik">
          Choose the plan that works for you
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`bg-gray-900 rounded-lg border-2 ${
              plan.color
            } p-8 relative ${plan.popular ? "ring-2 ring-indigo-600 " : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            {plan.popular && (
              <div className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-manrope font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 font-manrope">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold font-manrope">
                {plan.price}
              </span>
              <span className="text-gray-400 ml-2 font-rubik">
                {plan.period}
              </span>
            </div>
            <p className="text-gray-400 mb-6 font-rubik">{plan.description}</p>
            <Button
              className={`w-full mb-8 ${
                plan.popular
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-800 hover:bg-gray-700"
              } font-rubik`}
            >
              {plan.popular
                ? "Get started"
                : index === 0
                ? "Try for free"
                : "Contact sales"}
            </Button>
            <ul className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-rubik">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
