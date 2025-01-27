import React from 'react';
import { motion } from 'framer-motion';
import { ProductStats } from './ProductStats';

export const ProductHero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/patterns/blue_pattern-1.svg')] bg-cover opacity-10" />
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

          <ProductStats />
        </div>
      </div>
    </div>
  );
};