import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Server, Cpu, Shield } from 'lucide-react';

export const ProtectionSuite = () => {
  const features = [
    {
      icon: <img src="/assets/Avatar(Blue).svg" alt="" className="w-12 h-12" />,
      title: "Voice AI Spoofing Detection",
      description: "First-to-market solution for detecting synthetic AI-generated voices in real-time, protecting users from sophisticated scams."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Real-Time Analysis",
      description: "Unmatched real-time voice call analysis with instant alerts for potential threats and fraudulent activities."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community-Driven Security",
      description: "Open-source AI models with blockchain-based incentives for continuous improvement and transparency."
    }
  ];

  const deploymentOptions = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Serverless Deployment",
      description: "Deploy in the cloud with zero infrastructure management for maximum scalability"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Local Compute",
      description: "Run entirely on-device for maximum privacy and data protection"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Blind Compute",
      description: "Process sensitive data without exposure using advanced encryption"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Comprehensive Protection Suite</h2>
          <p className="text-xl text-gray-600">Pioneering voice spoofing detection with blockchain-powered security</p>
        </motion.div>

        {/* Core Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group relative bg-white p-8 rounded-2xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-momenta-purple/5 to-momenta-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-momenta-purple mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deployment Options */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4">Flexible Deployment Options</h3>
            <p className="text-xl text-gray-600">Choose the deployment model that best fits your security requirements</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl"
              >
                {/* Card Inner Shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" />
                
                {/* Card Outer Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-momenta-purple/20 to-momenta-coral/20 rounded-[1rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-momenta-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};