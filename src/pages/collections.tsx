import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// Define the shape of our cosmic data structures
interface CollectionService {
  title: string;
  path: string;
  desc: string;
}

interface CollectionsPageProps {
  services: CollectionService[];
}

const CollectionsPage: NextPage<CollectionsPageProps> = ({ services = [] }) => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - The gateway to financial resolution */}
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Collections Law</h1>
          <a
            href="mailto:elbiguspa@gmail.com"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 text-sm md:text-base"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Schedule a Consultation
          </a>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="prose max-w-none">
          {/* Recovery Section - Where wisdom meets financial resolution */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Recovering What You're Owed
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6">
                  Unpaid debts can put a strain on individuals and businesses alike. Whether you're a creditor 
                  seeking payment or a business dealing with delinquent accounts, our collections attorneys can 
                  help you navigate the legal process and recover what you're rightfully owed.
                </p>
                <div className="space-y-2 md:space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Our Process:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-800">Sending formal demand letters to encourage prompt payment</li>
                    <li className="text-gray-800">Negotiating settlements to recover debts efficiently</li>
                    <li className="text-gray-800">Filing lawsuits when necessary to enforce collection</li>
                    <li className="text-gray-800">Securing judgments and pursuing wage garnishments or liens</li>
                    <li className="text-gray-800">Ensuring compliance with state and federal debt collection laws</li>
                  </ul>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Every case is unique, and we tailor our approach to maximize your chances of recovery while 
                  staying within legal and ethical boundaries. During your consultation, we'll assess your 
                  situation and outline the best strategy for getting the results you need.
                </p>
              </div>
              <div className="w-full md:w-1/3 max-w-[300px]">
                <div className="relative aspect-square">
                  <Image 
                    src="/Money.png"
                    alt="Collections Law"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid - A mosaic of financial solutions */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
              Our Collections Services
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {services.map((service) => (
                <div 
                  key={service.path}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                    <Link 
                      href={`/collections/${service.path}`}
                      className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - The bridge to resolution */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mt-8 md:mt-12 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
              Contact Us About Your Collection Matter
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<CollectionsPageProps> = async (): Promise<{ 
  props: CollectionsPageProps; 
  revalidate: number 
}> => {
  // The sacred scrolls of collection services - each one a path to financial harmony
  const services: CollectionService[] = [
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
  ];

  return {
    props: {
      services,
    },
    // Keep our cosmic ledger fresh
    revalidate: 604800,
  };
};

export default CollectionsPage;