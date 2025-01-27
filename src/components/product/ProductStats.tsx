import React from 'react';
import { motion } from 'framer-motion';

export const ProductStats = () => {
  const stats = [
    {
      value: "93.04%",
      label: "Accuracy Rate",
      description: "In voice deepfake detection"
    },
    {
      value: "$2000+",
      label: "Potential Losses Averted",
      description: "Saved per B2C user on average from AI scam calls"
    },
    {
      value: "3600 min/month",
      label: "Time Saved",
      description: "Less time spent verifying suspicious calls"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
        >
          <div className="text-4xl font-bold text-momenta-purple mb-2">
            {stat.value}
          </div>
          <div className="text-lg font-semibold mb-2">{stat.label}</div>
          <div className="text-gray-600">{stat.description}</div>
        </motion.div>
      ))}
    </div>
  );
};