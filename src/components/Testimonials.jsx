import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adewale Kunle',
      role: 'VTU Business Owner',
      quote: 'Subhost Data Service has transformed my VTU business. The instant processing and reliable API integration are second to none in Nigeria.',
      rating: 5,
    },
    {
      name: 'Chioma Okafor',
      role: 'Customer Service Lead',
      quote: 'Our WhatsApp bot automation was set up in minutes. Now we handle customer inquiries 24/7 without lifting a finger.',
      rating: 5,
    },
    {
      name: 'Mustafa Bello',
      role: 'Individual User',
      quote: 'Buying data has never been easier. I just send a message to the bot and my phone is topped up instantly. 10/10 service!',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >Happy Customers</motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
          >Trusted by Thousands of Users</motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            See why people across Nigeria trust Subhost Data Service for their digital service needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary-100/50 hover:-translate-y-2 transition-all group"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="h-12 w-12 text-primary-100 mb-6 group-hover:text-primary-200 transition-colors transform group-hover:rotate-12" />
              <p className="text-gray-700 italic leading-relaxed mb-8 text-lg font-medium">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-xl uppercase shadow-inner">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="h-4 w-4 text-primary-600" />
                  </h4>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
