import React from 'react';
import { Smartphone, Zap, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-white pt-24 pb-32 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary-50 to-transparent -z-10"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase"
            >
              <Zap className="h-4 w-4" />
              <span>Fast & Reliable VTU Services</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
            >
              Subhostbot <br />
              <span className="text-primary-600 text-3xl lg:text-4xl">Powered by Subhost Data Service</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            >
              Subhostbot is an automated WhatsApp service powered by Subhost Data Service, providing fast and affordable data, airtime, and VTU solutions instantly.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <a 
                href="https://wa.me/2347067182336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </a>
              
              <a 
                href="#services" 
                className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary-600 hover:text-primary-600 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <span>View Services</span>
                <ChevronRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Visual (Phone) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-20 lg:mt-0 lg:col-span-5 relative flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="h-6 w-32 bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-10"></div>
              <div className="flex-1 bg-primary-50 p-6 flex flex-col justify-center items-center text-center space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary-600 p-4 rounded-2xl shadow-xl cursor-pointer"
                >
                  <MessageSquare className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">Subhostbot</h3>
                <p className="text-sm text-gray-500">Automated VTU & Bot Assistant</p>
                <div className="w-full space-y-3">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="h-10 bg-white rounded-lg flex items-center px-4 text-xs text-gray-400 border border-gray-100"
                  >Type "menu" to start...</motion.div>
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary-600 text-white text-xs px-4 py-2 rounded-2xl rounded-tr-none shadow-md max-w-[80%]">I want to buy data!</div>
                  </motion.div>
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-gray-700 text-xs px-4 py-2 rounded-2xl rounded-tl-none shadow-md max-w-[80%] text-left">Which network? 1. MTN 2. GLO...</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            {/* Background decorative elements */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl -z-10"
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl -z-10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
