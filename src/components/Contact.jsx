import React from 'react';
import { Mail, MessageCircle, MapPin, Smartphone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="max-w-xl">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Get in Touch</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">Need Help with Your VTU or WhatsApp Bot?</h3>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Whether you're looking for help with your airtime and data purchases, or you want to build a custom WhatsApp automation, we're here for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600 mt-1">subhost32@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <Smartphone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600 mt-1">+234 806 367 6047</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600 mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Our Location</h4>
                  <p className="text-gray-600 mt-1">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://wa.me/2348063676047" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-700 shadow-xl shadow-primary-200 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-20 lg:mt-0 relative">
             <div className="bg-primary-50 p-10 lg:p-16 rounded-[3rem] border border-primary-100 shadow-inner">
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-gray-900">Why choose us?</h4>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <div className="h-6 w-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs">1</div>
                      <span className="text-gray-700 font-medium">Instant transaction processing</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="h-6 w-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs">2</div>
                      <span className="text-gray-700 font-medium">99.9% system uptime guarantee</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="h-6 w-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs">3</div>
                      <span className="text-gray-700 font-medium">Secure and encrypted payments</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="h-6 w-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs">4</div>
                      <span className="text-gray-700 font-medium">Friendly customer support</span>
                    </li>
                  </ul>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-40 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
