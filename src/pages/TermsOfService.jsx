import React from 'react';

const TermsOfService = () => {
  const lastUpdated = "April 15, 2026";

  return (
    <div className="bg-white min-height-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

        <div className="prose prose-blue max-w-none space-y-12">
          <section className="bg-primary-50 p-6 rounded-2xl border border-primary-100 mb-8">
            <p className="text-primary-800 font-bold">
              This service is owned and operated by Subhost Data Service, providing automated VTU services via Subhostbot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using our website and automated WhatsApp bot ("Subhostbot"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Subhostbot provides:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Automated VTU Services:</strong> Instant airtime recharge, data bundles, and utility bill payments for major Nigerian telecommunication networks via WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use our services only for lawful purposes. You are prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Engaging in any fraudulent activity or impersonation.</li>
              <li>Using our WhatsApp bot to send spam or unsolicited messages.</li>
              <li>Attempting to interfere with or disrupt our services or servers.</li>
              <li>Using our VTU services for any unauthorized or illegal transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Subhostbot shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to financial losses or data corruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Changes and Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We do not guarantee uninterrupted access to our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at subhost32@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
