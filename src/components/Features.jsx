import React from 'react';
import { Smartphone, Zap, MessageSquare, CheckCircle, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const services = [
    {
      title: 'Airtime & Data',
      description: 'Instant recharge for all major Nigerian networks including MTN, Airtel, GLO, and 9mobile at competitive rates.',
      icon: <Smartphone className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'WhatsApp Automation',
      description: 'Build professional WhatsApp bots to automate customer service, sales, and general information delivery.',
      icon: <MessageSquare className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Utilities & Bills',
      description: 'Quickly pay electricity bills and cable TV subscriptions (DStv, GOtv, Startimes) with zero hassle.',
      icon: <Zap className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Reliable Backend',
      description: 'Our system is powered by robust technology ensuring 99.9% uptime for all your automated transactions.',
      icon: <Database className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'API Access',
      description: 'Developer-friendly APIs to integrate our VTU and automation services into your own applications.',
      icon: <Globe className="h-6 w-6 text-primary-600" />,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock dedicated customer support to help resolve any issues and ensure smooth operation.',
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >Our Services</motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
          >Everything You Need for Your VTU Business</motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            From instant mobile top-ups to sophisticated WhatsApp automation, Subhost Data Service provides all the tools required to grow your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary-100/30 hover:-translate-y-2 transition-all group relative overflow-hidden"
            >
              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 transition-colors shadow-inner">
                <div className="group-hover:text-white transition-colors transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative hover element */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
