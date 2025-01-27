import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center gap-6">
          <a
            href="mailto:contact@momenta.ai"
            className="text-gray-400 hover:text-momenta-purple transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/momenta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-momenta-purple transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/momenta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-momenta-purple transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} Momenta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};