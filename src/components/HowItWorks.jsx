import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Smartphone } from 'lucide-react';

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
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Simple Process</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">How Subhostbot Works</h3>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Get started in minutes with our streamlined 4-step process designed for speed and reliability.
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="bg-white w-20 h-20 rounded-full border-4 border-primary-50 flex items-center justify-center mb-8 shadow-xl group-hover:border-primary-600 transition-all duration-300 relative z-10">
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                    {index + 1}
                  </span>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed px-4">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-10 -right-6 text-primary-200">
                      <ArrowRight className="h-6 w-6" />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
