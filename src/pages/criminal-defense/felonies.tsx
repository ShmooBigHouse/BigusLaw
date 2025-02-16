import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const FeloniesPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Felony Defense</h1>
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
                Understanding the potential consequences of a felony charge in Kansas or Missouri is crucial. 
                Below is an overview of the classifications, possible penalties, and recommended actions if you're 
                facing such charges. Remember, each case is unique, and legal outcomes can vary based on specific 
                circumstances. Promptly seeking professional legal advice is the best course of action to ensure your 
                rights are upheld.
              </p>
            </div>
          </div>

          {/* State Classifications Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Felony Classifications and Penalties</h2>
                <p className="text-gray-800">
                  Kansas categorizes felonies by severity levels, ranging from 1 (most severe) to 10 (least severe). The penalties are influenced by the crime's severity and the individual's criminal history. Here's a general outline:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Severity Level 1 Felony:</span> Presumptive prison sentence; length varies based on specific circumstances.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Severity Level 5 Felony:</span> Presumptive prison sentence; length varies.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Severity Level 10 Felony:</span> Presumptive probation; prison sentence possible depending on history.
                  </li>
                </ul>
                <p className="text-gray-800">
                  Fines for felonies in Kansas can reach up to $500,000, depending on the offense.
                </p>
              </div>

              {/* Missouri Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Felony Classifications and Penalties</h2>
                <p className="text-gray-800">
                  Missouri classifies felonies from Class A to Class E, with Class A being the most serious. The associated penalties are:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class A Felony:</span> 10 to 30 years, or life imprisonment.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class B Felony:</span> 5 to 15 years in prison.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class C Felony:</span> 3 to 10 years in prison; fines up to $10,000 or double the financial gain from the offense.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class D Felony:</span> Up to 7 years in prison; fines up to $10,000.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Class E Felony:</span> Up to 4 years in prison; fines up to $10,000.
                  </li>
                </ul>
                <p className="text-gray-800">
                  For Class D and E felonies, courts may opt for county jail sentences up to one year or impose fines instead of prison time.
                </p>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Charged with a Felony</h2>
            <p className="text-gray-800 mb-6">
              If you're facing a felony charge in Kansas or Missouri, it's essential to:
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

export default FeloniesPage;