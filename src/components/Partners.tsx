import React from 'react';
import { motion } from 'framer-motion';

export const Partners = () => {
  const partners = [
    {
      name: "Nillion",
      logo: "/assets/partners/nillion.svg",
      url: "https://nillion.com/"
    },
    {
      name: "SEI Foundation",
      logo: "/assets/partners/sei.svg",
      url: "https://www.sei.io/"
    },
    {
      name: "Chain Hub Foundation",
      logo: "/assets/partners/chainhub.svg",
      url: "https://www.csl.so/"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-medium tracking-wide text-gray-600 uppercase">
            Supported by Industry Leaders
          </h2>
        </motion.div>

        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-momenta-purple/5 via-momenta-coral/5 to-momenta-yellow/5 blur-3xl" />
          
          {/* Glass card container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white/20 p-12"
          >
            <div className="flex flex-wrap justify-center items-center gap-20">
              {partners.map((partner, index) => (
                <motion.a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group w-48"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-momenta-purple/10 via-momenta-coral/10 to-momenta-yellow/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="relative w-full h-20 object-contain mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <p className="text-gray-500 font-medium text-sm tracking-wide uppercase relative">
                    {partner.name}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-momenta-purple/10 to-momenta-coral/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                      aria-hidden="true"
                    />
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};