import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Database, Zap, ChevronRight, Check } from 'lucide-react';
import { cn } from '../utils';

const networks = [
  { id: 'mtn', name: 'MTN', color: 'bg-yellow-400', textColor: 'text-black' },
  { id: 'glo', name: 'GLO', color: 'bg-green-600', textColor: 'text-white' },
  { id: 'airtel', name: 'Airtel', color: 'bg-red-600', textColor: 'text-white' },
  { id: '9mobile', name: '9mobile', color: 'bg-green-900', textColor: 'text-white' },
];

const services = [
  { id: 'data', name: 'Data Bundle', icon: <Database className="h-5 w-5" /> },
  { id: 'airtime', name: 'Airtime', icon: <Smartphone className="h-5 w-5" /> },
  { id: 'utility', name: 'Utility Bills', icon: <Zap className="h-5 w-5" /> },
];

const QuickPurchase = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0].id);
  const [selectedService, setSelectedService] = useState(services[0].id);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Ready to Recharge? <br />
              <span className="text-primary-600">Experience the Speed.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Select your provider and service type to see how easy it is to manage your digital life with Subhostbot. Our system handles millions of transactions with 99.9% success rate.
            </p>
            
            <div className="space-y-4">
              {['Instant Delivery', 'Secure Payments', '24/7 Automation'].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-700 font-medium"
                >
                  <div className="bg-primary-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0 bg-white rounded-[2.5rem] shadow-2xl shadow-primary-100/50 border border-primary-50 p-8 lg:p-12 relative"
          >
            <div className="space-y-8">
              {/* Network Selection */}
              <div>
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Select Network</label>
                <div className="grid grid-cols-4 gap-4">
                  {networks.map((network) => (
                    <motion.button
                      key={network.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedNetwork(network.id)}
                      className={cn(
                        "h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all",
                        selectedNetwork === network.id 
                          ? `${network.color} ${network.textColor} shadow-lg ring-2 ring-offset-2 ring-primary-200` 
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                      )}
                    >
                      {network.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Select Service</label>
                <div className="space-y-3">
                  {services.map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedService(service.id)}
                      className={cn(
                        "w-full p-4 rounded-2xl flex items-center justify-between border-2 transition-all",
                        selectedService === service.id 
                          ? "border-primary-600 bg-primary-50/50 text-primary-900" 
                          : "border-gray-50 bg-gray-50/30 text-gray-500 hover:border-gray-200"
                      )}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={cn(
                          "p-2 rounded-xl",
                          selectedService === service.id ? "bg-primary-600 text-white" : "bg-white text-gray-400"
                        )}>
                          {service.icon}
                        </div>
                        <span className="font-bold">{service.name}</span>
                      </div>
                      {selectedService === service.id && (
                        <motion.div layoutId="activeService">
                          <Check className="h-5 w-5 text-primary-600" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center space-x-2"
              >
                <span>Proceed to Purchase</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              
              <p className="text-center text-xs text-gray-400 font-medium">
                No account needed. Fast and secure transactions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickPurchase;
