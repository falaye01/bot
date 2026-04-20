import React from 'react';
import { Mail, MessageCircle, ShieldAlert, Clock, CheckCircle } from 'lucide-react';

const DataDeletion = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-6">
            <ShieldAlert className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">User Data Deletion Request</h1>
          <p className="text-xl text-gray-600">Subhostbot & Automation</p>
        </div>

        <div className="prose prose-blue max-w-none space-y-12">
          <section className="bg-primary-50 p-6 rounded-2xl border border-primary-100 mb-8">
            <p className="text-primary-800 font-bold">
              This service is owned and operated by Subhost Data Service, providing automated VTU services via Subhost Bot.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              At <strong>Subhost Bot</strong>, we respect your privacy and give you full control over your data. 
              If you would like to request the deletion of your personal data (such as your phone number or chat interactions), 
              please follow the instructions below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
              How to Request Data Deletion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Mail className="h-8 w-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Via Email</h3>
                <p className="text-gray-600">Send an email to: <br /><span className="font-semibold text-primary-600">subhostbot@gmail.com</span></p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Via WhatsApp</h3>
                <p className="text-gray-600">Message us on WhatsApp using your registered number.</p>
              </div>
            </div>
          </section>

          <section className="bg-primary-50 p-8 rounded-3xl border border-primary-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
              What to Include in Your Request
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Your registered WhatsApp phone number.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>A clear statement requesting that your personal data be permanently deleted from our system.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
              What Happens Next
            </h2>
            <div className="flex items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Clock className="h-8 w-8 text-orange-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We will process your deletion request within <strong>24–72 hours</strong>.
                </p>
                <p className="text-gray-600 text-sm">
                  Once completed, your data (including phone numbers and transaction logs) will be permanently and securely removed from our databases.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center pt-8 border-t border-gray-100">
            <p className="text-gray-500">
              If you have any questions about this process, please feel free to contact our support team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
