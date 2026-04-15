import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a 
        href="https://wa.me/2347067182336" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity absolute right-16 pr-2 whitespace-nowrap bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-md">
           Need help? Chat with us!
        </div>
        <MessageCircle className="h-7 w-7 fill-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
