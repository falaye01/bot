import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Zap, Globe } from 'lucide-react';

const stats = [
  { id: 1, label: 'Active Users', value: '50k+', icon: <Users className="h-6 w-6" /> },
  { id: 2, label: 'Successful Transactions', value: '1.2M+', icon: <CheckCircle className="h-6 w-6" /> },
  { id: 3, label: 'Average Delivery Time', value: '2s', icon: <Zap className="h-6 w-6" /> },
  { id: 4, label: 'Countries Served', value: '5+', icon: <Globe className="h-6 w-6" /> },
];

const Stats = () => {
  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20 -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6"
          >
            Powering Digital Growth Across Nigeria
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-primary-200"
          >
            Our infrastructure is built for scale, reliability, and speed. Join thousands of users who trust Subhostbot every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 p-8 rounded-[2rem] bg-primary-800/50 border border-primary-700 hover:bg-primary-800 transition-colors group cursor-default"
            >
              <div className="bg-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary-900/50">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-black mb-2 tracking-tight group-hover:text-primary-100 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-primary-300 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
