import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const JuvenilePage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Juvenile Defense</h1>
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
                Juvenile justice systems in Kansas and Missouri are designed to address offenses committed by individuals under 18, focusing on rehabilitation over punishment. However, serious offenses can lead to severe consequences, including the possibility of being tried as an adult. Below is an overview of juvenile laws, potential penalties, and recommended actions if a juvenile is facing legal charges in these states.
              </p>
            </div>
          </div>

          {/* State Laws and Systems Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Juvenile Laws and Penalties</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Age of Jurisdiction</h3>
                    <p className="text-gray-800">
                      In Kansas, the juvenile justice system typically handles cases involving individuals under 18 years of age.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Juvenile Offender Sentencing</h3>
                    <p className="text-gray-800">
                      Upon adjudication as a juvenile offender, the court may impose various sentencing alternatives, including probation, placement in a juvenile correctional facility, or community service. The specific sentence depends on the offense's severity and the juvenile's prior record. Notably, commitment to detention is prohibited for solely technical violations of probation or to protect the juvenile from self-harm.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Adult Prosecution</h3>
                    <p className="text-gray-800">
                      Under certain circumstances, juveniles may be tried as adults. A hearing is held to determine if adult prosecution is warranted, especially for serious offenses. The prosecution must demonstrate "good cause" for such a decision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Juvenile Laws and Penalties</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Age of Jurisdiction</h3>
                    <p className="text-gray-800">
                      Missouri's juvenile system generally covers individuals under 18 years old.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Juvenile Offender Sentencing</h3>
                    <p className="text-gray-800">
                      The system emphasizes rehabilitation, but certain offenses can lead to significant penalties. For instance, a juvenile convicted of first-degree murder at 16 could face the death penalty.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Adult Prosecution</h3>
                    <p className="text-gray-800">
                      Juveniles aged 12 and above charged with felonies may be certified for adult prosecution. This process, known as a certification proceeding, involves a hearing to assess the appropriateness of adult charges. Certification is mandatory for specific serious felonies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if a Juvenile Faces Charges</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consult an Experienced Juvenile Defense Attorney</h3>
                  <p className="text-gray-700">Specialized legal representation is essential to navigate the complexities of juvenile law and to protect the juvenile's rights.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Engage in the Legal Process</h3>
                  <p className="text-gray-700">Participate actively in all hearings and comply with court orders to demonstrate responsibility and cooperation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Focus on Rehabilitation</h3>
                  <p className="text-gray-700">Embrace counseling, educational programs, or community service opportunities that may be part of the court's recommendations.</p>
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

export default JuvenilePage;