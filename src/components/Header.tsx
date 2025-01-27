import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Lock } from 'lucide-react';
import { Partners } from './Partners';

export const Header = () => {
  return (
    <header className="w-full min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
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
          
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <Bell className="w-12 h-12 text-momenta-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
              <p className="text-gray-600">Identify and block potential scam calls before they reach you</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <Shield className="w-12 h-12 text-momenta-coral mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Detection</h3>
              <p className="text-gray-600">Stay ahead of scammers with intelligent call analysis</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <Lock className="w-12 h-12 text-momenta-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Protection</h3>
              <p className="text-gray-600">Contribute to worldwide mobile security</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Partners />
    </header>
  );
};