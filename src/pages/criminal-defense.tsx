import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CriminalDefensePage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Criminal Defense</h1>
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
          {/* Trial Avoidance Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Can We Avoid Going to Trial?</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  For many people, the thought of going to trial is daunting. Our Overland Park defense attorneys understand this and will explore every possible alternative based on the specifics of your case. Depending on your situation, we may:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Work to have your charges dismissed entirely</li>
                  <li>Challenge the evidence against you to weaken the prosecution's case</li>
                  <li>Negotiate for reduced charges or a more favorable plea deal</li>
                  <li>Pursue a diversion agreement when applicable</li>
                  <li>Advocate for placement in a treatment program instead of traditional sentencing</li>
                </ul>
                <p className="text-gray-800 text-lg leading-relaxed">
                  In many cases, trial may not be necessary at all. During your initial consultation, we'll discuss your options and determine the best path forward.
                </p>
              </div>
              <div className="w-1/3">
                <Image 
                  src="/Gavel.png"
                  alt="Gavel"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Criminal Defense Services</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {title: 'Felonies', path: 'felonies', desc: 'Serious criminal charges that can result in significant prison time. We provide aggressive defense for all felony cases.'},
                {title: 'Misdemeanors', path: 'misdemeanors', desc: 'Less severe charges that still require experienced representation to protect your rights and minimize consequences.'},
                {title: 'Traffic Violations', path: 'traffic', desc: 'From speeding tickets to reckless driving charges, we help protect your driving record and license.'},
                {title: 'DUI', path: 'dui', desc: 'Comprehensive defense against drunk driving charges, helping preserve your driving privileges and freedom.'},
                {title: 'Drug Charges', path: 'drug-charges', desc: 'Defense against possession, distribution, and trafficking charges, exploring treatment options when available.'},
                {title: 'Juvenile', path: 'juvenile', desc: 'Specialized representation for minors, focusing on rehabilitation and protecting their future opportunities.'},
                {title: 'Abuse', path: 'abuse', desc: 'Compassionate representation for victims of abuse, protecting their rights and helping them seek justice.'},
                {title: 'Appeals', path: 'appeals', desc: 'Experienced representation in challenging convictions and seeking post-conviction remedies.'}
              ].map((service) => (
                <div key={service.path} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href={`/criminal-defense/${service.path}`} className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Case</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CriminalDefensePage;