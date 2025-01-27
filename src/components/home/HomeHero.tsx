import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Lock } from 'lucide-react';
import { HeroFeatures } from './HeroFeatures';
import { Partners } from '../Partners';

export const HomeHero = () => {
  return (
    <header className="w-full min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/assets/patterns/blue_pattern-3.svg" 
          alt="" 
          className="absolute top-0 left-0 w-full opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-momenta-purple to-momenta-coral">
            Trust Beyond the Call
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay Connected, Stay Protected. Effortlessly manage calls and stay protected 
            with real-time alerts. Momenta keeps you connected and secure, every step of the way.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[url('/assets/frame.svg')] bg-cover bg-center opacity-100 rounded-full" />
              <span className="relative px-8 py-3 inline-block text-white font-medium">
                Join Beta
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-momenta-purple border-2 border-momenta-purple px-8 py-3 rounded-full font-medium"
            >
              For Investors
            </motion.button>
          </div>
          
          <HeroFeatures />
        </motion.div>
      </div>
      <Partners />
    </header>
  );
};