import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, MessageSquare } from 'lucide-react';

export const HomeFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Voice Deepfake Detection",
      description: "Advanced AI models to detect synthetic voices in real-time"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Transparent and secure model maintenance through blockchain technology"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Protection",
      description: "Seamless integration with your phone's calling system"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Future Expansion",
      description: "Upcoming protection for text messages and social media platforms"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Comprehensive Protection</h2>
          <p className="text-xl text-gray-600">Securing your digital identity across multiple channels</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-momenta-purple mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};