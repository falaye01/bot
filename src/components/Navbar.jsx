import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-primary-600 p-1.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary-200">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight">Subhost Data Service</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-500 hover:text-primary-600 font-bold transition-colors">Home</Link>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-primary-600 font-bold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-600 font-bold transition-colors">Terms of Service</Link>
            <a 
              href="https://wa.me/2348063676047" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Contact on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-primary-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-3">
              <Link 
                to="/" 
                className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/privacy-policy" 
                className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Terms of Service
              </Link>
              <a 
                href="https://wa.me/2348063676047" 
                className="block px-4 py-4 rounded-2xl text-center text-white font-black bg-primary-600 shadow-lg shadow-primary-200"
                onClick={() => setIsOpen(false)}
              >
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
