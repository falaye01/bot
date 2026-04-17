import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Smartphone, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-primary-600 p-1.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary-200">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight">Subhostbot</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-500 hover:text-primary-600 font-bold transition-colors">Home</Link>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-primary-600 font-bold transition-colors">Privacy</Link>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-2 bg-primary-50 text-primary-600 px-5 py-2.5 rounded-2xl font-bold hover:bg-primary-100 transition-all border border-primary-100"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-400 hover:text-red-500 font-bold transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-500 hover:text-primary-600 font-bold transition-colors">Login</Link>
                <Link 
                  to="/signup" 
                  className="bg-primary-600 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  Get Started
                </Link>
              </>
            )}
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
              
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                {user ? (
                  <>
                    <Link 
                      to="/dashboard" 
                      className="flex items-center space-x-3 px-4 py-4 rounded-2xl bg-primary-600 text-white font-bold shadow-lg shadow-primary-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Go to Dashboard</span>
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-4 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-all"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout Account</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block px-4 py-4 rounded-2xl text-center text-primary-600 font-black bg-primary-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block px-4 py-4 rounded-2xl text-center text-white font-black bg-primary-600 shadow-lg shadow-primary-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up Free
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
