import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CollectionsPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Collections Law</h1>
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
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recovering What You're Owed</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Unpaid debts can put a strain on individuals and businesses alike. Whether you're a creditor seeking payment or a business dealing with delinquent accounts, our collections attorneys can help you navigate the legal process and recover what you're rightfully owed. We work within the law to pursue effective solutions, which may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Sending formal demand letters to encourage prompt payment</li>
                  <li>Negotiating settlements to recover debts efficiently</li>
                  <li>Filing lawsuits when necessary to enforce collection</li>
                  <li>Securing judgments and pursuing wage garnishments or liens</li>
                  <li>Ensuring compliance with state and federal debt collection laws</li>
                </ul>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Every case is unique, and we tailor our approach to maximize your chances of recovery while staying within legal and ethical boundaries. During your consultation, we'll assess your situation and outline the best strategy for getting the results you need.
                </p>
              </div>
              <div className="w-1/3">
                <Image 
                  src="/Money.png"
                  alt="Collections Law"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Collections Services</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Commercial Collections',
                  path: 'commercial',
                  desc: 'Comprehensive debt recovery services for businesses, including B2B collections, contract disputes, and commercial debt resolution.'
                },
                {
                  title: 'Consumer Collections',
                  path: 'consumer',
                  desc: 'Legal collection services for consumer debt, ensuring compliance with the Fair Debt Collection Practices Act and other relevant regulations.'
                },
                {
                  title: 'Judgment Enforcement',
                  path: 'judgment-enforcement',
                  desc: 'Strategic enforcement of judgments through various legal means, including wage garnishment, property liens, and asset discovery.'
                },
                {
                  title: 'Debt Settlement',
                  path: 'debt-settlement',
                  desc: 'Negotiation services to reach favorable settlements between creditors and debtors, often avoiding costly litigation.'
                }
              ].map((service) => (
                <div key={service.path} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href={`/collections/${service.path}`} className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Collection Matter</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollectionsPage;