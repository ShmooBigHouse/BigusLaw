import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Define our cosmic data structures
interface MisdemeanorClass {
  level: string;
  maxPenalty: string;
  fine: string;
  description?: string;
}

interface StateClassifications {
  state: string;
  description: string;
  classes: MisdemeanorClass[];
}

interface MisdemeanorsPageProps {
  classifications: StateClassifications[];
}

const MisdemeanorsPage: NextPage<MisdemeanorsPageProps> = ({ classifications }) => {
  return (
    <>
      <Head>
        <title>Misdemeanor Defense Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert misdemeanor defense in Kansas & Missouri. Protect your rights with over 30 years of criminal defense experience. Free consultation with Edward L. Bigus."
        />
        <meta 
          name="keywords" 
          content="misdemeanor defense attorney, criminal defense lawyer, Kansas misdemeanor attorney, Missouri misdemeanor lawyer, Edward Bigus"
        />
        <meta property="og:title" content="Misdemeanor Defense Attorney | Edward L. Bigus" />
        <meta property="og:description" content="Expert misdemeanor defense in Kansas & Missouri. Protect your rights with experienced legal representation." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Misdemeanor Defense</h1>
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
                  Understanding the potential consequences of a misdemeanor charge in Kansas or Missouri is essential. 
                  Below is an overview of the classifications, possible penalties, and recommended actions if you're 
                  facing such charges in these states.
                </p>
              </div>
            </div>

{/* Steps Section */}
<div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Immediate Steps if Charged with a Misdemeanor
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consult an Experienced Criminal Defense Attorney</h3>
                    <p className="text-gray-700">Legal representation is vital to navigate the complexities of the criminal justice system and to protect your rights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Avoid Discussing Your Case</h3>
                    <p className="text-gray-700">Refrain from speaking about your case with anyone other than your attorney to prevent unintentional self-incrimination.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document All Relevant Information</h3>
                    <p className="text-gray-700">Keep detailed records of events, communications, and any other pertinent information related to your case.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* State Classifications Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {classifications.map((state) => (
                  <div key={state.state} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {state.state} Misdemeanor Classifications and Penalties
                    </h2>
                    <p className="text-gray-800">{state.description}</p>
                    <ul className="list-none space-y-4 pl-0">
                      {state.classes.map((classification) => (
                        <li key={classification.level} className="pl-4 border-l-4 border-blue-600">
                          <span className="font-semibold">{classification.level}:</span>{' '}
                          {classification.maxPenalty} and {classification.fine}
                          {classification.description && (
                            <p className="text-gray-700 mt-2">{classification.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white shadow-sm p-8 border-t border-gray-600">
                <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                  Contact Us About Your Case
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

// Here's where the SSR magic happens ✨
export const getStaticProps: GetStaticProps<MisdemeanorsPageProps> = async () => {
  // Our cosmic classification data that will be baked into the HTML at build time
  const classifications: StateClassifications[] = [
    {
      state: "Kansas",
      description: "Kansas categorizes misdemeanors into three classes, each with specific maximum penalties:",
      classes: [
        {
          level: "Class A Misdemeanor",
          maxPenalty: "Up to 1 year in county jail",
          fine: "a fine up to $2,500"
        },
        {
          level: "Class B Misdemeanor",
          maxPenalty: "Up to 6 months in county jail",
          fine: "a fine up to $1,000"
        },
        {
          level: "Class C Misdemeanor",
          maxPenalty: "Up to 1 month in county jail",
          fine: "a fine up to $500"
        }
      ]
    },
    {
      state: "Missouri",
      description: "Missouri divides misdemeanors into four classes, with associated penalties as follows:",
      classes: [
        {
          level: "Class A Misdemeanor",
          maxPenalty: "Up to 1 year in jail",
          fine: "a fine up to $2,000"
        },
        {
          level: "Class B Misdemeanor",
          maxPenalty: "Up to 6 months in jail",
          fine: "a fine up to $1,000"
        },
        {
          level: "Class C Misdemeanor",
          maxPenalty: "Up to 15 days in jail",
          fine: "a fine up to $750"
        },
        {
          level: "Class D Misdemeanor",
          maxPenalty: "No jail time",
          fine: "fine up to $500"
        }
      ]
    }
  ];

  return {
    props: {
      classifications,
    },
    // Revalidate weekly to keep that content fresh like morning dew
    revalidate: 604800,
  };
};

export default MisdemeanorsPage;