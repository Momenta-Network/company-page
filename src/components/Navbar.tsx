import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/?scrollTo=contact');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    // Check for scrollTo parameter in URL
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo === 'contact') {
      // Remove the query parameter
      window.history.replaceState({}, '', '/');
      // Scroll to contact section
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/symbol@2x.svg" alt="Momenta Symbol" className="w-8 h-8" />
            <img src="/assets/Wordmark (Black)@2x.svg" alt="Momenta" className="h-5" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/product" className="text-gray-600 hover:text-momenta-purple transition-colors">
              Product
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-momenta-purple transition-colors">
              About
            </Link>
            <button 
              onClick={scrollToContact}
              className="text-gray-600 hover:text-momenta-purple transition-colors"
            >
              Contact
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              onClick={() => navigate('/')}
            >
              <div className="absolute inset-0 bg-[url('/assets/frame.svg')] bg-cover bg-center opacity-100 rounded-full" />
              <span className="relative px-6 py-2 inline-block text-white font-medium">
                Join Beta
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};