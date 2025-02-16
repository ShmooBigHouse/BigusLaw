import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const MediationPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Mediation Services</h1>
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
          {/* Rest of the content remains the same */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Resolving Disputes Through Mediation</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Mediation offers a practical and less confrontational way to resolve family law matters. Instead of relying on a judge's decision, mediation allows both parties to work toward a mutually agreeable solution with the guidance of a neutral mediator. Mr. Bigus is experienced in mediation and will advocate for your best interests throughout the process.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Depending on your situation, mediation may help:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Reach fair agreements on divorce terms, child custody, and support</li>
                  <li>Reduce stress and legal costs by avoiding lengthy court proceedings</li>
                  <li>Create customized solutions that fit your family's unique needs</li>
                  <li>Foster cooperative co-parenting relationships for the benefit of your children</li>
                  <li>Maintain control over important decisions rather than leaving them to the court</li>
                </ul>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Mediation isn't right for every case, but when possible, it can be a more peaceful and efficient way to resolve disputes. During your consultation, we'll discuss whether mediation is a good fit for your situation and how we can guide you through the process.
                </p>
              </div>
              <div className="w-1/3">
                <Image 
                  src="/mediation.png"
                  alt="Mediation Services"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mediation Services</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Core Mediation',
                  path: 'core',
                  desc: 'General dispute resolution services for civil matters, business conflicts, and other non-family disputes requiring neutral third-party facilitation.'
                },
                {
                  title: 'Domestic Mediation',
                  path: 'domestic',
                  desc: 'Specialized mediation services for family law matters including divorce, custody arrangements, and other domestic disputes requiring sensitive handling.'
                }
              ].map((service) => (
                <div key={service.path} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href={`/mediation/${service.path}`} className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Mediation</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediationPage;