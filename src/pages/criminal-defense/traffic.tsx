import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Let's map out our cosmic data structures
interface SpeedingPenalty {
  range: string;
  fine: string;
}

interface ViolationType {
  name: string;
  description: string;
  penalties: string[];
}

interface StateTrafficLaws {
  state: string;
  speedingPenalties: SpeedingPenalty[];
  otherViolations: ViolationType[];
}

interface TrafficPageProps {
  stateLaws: StateTrafficLaws[];
  legislativeUpdates: {
    title: string;
    description: string;
    effectiveDate: string;
  }[];
}

const TrafficPage: NextPage<TrafficPageProps> = ({ stateLaws, legislativeUpdates }) => {
  return (
    <>
      <Head>
        <title>Traffic Violation Defense | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert traffic violation defense in Kansas & Missouri. Protect your driving record with over 30 years of legal experience. Free consultation with Edward L. Bigus."
        />
        <meta 
          name="keywords" 
          content="traffic violation defense, speeding ticket lawyer, traffic attorney, Kansas traffic lawyer, Missouri traffic attorney, Edward Bigus"
        />
        <meta property="og:title" content="Traffic Violation Defense | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Traffic Violations Defense</h1>
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
                  Understanding traffic violations in Kansas and Missouri is essential, as they encompass 
                  a range of infractions with varying penalties. Below is an overview of common traffic 
                  offenses, their classifications, associated penalties, and recommended actions if you're 
                  facing such charges.
                </p>
              </div>
            </div>

{/* Steps Section */}
<div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Immediate Steps if Charged with a Traffic Violation
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consult an Experienced Traffic Attorney</h3>
                    <p className="text-gray-700">Legal representation can help navigate the complexities of traffic laws and protect your rights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document the Incident</h3>
                    <p className="text-gray-700">Record details of the event, including date, time, location, and any witness information.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Understand Your Rights</h3>
                    <p className="text-gray-700">Different violations carry varying penalties; knowing the specifics can aid in your defense.</p>
                  </div>
                </div>
              </div>
            </div>

{/* Recent Legislative Updates Section */}
<div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Legislative Updates in Missouri</h2>
              <div className="space-y-6">
                {legislativeUpdates.map((update, index) => (
                  <div key={index} className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                    <p className="text-gray-700">{update.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Effective: {update.effectiveDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* State Classifications Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {stateLaws.map((state) => (
                  <div key={state.state} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {state.state} Traffic Violations and Penalties
                    </h2>
                    
                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Speeding Penalties</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {state.speedingPenalties.map((penalty, index) => (
                          <li key={index}>
                            <span className="font-semibold">{penalty.range}:</span> {penalty.fine}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {state.otherViolations.map((violation, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{violation.name}</h3>
                        <p className="text-gray-800 mb-2">{violation.description}</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {violation.penalties.map((penalty, pIndex) => (
                            <li key={pIndex}>{penalty}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

// Time to bake in some cosmic data at build time ✨
export const getStaticProps: GetStaticProps<TrafficPageProps> = async () => {
  const stateLaws: StateTrafficLaws[] = [
    {
      state: "Kansas",
      speedingPenalties: [
        { range: "1 to 10 mph over the limit", fine: "$45 fine" },
        { range: "11 to 20 mph over the limit", fine: "$45 plus $6 for each mph over 10 mph" },
        { range: "21 to 30 mph over the limit", fine: "$105 plus $9 for each mph over 20 mph" },
        { range: "31 mph or more over the limit", fine: "$195 plus $15 for each mph over 30 mph" }
      ],
      otherViolations: [
        {
          name: "Reckless Driving",
          description: "Considered a misdemeanor with potential penalties including fines and imprisonment.",
          penalties: [
            "Potential jail time",
            "Substantial fines",
            "Points on driving record"
          ]
        }
      ]
    },
    {
      state: "Missouri",
      speedingPenalties: [
        { range: "1 to 5 mph over the limit", fine: "$85 total fine" },
        { range: "6 to 10 mph over the limit", fine: "$99 total fine" },
        { range: "11 to 15 mph over the limit", fine: "$124 total fine" },
        { range: "16 to 19 mph over the limit", fine: "$149 total fine" },
        { range: "20 to 25 mph over the limit", fine: "$224 total fine" }
      ],
      otherViolations: [
        {
          name: "Reckless Driving",
          description: "Classified as a misdemeanor, carrying potential fines and jail time.",
          penalties: [
            "Possible imprisonment",
            "Significant fines",
            "License points accumulation"
          ]
        }
      ]
    }
  ];

  const legislativeUpdates = [
    {
      title: "Valentine's Law",
      description: "Targets drivers who flee during traffic stops, imposing fines of at least $10,000 and up to 30 years in prison.",
      effectiveDate: "August 28, 2024"
    },
    {
      title: "Siddens Bening Hands-Free Law",
      description: "Prohibits holding or touching a phone while driving. Fines start at $150 for the first offense, escalating with subsequent violations.",
      effectiveDate: "January 1, 2025"
    }
  ];

  return {
    props: {
      stateLaws,
      legislativeUpdates,
    },
    // Keep our content fresh with weekly revalidation
    revalidate: 604800,
  };
};

export default TrafficPage;