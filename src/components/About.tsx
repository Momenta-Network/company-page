import React from 'react';
import { motion } from 'framer-motion';
import { Team } from './Team';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Momenta, we're committed to creating a safer digital world by protecting individuals 
            and businesses from voice-based fraud and scams. Through innovative AI technology and 
            community collaboration, we're building a future where communication is secure and trustworthy.
          </p>
        </motion.div>
        
        <Team />
      </div>
    </section>
  );
};