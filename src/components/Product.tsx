import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Smartphone, MessageSquare, Target, Users, Building, Globe, Shield, Server, Cpu } from 'lucide-react';

export const Product = () => {
  const stats = [
    {
      value: "99.99%",
      label: "Accuracy Rate",
      description: "In voice deepfake detection"
    },
    {
      value: "<50ms",
      label: "Processing Time",
      description: "Real-time analysis speed"
    },
    {
      value: "256-bit",
      label: "Encryption",
      description: "End-to-end security"
    }
  ];

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
    <div className="bg-white">
      {/* Hero Section with Pattern Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/patterns/blue_pattern-3.svg')] bg-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white" />
        
        <div className="container mx-auto px-4 relative pt-20 pb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-momenta-purple to-momenta-coral">
                Secure by Design,<br />Protected by Default
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade voice protection with end-to-end encryption, real-time analysis, 
                and flexible deployment options for any security requirement.
              </p>
            </motion.div>

            {/* Stats Section */}
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
          </div>
        </div>
      </div>

      {/* Comprehensive Protection Section */}
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

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
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
            ].map((feature, index) => (
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
            <h3 className="text-3xl font-bold text-center mb-12">Data Privacy Solutions</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {deploymentOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-2xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_70px_0_rgba(0,0,0,0.15)] transition-all duration-300"
                >
                  <div className="text-momenta-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Product Roadmap</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-momenta-purple/20 via-momenta-coral/20 to-transparent" />
              
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
                    <div className="group bg-white p-6 rounded-2xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_70px_0_rgba(0,0,0,0.15)] transition-all duration-300">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        step.status === 'current' ? 'bg-momenta-purple/10' : 'bg-gray-100'
                      } ${step.status === 'current' ? 'text-momenta-purple' : 'text-gray-500'}`}>
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};