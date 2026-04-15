import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = "April 15, 2026";

  return (
    <div className="bg-white min-height-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

        <div className="prose prose-blue max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Subhostbot ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our VTU services and WhatsApp automation bot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information that you provide directly to us through our WhatsApp bot and website. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Phone Number:</strong> To identify your account and process WhatsApp transactions.</li>
              <li><strong>Messages:</strong> Content of messages sent to our bot to facilitate automation and service delivery.</li>
              <li><strong>Usage Data:</strong> Information about how you use our services, including transaction history and bot interactions.</li>
              <li><strong>Contact Information:</strong> Any details you provide when contacting our support team.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>To provide and maintain our VTU and WhatsApp automation services.</li>
              <li>To process transactions and send related information, including confirmations and receipts.</li>
              <li>To improve our services and develop new features based on user interaction.</li>
              <li>To communicate with you regarding updates, support, and promotional offers (with your consent).</li>
              <li>To ensure the security and integrity of our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection and Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse. Your information is stored on secure servers and we use encryption for sensitive data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>We do not sell your personal data to third parties.</strong> We may share your information only with service providers who assist us in delivering our services (e.g., VTU providers, cloud hosting), or if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-900 font-bold">Subhostbot Support</p>
              <p className="text-gray-600">Email: subhostbot@gmail.com</p>
              <p className="text-gray-600">WhatsApp: +234 706 718 2336</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
