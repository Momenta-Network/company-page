import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const ProductCTA = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/?scrollTo=contact');
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-16 text-center"
          >
            {/* Light circuit background pattern */}
            <div className="absolute inset-0 bg-[url('/assets/patterns/circuit.svg')] bg-cover opacity-10" />

            <div className="relative max-w-3xl mx-auto">
              {/* Headline */}
              <h2 className="text-5xl font-bold mb-8 text-white">
                Join Us in Redefining Voice Security
              </h2>

              {/* Subtext */}
              <p className="text-xl text-gray-300 mb-10">
                We’re an early-stage startup on a mission to protect everyone from voice AI spoofing. 
                Momenta is built for consumers first, but we’re already paving the way for powerful B2B integrations. 
                If you’re an investor, partner, or early adopter, we’d love to show you what Momenta can do.
              </p>

              {/* Call to Action Button */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-momenta-coral via-momenta-yellow to-momenta-purple rounded-full" />
                <div className="absolute inset-[2px] bg-gray-900 rounded-full transition-all duration-200 group-hover:inset-[1px]" />
                <span className="relative px-10 py-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-momenta-coral via-momenta-yellow to-momenta-purple font-medium text-lg">
                  Book a Demo
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
