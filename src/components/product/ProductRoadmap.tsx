import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Building, Globe } from 'lucide-react';

export const ProductRoadmap = () => {
  const roadmapSteps = [
    {
      title: "Phase 1: MVP Launch",
      description: "Launch of core voice AI spoofing detection and real-time call analysis for B2C users",
      icon: <img src="/assets/symbol@2x.svg" alt="" className="w-6 h-6" />,
      status: "current"
    },
    {
      title: "Phase 2: Open-Source AI Model",
      description: "Release of our AI models as open-source with blockchain-based incentivization layer",
      icon: <Lock className="w-6 h-6" />,
      status: "upcoming"
    },
    {
      title: "Phase 3: B2B Integration",
      description: "Expansion to financial institutions and call centers with enhanced security features",
      icon: <Building className="w-6 h-6" />,
      status: "upcoming"
    },
    {
      title: "Phase 4: Global Expansion",
      description: "International rollout and integration with social platforms and messaging apps",
      icon: <Globe className="w-6 h-6" />,
      status: "upcoming"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Big, soft “Apple-like” orbs */}
      <div
        className="
          absolute 
          top-[-200px] 
          right-[-200px]
          w-[600px] 
          h-[600px]
          bg-gradient-to-br 
          from-purple-300 
          to-violet-400
          rounded-full 
          blur-3xl 
          opacity-70
          z-0
        "
      />
      <div
        className="
          absolute
          bottom-[-200px]
          left-[-200px]
          w-[600px] 
          h-[600px]
          bg-gradient-to-br 
          from-yellow-200 
          to-amber-300
          rounded-full 
          blur-3xl 
          opacity-70
          z-0
        "
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Product Roadmap
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-600 text-center mb-16 text-lg"
          >
            Our journey to revolutionize voice security
          </motion.p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-momenta-purple/20 via-momenta-coral/20 to-momenta-yellow/20" />

            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {step.status === 'current' && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-momenta-purple rounded-full"
                    style={{ boxShadow: '0 0 0 4px rgba(125, 111, 246, 0.2)' }}
                  />
                )}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="group relative bg-white rounded-2xl">
                    {/* Card Inner Shadow */}
                    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" />
                    
                    {/* Card Outer Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-momenta-purple/20 to-momenta-coral/20 rounded-[1rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-colors duration-300 ${
                          step.status === 'current'
                            ? 'bg-momenta-purple/10 text-momenta-purple'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-momenta-purple/5 group-hover:text-momenta-purple'
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                      {step.status === 'current' && (
                        <div className="mt-4 inline-block px-4 py-1 bg-momenta-purple/10 text-momenta-purple rounded-full text-sm font-medium">
                          In Progress
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
