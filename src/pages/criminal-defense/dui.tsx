import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DUIPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">DUI/DWI Defense</h1>
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
                Driving under the influence (DUI) in Kansas or driving while intoxicated (DWI) in Missouri are serious offenses with significant legal consequences. Below is an overview of the laws, penalties, and recommended actions if you're facing such charges in these states.
              </p>
            </div>
          </div>

          {/* State Laws and Penalties Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas DUI Laws and Penalties</h2>
                <p className="text-gray-800">
                  In Kansas, DUI offenses are subject to escalating penalties based on the number of prior convictions.
                </p>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">First DUI Conviction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Classification:</span> Class B misdemeanor</li>
                      <li><span className="font-semibold">Incarceration:</span> 48 hours to six months in jail</li>
                      <li><span className="font-semibold">Fines:</span> $750 to $1,000, plus court costs</li>
                      <li><span className="font-semibold">License Suspension:</span> 30-day suspension followed by a 180-day ignition interlock device (IID) requirement</li>
                      <li><span className="font-semibold">Additional Requirements:</span> Up to 100 hours of community service, mandatory alcohol evaluation, and completion of a treatment program if recommended</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Second DUI Conviction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Classification:</span> Class A misdemeanor</li>
                      <li><span className="font-semibold">Incarceration:</span> 90 days to one year in jail</li>
                      <li><span className="font-semibold">Fines:</span> $1,250 to $1,750, plus court costs</li>
                      <li><span className="font-semibold">License Suspension:</span> One-year suspension followed by a one-year IID requirement</li>
                      <li><span className="font-semibold">Additional Requirements:</span> Mandatory alcohol evaluation and completion of a treatment program if recommended</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Third DUI Conviction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Classification:</span> Felony offense</li>
                      <li><span className="font-semibold">Incarceration:</span> 90 days to one year in jail</li>
                      <li><span className="font-semibold">Fines:</span> $1,750 to $2,500, plus court costs</li>
                      <li><span className="font-semibold">License Suspension:</span> One-year suspension followed by a one-year IID requirement</li>
                      <li><span className="font-semibold">Additional Requirements:</span> Mandatory alcohol evaluation and completion of a treatment program if recommended</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-800">
                  Refusal to submit to a chemical test results in a one-year license suspension followed by a two-year IID requirement for the first occurrence.
                </p>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri DWI Laws and Penalties</h2>
                <p className="text-gray-800">
                  Missouri treats DWI offenses with increasing severity for repeat offenders.
                </p>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">First DWI Conviction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Classification:</span> Class B misdemeanor</li>
                      <li><span className="font-semibold">Incarceration:</span> Up to six months in jail</li>
                      <li><span className="font-semibold">Fines:</span> Up to $500</li>
                      <li><span className="font-semibold">License Suspension:</span> 30-day suspension followed by a 60-day restricted driving privilege</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Second DWI Conviction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Classification:</span> Class A misdemeanor</li>
                      <li><span className="font-semibold">Incarceration:</span> Up to one year in jail, with a mandatory minimum of 10 days before eligibility for probation or parole</li>
                      <li><span className="font-semibold">Fines:</span> Up to $1,000</li>
                      <li><span className="font-semibold">License Suspension:</span> One-year revocation</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Third DWI Conviction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Classification:</span> Class D felony</li>
                      <li><span className="font-semibold">Incarceration:</span> Up to four years in prison, with a mandatory minimum of 30 days before eligibility for probation or parole</li>
                      <li><span className="font-semibold">Fines:</span> Up to $5,000</li>
                      <li><span className="font-semibold">License Suspension:</span> Ten-year denial of driving privileges</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-800">
                  All Missouri drivers convicted of a DWI face license suspension or revocation. After completing the suspension period, the driver may be restricted to driving only with an ignition interlock device (IID).
                </p>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Charged with DUI/DWI</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consult an Experienced DUI/DWI Attorney</h3>
                  <p className="text-gray-700">Legal representation is vital to navigate the complexities of DUI/DWI laws and to protect your rights.</p>
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

export default DUIPage;