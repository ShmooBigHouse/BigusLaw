import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const TrafficPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Traffic Violations Defense</h1>
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
                Understanding traffic violations in Kansas and Missouri is essential, as they encompass a range of infractions with varying penalties. Below is an overview of common traffic offenses, their classifications, associated penalties, and recommended actions if you're facing such charges.
              </p>
            </div>
          </div>

          {/* State Classifications Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Traffic Violations and Penalties</h2>
                <p className="text-gray-800">
                  Kansas classifies traffic offenses primarily into infractions and misdemeanors:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Infractions:</span> Minor violations, typically resulting in fines without jail time.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Misdemeanors:</span> More serious offenses that may involve fines and imprisonment.
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Common Traffic Offenses and Penalties</h3>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold mb-2">Speeding</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>1 to 10 mph over the limit: $45 fine</li>
                      <li>11 to 20 mph over the limit: $45 plus $6 for each mph over 10 mph</li>
                      <li>21 to 30 mph over the limit: $105 plus $9 for each mph over 20 mph</li>
                      <li>31 mph or more over the limit: $195 plus $15 for each mph over 30 mph</li>
                    </ul>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold mb-2">Reckless Driving</h4>
                    <p>Considered a misdemeanor with potential penalties including fines and imprisonment.</p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold mb-2">Driving Under the Influence (DUI)</h4>
                    <p>A serious offense with severe penalties, including substantial fines, license suspension, and possible jail time.</p>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Traffic Violations and Penalties</h2>
                <p className="text-gray-800">
                  Missouri categorizes traffic offenses into infractions, misdemeanors, and felonies:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Infractions:</span> Minor violations, usually resulting in fines without jail time.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Misdemeanors:</span> Offenses that may involve fines and potential jail time.
                  </li>
                  <li className="pl-4 border-l-4 border-blue-600">
                    <span className="font-semibold">Felonies:</span> Severe offenses with significant penalties, including extended imprisonment.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Common Traffic Offenses and Penalties</h3>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold mb-2">Speeding</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>1 to 5 mph over the limit: $85 total fine</li>
                      <li>6 to 10 mph over the limit: $99 total fine</li>
                      <li>11 to 15 mph over the limit: $124 total fine</li>
                      <li>16 to 19 mph over the limit: $149 total fine</li>
                      <li>20 to 25 mph over the limit: $224 total fine</li>
                    </ul>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold mb-2">Reckless Driving</h4>
                    <p>Classified as a misdemeanor, carrying potential fines and jail time.</p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold mb-2">Driving While Intoxicated (DWI)</h4>
                    <p>A serious offense with penalties including hefty fines, license suspension or revocation, and possible imprisonment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Legislative Updates Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Legislative Updates in Missouri</h2>
            <div className="space-y-6">
              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-2">Valentine's Law (Effective August 28, 2024)</h3>
                <p className="text-gray-700">Targets drivers who flee during traffic stops, imposing fines of at least $10,000 and up to 30 years in prison.</p>
              </div>
              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-2">Siddens Bening Hands-Free Law (Enforcement began January 1, 2025)</h3>
                <p className="text-gray-700">Prohibits holding or touching a phone while driving. Fines start at $150 for the first offense, escalating with subsequent violations.</p>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Charged with a Traffic Violation</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consult an Experienced Traffic Attorney</h3>
                  <p className="text-gray-700">Legal representation can help navigate the complexities of traffic laws and protect your rights.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Avoid Admitting Fault</h3>
                  <p className="text-gray-700">Refrain from making statements that could be used against you in court.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document the Incident</h3>
                  <p className="text-gray-700">Record details of the event, including date, time, location, and any witness information.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Understand the Specific Charges</h3>
                  <p className="text-gray-700">Different violations carry varying penalties; knowing the specifics can aid in your defense.</p>
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

export default TrafficPage;