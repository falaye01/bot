import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adewale Kunle',
      role: 'VTU Business Owner',
      quote: 'Subhostbot has transformed my VTU business. The instant processing and reliable API integration are second to none in Nigeria.',
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
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Happy Customers</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">Trusted by Thousands of Users</h3>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            See why people across Nigeria trust Subhostbot for their digital service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-100/50 hover:-translate-y-1 transition-all group">
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="h-10 w-10 text-primary-100 mb-6 group-hover:text-primary-200 transition-colors" />
              <p className="text-gray-700 italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-lg uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="h-4 w-4 text-primary-600" />
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
