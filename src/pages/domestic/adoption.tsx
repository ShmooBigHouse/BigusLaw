import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

interface StateInfo {
  state: string;
  description: string;
  custody_types: {
    type: string;
    description: string;
    key_points: string[];
  }[];
  factors: string[];
  modification_requirements: string[];
}

interface AdoptionPageProps {
  stateInfo: StateInfo[];
}

const AdoptionPage: NextPage<AdoptionPageProps> = ({ stateInfo = [] }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Adoption</h1>
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
                Adoption is a profound legal process that establishes a permanent parent-child relationship between individuals who are not biologically related. Both Kansas and Missouri have specific laws and procedures governing adoption to ensure the best interests of the child are met. Understanding these requirements and procedures is crucial for families considering adoption.
              </p>
            </div>
          </div>

{/* Important Steps Section */}
<div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Steps in the Adoption Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-gray-700">Meet with an adoption attorney to understand your options and the legal requirements in your state.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Home Study</h3>
                  <p className="text-gray-700">Complete the required background checks, home visits, and documentation for approval.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Proceedings</h3>
                  <p className="text-gray-700">Work with your attorney to navigate court requirements and finalize the adoption.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* State Laws Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Adoption Laws</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Eligibility to Adopt</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Age Requirement:</span> Must be at least 18 years old</li>
                      <li><span className="font-semibold">Marital Status:</span> Both single individuals and married couples are eligible</li>
                      <li><span className="font-semibold">Age Difference:</span> For foster care adoptions, must be at least 10 years older than the child</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Adoption Process</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Application:</span> Contact Adopt Kansas Kids (1-855-AdoptKS)</li>
                      <li><span className="font-semibold">Background Checks:</span> Complete standard safety and suitability checks</li>
                      <li><span className="font-semibold">Training:</span> Attend foster parent training course</li>
                      <li><span className="font-semibold">Licensing:</span> Obtain foster parent license for foster care system adoptions</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Legal Considerations</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Consent:</span> Biological parents' rights must be terminated</li>
                      <li><span className="font-semibold">Finalization:</span> Court hearing required to establish legal rights</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Adoption Laws</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Eligibility to Adopt</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Age Requirement:</span> Must be at least 21 years old</li>
                      <li><span className="font-semibold">Marital Status:</span> Both single individuals and married couples are eligible</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Adoption Process</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Application:</span> Submit petition to appropriate county court</li>
                      <li><span className="font-semibold">Assessment:</span> Complete background checks, health screenings, and home assessments</li>
                      <li><span className="font-semibold">Training:</span> Attend required preparation sessions</li>
                      <li><span className="font-semibold">Placement:</span> Supervision period to ensure proper fit</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Legal Considerations</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Consent:</span> Child must be at least 48 hours old for valid birth parent consent</li>
                      <li><span className="font-semibold">Finalization:</span> Court hearing required to establish legal parent-child relationship</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Adoption Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<AdoptionPageProps> = async (): Promise<{ 
  props: AdoptionPageProps; 
  revalidate: number 
}> => {
  const stateInfo: StateInfo[] = [];

  return {
    props: {
      stateInfo,
    },
    revalidate: 604800,
  };
};

export default AdoptionPage;