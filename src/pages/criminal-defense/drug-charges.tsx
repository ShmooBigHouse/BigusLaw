import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Let's map out our cosmic data structures
interface DrugOffense {
  category: string;
  description: string;
  penalties: {
    classification: string;
    consequences: string[];
  };
}

interface StateInfo {
  state: string;
  description: string;
  offenses: DrugOffense[];
  alternatives: string[];
}

interface DrugChargesPageProps {
  stateInfo: StateInfo[];
}

const DrugChargesPage: NextPage<DrugChargesPageProps> = ({ stateInfo }) => {
  return (
    <>
      <Head>
        <title>Drug Charges Defense Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert drug charges defense in Kansas & Missouri. Protect your rights with over 30 years of criminal defense experience. Free consultation with Edward L. Bigus."
        />
        <meta property="og:title" content="Drug Charges Defense Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Drug Charges Defense</h1>
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
                  Drug charges in Kansas and Missouri can carry serious consequences, affecting not only your freedom 
                  but also your future opportunities. Understanding your rights and the potential defenses available 
                  is crucial when facing these charges.
                </p>
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Immediate Steps if Charged with a Drug Offense
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exercise Your Right to Remain Silent</h3>
                    <p className="text-gray-700">Anything you say can be used against you. Politely decline to answer questions until you have legal representation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact an Experienced Defense Attorney</h3>
                    <p className="text-gray-700">Early legal representation can make a significant difference in the outcome of your case.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document Everything</h3>
                    <p className="text-gray-700">Record all details about the arrest and any searches while your memory is fresh.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* State Classifications Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {stateInfo.map((info) => (
                  <div key={info.state} className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {info.state} Drug Laws and Penalties
                    </h2>
                    
                    <p className="text-gray-800">{info.description}</p>

                    {info.offenses.map((offense, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{offense.category}</h3>
                        <p className="text-gray-800 mb-3">{offense.description}</p>
                        <div className="mb-3">
                          <span className="font-semibold">Classification: </span>
                          <span>{offense.penalties.classification}</span>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                          {offense.penalties.consequences.map((consequence, idx) => (
                            <li key={idx}>{consequence}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Alternative Sentencing Options</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.alternatives.map((alternative, index) => (
                          <li key={index}>{alternative}</li>
                        ))}
                      </ul>
                    </div>
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

export const getStaticProps: GetStaticProps<DrugChargesPageProps> = async () => {
  // Our cosmic state info that will be baked into the HTML at build time
  const stateInfo: StateInfo[] = [
    {
      state: "Kansas",
      description: "Kansas drug laws follow a graduated penalty system based on the type and quantity of controlled substance involved, with additional penalties for distribution near schools or to minors.",
      offenses: [
        {
          category: "Possession",
          description: "Simple possession of controlled substances for personal use.",
          penalties: {
            classification: "Severity level 5 felony",
            consequences: [
              "10 to 42 months in prison",
              "Fines up to $100,000",
              "Mandatory drug evaluation",
              "Possible probation for first-time offenders"
            ]
          }
        },
        {
          category: "Distribution/Intent to Distribute",
          description: "Sale or possession with intent to distribute controlled substances.",
          penalties: {
            classification: "Severity level 2-4 felony",
            consequences: [
              "46 to 144 months in prison",
              "Fines up to $300,000",
              "Enhanced penalties near schools",
              "Asset forfeiture"
            ]
          }
        }
      ],
      alternatives: [
        "Drug treatment courts",
        "SB 123 treatment program for eligible offenders",
        "Probation with mandatory treatment",
        "Diversion programs for first-time offenders"
      ]
    },
    {
      state: "Missouri",
      description: "Missouri's drug laws distinguish between possession and trafficking, with separate penalty ranges for each controlled substance class.",
      offenses: [
        {
          category: "Possession",
          description: "Possession of controlled substances without valid prescription.",
          penalties: {
            classification: "Class D felony",
            consequences: [
              "Up to 7 years in prison",
              "Fines up to $10,000",
              "Mandatory substance abuse assessment",
              "Possible probation for first offense"
            ]
          }
        },
        {
          category: "Distribution/Trafficking",
          description: "Sale, manufacture, or trafficking of controlled substances.",
          penalties: {
            classification: "Class A-C felony",
            consequences: [
              "10 to 30 years in prison",
              "Fines up to $500,000",
              "No probation or parole in some cases",
              "Enhanced penalties for repeat offenders"
            ]
          }
        }
      ],
      alternatives: [
        "Drug court programs",
        "Treatment court options",
        "Veterans court programs",
        "Post-conviction treatment programs"
      ]
    }
  ];

  return {
    props: {
      stateInfo,
    },
    // Keep our content fresh with weekly revalidation
    revalidate: 604800,
  };
};

export default DrugChargesPage;