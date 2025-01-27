import React from 'react';
import { motion } from 'framer-motion';

export const EarlyAccess = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-momenta-purple to-momenta-coral p-1"
          >
            <div className="relative bg-white rounded-[1.4rem] p-8 md:p-12">
              <div className="absolute inset-0 bg-[url('/assets/patterns/blue_pattern-2.svg')] bg-cover bg-center opacity-5" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-momenta-purple to-momenta-coral">
                    Get Early Access
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Join our waitlist to be among the first to experience Momenta's revolutionary voice protection technology.
                  </p>
                  <p className="text-momenta-purple font-medium mb-4">Coming soon to:</p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="h-12"
                    >
                      <img src="/assets/appstore.svg" alt="Download on the App Store" className="h-full" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="h-12"
                    >
                      <img src="/assets/playstore.svg" alt="Get it on Google Play" className="h-full" />
                    </motion.a>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[url('/assets/frame.svg')] bg-cover bg-center opacity-100 rounded-full" />
                  <span className="relative px-8 py-4 inline-block text-white font-medium text-lg">
                    Join Waitlist
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Investor Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-[url('/assets/patterns/circuit.svg')] bg-cover opacity-10" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Ready to Shape the Future of Voice Security?
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Join our investor list to receive updates about our progress and upcoming investment opportunities.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-momenta-coral via-momenta-yellow to-momenta-purple rounded-full" />
                <div className="absolute inset-[2px] bg-gray-900 rounded-full transition-all duration-200 group-hover:inset-[1px]" />
                <span className="relative px-8 py-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-momenta-coral via-momenta-yellow to-momenta-purple font-medium text-lg">
                  Join Investor List
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};