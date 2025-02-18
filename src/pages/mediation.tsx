import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// Our cosmic type definitions - like mantras for our digital meditation
interface MediationService {
  title: string;
  path: string;
  desc: string;
}

interface MediationPageProps {
  services: MediationService[];
}

const MediationPage: NextPage<MediationPageProps> = ({ services = [] }) => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - The gateway to inner peace */}
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Mediation Services</h1>
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
          {/* Introduction Card - Now with mobile-first flow */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Resolving Disputes Through Mediation
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6">
                  Mediation offers a practical and less confrontational way to resolve family law matters. 
                  Instead of relying on a judge's decision, mediation allows both parties to work toward 
                  a mutually agreeable solution with the guidance of a neutral mediator.
                </p>
                <div className="space-y-2 md:space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">How Mediation Can Help:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-800">Reach fair agreements on divorce terms, child custody, and support</li>
                    <li className="text-gray-800">Reduce stress and legal costs by avoiding lengthy court proceedings</li>
                    <li className="text-gray-800">Create customized solutions that fit your family's unique needs</li>
                    <li className="text-gray-800">Foster cooperative co-parenting relationships</li>
                    <li className="text-gray-800">Maintain control over important decisions</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/3 max-w-[300px]">
                <div className="relative aspect-square">
                  <Image 
                    src="/mediation.png"
                    alt="Mediation Services"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid - The paths to peace */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
              Our Mediation Services
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {services.map((service) => (
                <div 
                  key={service.path}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                    <Link 
                      href={`/mediation/${service.path}`}
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

          {/* Contact Form - The bridge to harmony */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mt-8 md:mt-12 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
              Contact Us About Mediation
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<MediationPageProps> = async (): Promise<{ 
  props: MediationPageProps; 
  revalidate: number 
}> => {
  // The sacred scrolls of mediation services - each one a path to harmony
  const services: MediationService[] = [
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
  ];

  return {
    props: {
      services,
    },
    // Keep our peaceful vibes fresh like morning tea
    revalidate: 604800,
  };
};

export default MediationPage;