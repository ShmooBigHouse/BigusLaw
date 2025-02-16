import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const MisdemeanorsPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Misdemeanor Defense</h1>
          <a
            href="mailto:elbiguspa@gmail.com"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <Mail className="mr-2" />
            Schedule a Consultation
          </a>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          {/* Introduction Section */}
          <div className="mb-8">
            <div className="bg-white shadow-sm p-8 border-b border-gray-600">
              <p className="text-gray-800 text-lg leading-relaxed">
                Understanding the potential consequences of a misdemeanor charge in Kansas or Missouri is essential. Below is an overview of the classifications, possible penalties, and recommended actions if you're facing such charges.
              </p>
            </div>
          </div>

          {/* State Classifications Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Misdemeanor Classifications and Penalties</h2>
                <p className="text-gray-800">
                  Kansas categorizes misdemeanors into three classes, each with specific maximum penalties:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class A Misdemeanor:</span> Up to 1 year in county jail and a fine up to $2,500.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class B Misdemeanor:</span> Up to 6 months in county jail and a fine up to $1,000.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class C Misdemeanor:</span> Up to 1 month in county jail and a fine up to $500.
                  </li>
                </ul>
                <p className="text-gray-800">
                  Unclassified misdemeanors carry penalties as specified by the statute defining the offense or default to a Class C misdemeanor if unspecified.
                </p>
              </div>

              {/* Missouri Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Misdemeanor Classifications and Penalties</h2>
                <p className="text-gray-800">
                  Missouri divides misdemeanors into four classes, with associated penalties as follows:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class A Misdemeanor:</span> Up to 1 year in jail and a fine up to $2,000.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class B Misdemeanor:</span> Up to 6 months in jail and a fine up to $1,000.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class C Misdemeanor:</span> Up to 15 days in jail and a fine up to $750.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class D Misdemeanor:</span> No jail time; fine up to $500.
                  </li>
                </ul>
                <p className="text-gray-800">
                  Unclassified misdemeanors have penalties specified in the statute defining the offense.
                </p>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Charged with a Misdemeanor</h2>
            <p className="text-gray-800 mb-6">
              If you're facing a misdemeanor charge in Kansas or Missouri, it's crucial to:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consult an Experienced Criminal Defense Attorney</h3>
                  <p className="text-gray-700">Legal representation is vital to navigate the complexities of the criminal justice system and to protect your rights.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Avoid Discussing Your Case</h3>
                  <p className="text-gray-700">Refrain from speaking about your case with anyone other than your attorney to prevent unintentional self-incrimination.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document All Relevant Information</h3>
                  <p className="text-gray-700">Keep detailed records of events, communications, and any other pertinent information related to your case.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MisdemeanorsPage;