import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Choose a Service',
      description: 'Select from our range of VTU services or WhatsApp automation options.',
      icon: <Smartphone className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Provide Details',
      description: 'Send your request to our automated WhatsApp bot or use our secure portal.',
      icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Make Payment',
      description: 'Use our fast and secure payment gateways for instant transaction processing.',
      icon: <ShieldCheck className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Get Results',
      description: 'Receive your airtime, data, or bot setup instantly. Success in seconds!',
      icon: <Zap className="h-8 w-8 text-primary-600" />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >Simple Process</motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
          >How Subhostbot Works</motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Get started in minutes with our streamlined 4-step process designed for speed and reliability.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white w-24 h-24 rounded-full border-4 border-primary-50 flex items-center justify-center mb-8 shadow-xl group-hover:border-primary-600 transition-all duration-300 relative z-10"
                >
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 border-white shadow-md">
                    {index + 1}
                  </span>
                  {step.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed px-4 font-medium">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-12 -right-6 text-primary-200">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
