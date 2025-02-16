import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="prose max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-white p-8 border-b border-gray-400">
            <p className="text-gray-800 text-lg leading-relaxed">
              At Bigus Law, we respect your privacy and are committed to protecting any personal information you provide. 
              This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          {/* Information Collection Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-800 mb-4">We may collect personal information when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fill out forms on our website</li>
              <li>Contact us via phone, email, or online chat</li>
            </ul>
            <p className="text-gray-800">
              This information may include your name, contact details, and any details you voluntarily provide related 
              to your legal inquiry.
            </p>
          </div>

          {/* Information Usage Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-800 mb-4">Your information is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Respond to your inquiries and provide legal services</li>
              <li>Improve our website and client experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="text-gray-800">
              We do <span className="font-bold">not</span> sell, rent, or share your personal information with third parties 
              except as required by law or with your explicit consent.
            </p>
          </div>

          {/* Confidentiality Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality & Attorney-Client Privilege</h2>
            <p className="text-gray-800">
              Any information shared with us through this website or via consultation is kept 
              <span className="font-bold"> strictly confidential</span>. However, contacting us does 
              <span className="font-bold"> not</span> establish an attorney-client relationship unless agreed upon in writing.
            </p>
          </div>

          {/* Cookies Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies & Tracking</h2>
            <p className="text-gray-800">
              Our website may use cookies or tracking technologies to enhance user experience. 
              You may adjust your browser settings to disable cookies if you prefer.
            </p>
          </div>

          {/* Third-Party Links Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-800">
              Our website may contain links to third-party sites. We are not responsible for their privacy 
              practices or content.
            </p>
          </div>

          {/* Updates Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-800">
              We may update this Privacy Policy periodically. Please check back for any changes.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-8">
            <p className="text-gray-800">
              For any questions regarding this Privacy Policy, please contact us at{' '}
              <a 
                href="mailto:elbiguspa@gmail.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                elbiguspa@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;