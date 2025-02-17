import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import Head from 'next/head';

const DomesticMediationPage: NextPage = () => {
  // Let's define our cosmic data right here in the component - keeping it all in the same dimensional plane
  const benefits = [
    {
      title: 'Less Stressful Environment',
      description: 'Mediation fosters communication and cooperation, reducing the emotional toll on all parties.'
    },
    {
      title: 'Child-Focused Approach',
      description: 'Decisions are made with the best interests of children in mind, protecting their well-being throughout the process.'
    },
    {
      title: 'More Affordable',
      description: 'Avoid the high costs of lengthy court battles and significantly reduce legal fees.'
    },
    {
      title: 'Faster Resolution',
      description: 'Complete the process in weeks rather than the months or years often required for court proceedings.'
    },
    {
      title: 'Flexible Solutions',
      description: 'Create personalized agreements that best suit your familys unique situation and needs.'
    }
  ];

  const issues = [
    {
      title: 'Divorce Matters',
      items: [
        'Division of assets and property',
        'Spousal support arrangements',
        'Retirement and pension distribution'
      ]
    },
    {
      title: 'Child-Related Issues',
      items: [
        'Child custody and parenting time',
        'Child support modifications',
        'Paternity-related disputes',
        'Grandparents rights and visitation'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Domestic Mediation Services | Edward L. Bigus | Kansas & Missouri</title>
        <meta name="description" content="Expert domestic mediation services in Kansas & Missouri. Resolve family disputes with compassion and experience. Find peaceful solutions with Edward L. Bigus." />
        <meta name="keywords" content="domestic mediation, family mediation, divorce mediation, child custody mediation, Kansas mediator, Missouri mediator, Edward Bigus" />
        <meta property="og:title" content="Domestic Mediation Services | Edward L. Bigus" />
        <meta property="og:description" content="Expert domestic mediation services helping families find peaceful resolutions in Kansas & Missouri." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        {/* Hero Section - The gateway to family harmony */}
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Domestic Mediation</h1>
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
            {/* Intro Section - Where family healing begins */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                    Why Choose Mediation for Family Disputes
                  </h2>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-gray-700">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/3 max-w-[300px]">
                  <div className="relative aspect-square">
                    <Image 
                      src="/handshake.png"
                      alt="Handshake representing peaceful family resolution"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Issues Section - The paths to resolution */}
            <div className="bg-white shadow-sm p-4 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Common Issues Resolved Through Domestic Mediation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {issues.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - The bridge to family peace */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white shadow-sm p-4 md:p-8 border-t border-gray-600">
                <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
                  Contact Us About Domestic Mediation
                </h2>
                <p className="text-gray-700 text-center mb-6 md:mb-8">
                  If you are facing a family-related legal dispute, domestic mediation can help find solutions 
                  while preserving important relationships. Contact us to discuss your situation.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DomesticMediationPage;