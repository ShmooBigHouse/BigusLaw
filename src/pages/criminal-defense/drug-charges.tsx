import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DrugChargesPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Drug Charges Defense</h1>
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
                Facing drug charges in Kansas or Missouri carries significant legal consequences. Below is an overview of the laws, penalties, and recommended actions if you're confronting such charges in these states.
              </p>
            </div>
          </div>

          {/* State Laws and Penalties Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Drug Laws and Penalties</h2>
                <p className="text-gray-800">
                  In Kansas, drug offenses are categorized based on the type and quantity of the controlled substance involved.
                </p>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Possession of Controlled Substances</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Marijuana</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><span className="font-semibold">First Offense:</span> Class B misdemeanor, punishable by up to six months in jail and a fine up to $1,000.</li>
                          <li><span className="font-semibold">Second Offense:</span> Class A misdemeanor, carrying up to one year in jail and a fine up to $2,500.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Other Controlled Substances</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><span className="font-semibold">First Offense:</span> Severity level 5 felony, punishable by 10 to 42 months in prison and fines up to $100,000.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Distribution or Intent to Distribute</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Within 1,000 Feet of School Property:</span> The severity level of the offense increases by one level, leading to harsher penalties.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Drug Laws and Penalties</h2>
                <p className="text-gray-800">
                  Missouri classifies drug offenses based on the type and amount of the controlled substance.
                </p>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Possession of Controlled Substances</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Marijuana</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><span className="font-semibold">10 Grams or Less:</span> Class D misdemeanor, punishable by a fine up to $500.</li>
                          <li><span className="font-semibold">More Than 10 Grams but 35 Grams or Less:</span> Class A misdemeanor, carrying up to one year in jail and a fine up to $2,000.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Other Controlled Substances</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><span className="font-semibold">First Offense:</span> Class D felony, punishable by up to seven years in prison and fines up to $10,000.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Distribution or Trafficking</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Class C Felony:</span> Involves imprisonment ranging from three to ten years and fines up to $10,000.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Charged with a Drug Offense</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consult an Experienced Criminal Defense Attorney</h3>
                  <p className="text-gray-700">Legal representation is vital to navigate the complexities of drug laws and to protect your rights.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document the Incident</h3>
                  <p className="text-gray-700">Record all details of the event, including interactions with law enforcement, to aid in your defense.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comply with Legal Requirements</h3>
                  <p className="text-gray-700">Adhere to any court-imposed conditions, such as attending hearings and completing mandated evaluations or treatment programs.</p>
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

export default DrugChargesPage;