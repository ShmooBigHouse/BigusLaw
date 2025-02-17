import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import Head from 'next/head';

// Define our cosmic data structure
interface CoreMediationProps {
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
}

const CoreMediationPage: NextPage<CoreMediationProps> = ({ benefits, process }) => {
  return (
    <>
      <Head>
        <title>Core Mediation Services | Edward L. Bigus | Kansas & Missouri</title>
        <meta name="description" content="Expert core mediation services in Kansas & Missouri. Resolve disputes efficiently with certified mediator Edward L. Bigus. Schedule a consultation today." />
        <meta name="keywords" content="core mediation, dispute resolution, legal mediation, Kansas mediator, Missouri mediator, Edward Bigus, civil disputes, business conflicts" />
        {/* Open Graph tags for social media enlightenment */}
        <meta property="og:title" content="Core Mediation Services | Edward L. Bigus" />
        <meta property="og:description" content="Expert core mediation services in Kansas & Missouri. Resolve disputes efficiently with certified mediator Edward L. Bigus." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        {/* Hero Section - The gateway to resolution */}
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Core Mediation</h1>
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
            {/* Intro Section - Where the journey begins */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                    Why Choose Mediation
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
                      alt="Handshake representing successful mediation"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section - The path to resolution */}
            <div className="bg-white shadow-sm p-4 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                How Core Mediation Works
              </h2>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-800">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - The bridge to peace */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white shadow-sm p-4 md:p-8 border-t border-gray-600">
                <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
                  Contact Us About Core Mediation
                </h2>
                <p className="text-gray-700 text-center mb-6 md:mb-8">
                  If you're facing a legal dispute, mediation may be an effective alternative to court. 
                  Contact us to explore whether core mediation is the right option for your situation.
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

// SSR magic - letting the universe know what's up ✨
export const getStaticProps: GetStaticProps<CoreMediationProps> = async () => {
  // These cosmic benefits will be baked into the HTML at build time
  const benefits = [
    {
      title: 'Cost-Effective Solution',
      description: 'Save significant legal expenses by avoiding lengthy court battles and expensive litigation procedures.'
    },
    {
      title: 'Time-Saving Process',
      description: 'Resolve disputes much faster than traditional trial proceedings, allowing you to move forward with your life.'
    },
    {
      title: 'Control Over the Outcome',
      description: 'Craft your own agreement rather than having a judge decide for you, ensuring the solution meets your specific needs.'
    },
    {
      title: 'Less Stressful Environment',
      description: 'Experience a cooperative, problem-solving approach rather than the confrontational nature of court proceedings.'
    }
  ];

  const process = [
    {
      title: 'Neutral Facilitation',
      description: 'A qualified mediator facilitates discussions between disputing parties, ensuring fair and balanced negotiations.'
    },
    {
      title: 'Guided Resolution',
      description: 'The mediator helps guide both sides toward a mutually agreeable resolution without making decisions for the parties.'
    },
    {
      title: 'Confidential Discussions',
      description: 'All mediation discussions are confidential and cannot be used against either party in court, promoting open and honest communication.'
    },
    {
      title: 'Voluntary Participation',
      description: 'While some courts may encourage mediation, the process remains voluntary, allowing parties to maintain control over their participation.'
    }
  ];

  return {
    props: {
      benefits,
      process,
    },
    // Revalidate every week - keep that content fresh like morning dew
    revalidate: 604800,
  };
};

export default CoreMediationPage;