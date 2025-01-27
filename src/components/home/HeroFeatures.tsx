import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Lock } from 'lucide-react';

export const HeroFeatures = () => {
  const features = [
    {
      icon: <Bell className="w-12 h-12 text-momenta-purple mx-auto mb-4" />,
      title: "Real-time Alerts",
      description: "Identify and block potential scam calls before they reach you"
    },
    {
      icon: <Shield className="w-12 h-12 text-momenta-coral mx-auto mb-4" />,
      title: "Smart Detection",
      description: "Stay ahead of scammers with intelligent call analysis"
    },
    {
      icon: <Lock className="w-12 h-12 text-momenta-yellow mx-auto mb-4" />,
      title: "Global Protection",
      description: "Contribute to worldwide mobile security"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-20">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
        >
          {feature.icon}
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};