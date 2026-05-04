import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Smartphone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Subhost Data Service</h3>
            <p className="text-gray-600 max-w-sm text-sm">
              Subhost Data Service is a registered digital communications company in Nigeria, specializing in automated VTU services and professional WhatsApp business automation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="mailto:subhost32@gmail.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/2348063676047" className="text-gray-400 hover:text-primary-600 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/data-deletion" className="text-gray-600 hover:text-primary-600 transition-colors">Data Deletion</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                <span className="text-gray-600">subhost32@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Smartphone className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                <span className="text-gray-600">+234 806 367 6047</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Subhost Data Service. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
