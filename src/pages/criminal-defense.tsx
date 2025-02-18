import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// Cosmic type definitions for our defense arsenal
interface DefenseService {
  title: string;
  path: string;
  desc: string;
}

interface CriminalDefensePageProps {
  services: DefenseService[];
}

const CriminalDefensePage: NextPage<CriminalDefensePageProps> = ({ services = [] }) => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Like the opening statement of your digital defense */}
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Criminal Defense</h1>
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
          {/* Trial Avoidance Section - Mobile-optimized wisdom */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Can We Avoid Going to Trial?
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6">
                  For many people, the thought of going to trial is daunting. Our Overland Park defense attorneys 
                  understand this and will explore every possible alternative based on the specifics of your case.
                </p>
                <div className="space-y-2 md:space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">We may:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-800">Work to have your charges dismissed entirely</li>
                    <li className="text-gray-800">Challenge the evidence against you to weaken the prosecution's case</li>
                    <li className="text-gray-800">Negotiate for reduced charges or a more favorable plea deal</li>
                    <li className="text-gray-800">Pursue a diversion agreement when applicable</li>
                    <li className="text-gray-800">Advocate for placement in a treatment program instead of traditional sentencing</li>
                  </ul>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  In many cases, trial may not be necessary at all. During your initial consultation, we'll discuss 
                  your options and determine the best path forward.
                </p>
              </div>
              <div className="w-full md:w-1/3 max-w-[300px]">
                <div className="relative aspect-square">
                  <Image 
                    src="/Gavel.png"
                    alt="Gavel"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Practice Areas Grid - A mosaic of legal expertise */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
              Our Criminal Defense Services
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service) => (
                <div 
                  key={service.path}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                    <Link 
                      href={`/criminal-defense/${service.path}`}
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

          {/* Contact Form - The bridge to legal enlightenment */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mt-8 md:mt-12 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
              Contact Us About Your Case
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<CriminalDefensePageProps> = async (): Promise<{ 
  props: CriminalDefensePageProps; 
  revalidate: number 
}> => {
  // The sacred scrolls of defense services - each one a path to justice
  const services: DefenseService[] = [
    {
      title: 'Felonies',
      path: 'felonies',
      desc: 'Serious criminal charges that can result in significant prison time. We provide aggressive defense for all felony cases.'
    },
    {
      title: 'Misdemeanors',
      path: 'misdemeanors',
      desc: 'Less severe charges that still require experienced representation to protect your rights and minimize consequences.'
    },
    {
      title: 'Traffic Violations',
      path: 'traffic',
      desc: 'From speeding tickets to reckless driving charges, we help protect your driving record and license.'
    },
    {
      title: 'DUI',
      path: 'dui',
      desc: 'Comprehensive defense against drunk driving charges, helping preserve your driving privileges and freedom.'
    },
    {
      title: 'Drug Charges',
      path: 'drug-charges',
      desc: 'Defense against possession, distribution, and trafficking charges, exploring treatment options when available.'
    },
    {
      title: 'Juvenile',
      path: 'juvenile',
      desc: 'Specialized representation for minors, focusing on rehabilitation and protecting their future opportunities.'
    },
    {
      title: 'Abuse',
      path: 'abuse',
      desc: 'Compassionate representation for victims of abuse, protecting their rights and helping them seek justice.'
    },
    {
      title: 'Appeals',
      path: 'appeals',
      desc: 'Experienced representation in challenging convictions and seeking post-conviction remedies.'
    }
  ];

  return {
    props: {
      services,
    },
    // Keep our justice flowing fresh like morning dew
    revalidate: 604800,
  };
};

export default CriminalDefensePage;