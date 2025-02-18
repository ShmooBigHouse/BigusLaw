import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Define our cosmic data structures
interface StateInfo {
  state: string;
  description: string;
  penalties: {
    level: string;
    details: {
      jail: string;
      fine: string;
      license: string;
      additional?: string[];
    };
  }[];
  additional_consequences: string[];
}

interface DUIPageProps {
  stateInfo: StateInfo[];
}

const DUIPage: NextPage<DUIPageProps> = ({ stateInfo }) => {
  return (
    <>
      <Head>
        <title>DUI/DWI Defense Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert DUI/DWI defense in Kansas & Missouri. Protect your rights and driving privileges with over 30 years of legal experience. Free consultation with Edward L. Bigus."
        />
        <meta property="og:title" content="DUI/DWI Defense Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">DUI/DWI Defense</h1>
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
                  Understanding the potential consequences of a DUI/DWI charge in Kansas or Missouri is crucial. 
                  Below is an overview of the laws, penalties, and recommended actions if you're facing such charges 
                  in these states.
                </p>
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Immediate Steps if Charged with DUI/DWI
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact an Experienced DUI Attorney</h3>
                    <p className="text-gray-700">Legal representation is vital to navigate the complexities of DUI/DWI laws and to protect your rights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document Everything</h3>
                    <p className="text-gray-700">Record all details about the stop, arrest, and any tests administered while they're fresh in your memory.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Act Quickly</h3>
                    <p className="text-gray-700">Time is critical - you have limited time to request an administrative hearing to protect your driving privileges.</p>
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
                      {info.state} {info.state === 'Kansas' ? 'DUI' : 'DWI'} Laws and Penalties
                    </h2>
                    
                    <p className="text-gray-800">{info.description}</p>

                    {info.penalties.map((level, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{level.level}</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><span className="font-semibold">Jail Time:</span> {level.details.jail}</li>
                          <li><span className="font-semibold">Fines:</span> {level.details.fine}</li>
                          <li><span className="font-semibold">License Suspension:</span> {level.details.license}</li>
                          {level.details.additional?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Additional Consequences</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.additional_consequences.map((consequence, index) => (
                          <li key={index}>{consequence}</li>
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

export const getStaticProps: GetStaticProps<DUIPageProps> = async () => {
  // Our cosmic state info that will be baked into the HTML at build time
  const stateInfo: StateInfo[] = [
    {
      state: "Kansas",
      description: "Kansas treats DUI offenses seriously, with penalties increasing for subsequent convictions. The state uses both criminal and administrative penalties.",
      penalties: [
        {
          level: "First Offense",
          details: {
            jail: "48 hours to 6 months",
            fine: "$750 to $1,000 plus court costs",
            license: "30-day suspension followed by 180-day restricted license",
            additional: [
              "Mandatory alcohol evaluation",
              "Required completion of education program",
              "Possible ignition interlock device"
            ]
          }
        },
        {
          level: "Second Offense",
          details: {
            jail: "90 days to 1 year",
            fine: "$1,250 to $1,750 plus court costs",
            license: "1-year suspension followed by restricted license",
            additional: [
              "Mandatory treatment program",
              "Required ignition interlock device"
            ]
          }
        }
      ],
      additional_consequences: [
        "Potential vehicle impoundment",
        "Insurance rate increases",
        "Employment implications",
        "Professional license impacts"
      ]
    },
    {
      state: "Missouri",
      description: "Missouri's DWI laws involve both criminal penalties and administrative consequences, with enhanced penalties for high BAC levels and repeat offenses.",
      penalties: [
        {
          level: "First Offense",
          details: {
            jail: "Up to 6 months",
            fine: "Up to $1,000 plus court costs",
            license: "90-day suspension",
            additional: [
              "Possible alternative sentencing program",
              "Substance abuse traffic offender program"
            ]
          }
        },
        {
          level: "Second Offense",
          details: {
            jail: "Up to 1 year (minimum 10 days)",
            fine: "Up to $2,000 plus court costs",
            license: "1-year revocation",
            additional: [
              "Mandatory ignition interlock device",
              "Required completion of treatment program"
            ]
          }
        }
      ],
      additional_consequences: [
        "Criminal record implications",
        "Higher insurance premiums",
        "Potential career impacts",
        "Travel restrictions"
      ]
    }
  ];

  return {
    props: {
      stateInfo,
    },
    // Revalidate weekly to keep that content fresh
    revalidate: 604800,
  };
};

export default DUIPage;