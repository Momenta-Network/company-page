import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Cpu } from 'lucide-react';

export const DeploymentOptions = () => {
  const deploymentOptions = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Serverless",
      description: "Deploy in the cloud with zero infrastructure management"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Local Compute",
      description: "Run entirely on-device for maximum privacy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blind Compute",
      description: "Process sensitive data without exposure"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Radial Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-momenta-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-momenta-coral/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-4"
          >
            Data Privacy Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-600 text-center mb-16 text-lg"
          >
            Choose the deployment option that best fits your security requirements
          </motion.p>
          
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