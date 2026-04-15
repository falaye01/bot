import React from 'react';
import { Smartphone, Zap, MessageSquare, CheckCircle, Database, Globe } from 'lucide-react';

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
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Our Services</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">Everything You Need for Your VTU Business</h3>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From instant mobile top-ups to sophisticated WhatsApp automation, Subhostbot provides all the tools required to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-100/50 hover:-translate-y-1 transition-all group"
            >
              <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
