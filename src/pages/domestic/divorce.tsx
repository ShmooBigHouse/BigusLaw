import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Let's map out the journey with these cosmic interfaces
interface DivorceProcess {
  stage: string;
  description: string;
  requirements: string[];
  considerations: string[];
}

interface StateInfo {
  state: string;
  description: string;
  residency_requirements: {
    duration: string;
    exceptions: string[];
  };
  grounds: {
    no_fault: string[];
    fault_based?: string[];
  };
  processes: DivorceProcess[];
  property_division: {
    approach: string;
    factors: string[];
  };
}

interface DivorcePageProps {
  stateInfo: StateInfo[];
}

const DivorcePage: NextPage<DivorcePageProps> = ({ stateInfo }) => {
  return (
    <>
      <Head>
        <title>Divorce Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert divorce representation in Kansas & Missouri. Navigate your divorce with experienced legal guidance. Free consultation with Edward L. Bigus."
        />
        <meta property="og:title" content="Divorce Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Divorce</h1>
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
                  Divorce represents a significant life transition that requires careful navigation of legal, emotional, 
                  and practical considerations. Understanding your rights and options is crucial for making informed 
                  decisions that will affect your future.
                </p>
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Initial Steps in the Divorce Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gather Important Documents</h3>
                    <p className="text-gray-700">Collect financial records, property documents, and other important paperwork before beginning the process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Understand Your Rights</h3>
                    <p className="text-gray-700">Consult with an attorney to understand your legal rights and options before making any decisions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consider Children's Needs</h3>
                    <p className="text-gray-700">If children are involved, prioritize their emotional well-being and stability throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* State Info Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {stateInfo.map((info) => (
                  <div key={info.state} className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {info.state} Divorce Laws
                    </h2>
                    
                    <p className="text-gray-800">{info.description}</p>

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Residency Requirements</h3>
                      <p className="text-gray-800 mb-3">{info.residency_requirements.duration}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.residency_requirements.exceptions.map((exception, idx) => (
                          <li key={idx}>{exception}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Grounds for Divorce</h3>
                      <h4 className="font-semibold mb-2">No-Fault Grounds:</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        {info.grounds.no_fault.map((ground, idx) => (
                          <li key={idx}>{ground}</li>
                        ))}
                      </ul>
                      {info.grounds.fault_based && (
                        <>
                          <h4 className="font-semibold mb-2">Fault-Based Grounds:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {info.grounds.fault_based.map((ground, idx) => (
                              <li key={idx}>{ground}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {info.processes.map((process, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{process.stage}</h3>
                        <p className="text-gray-800 mb-3">{process.description}</p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Requirements:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {process.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Key Considerations:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {process.considerations.map((cons, idx) => (
                                <li key={idx}>{cons}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Property Division</h3>
                      <p className="text-gray-800 mb-3">{info.property_division.approach}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.property_division.factors.map((factor, idx) => (
                          <li key={idx}>{factor}</li>
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
                  Contact Us About Your Divorce
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

export const getStaticProps: GetStaticProps<DivorcePageProps> = async () => {
  // Our cosmic state info - guiding lights through the transition
  const stateInfo: StateInfo[] = [
    {
      state: "Kansas",
      description: "Kansas divorce law emphasizes equitable resolution while protecting the interests of all parties involved, including children.",
      residency_requirements: {
        duration: "At least one spouse must have been a resident of Kansas for 60 days before filing",
        exceptions: [
          "Military personnel stationed in Kansas may qualify",
          "Temporary absence doesn't affect residency",
          "Special provisions for active duty military"
        ]
      },
      grounds: {
        no_fault: [
          "Incompatibility",
          "Failure of marriage relationship",
          "Irreconcilable differences"
        ]
      },
      processes: [
        {
          stage: "Filing",
          description: "Initial petition and temporary orders",
          requirements: [
            "Complete petition for divorce",
            "File in appropriate county court",
            "Pay filing fees or request waiver",
            "Serve spouse with papers"
          ],
          considerations: [
            "Temporary custody arrangements",
            "Interim support needs",
            "Immediate property concerns",
            "Protection orders if needed"
          ]
        },
        {
          stage: "Discovery",
          description: "Exchange of financial information and other relevant documents",
          requirements: [
            "Complete financial affidavit",
            "Disclose all assets and debts",
            "Exchange tax returns",
            "Provide income documentation"
          ],
          considerations: [
            "Hidden assets",
            "Business valuations",
            "Retirement accounts",
            "Joint debts"
          ]
        }
      ],
      property_division: {
        approach: "Kansas follows equitable distribution principles",
        factors: [
          "Length of marriage",
          "Contribution to marital estate",
          "Economic circumstances",
          "Tax consequences",
          "Retirement benefits"
        ]
      }
    },
    {
      state: "Missouri",
      description: "Missouri provides a framework for divorce that focuses on fair resolution while considering the unique circumstances of each case.",
      residency_requirements: {
        duration: "At least one spouse must have been a resident of Missouri for 90 days before filing",
        exceptions: [
          "Military exceptions may apply",
          "Non-resident spouse may file if other spouse is resident",
          "Special jurisdiction rules for child custody"
        ]
      },
      grounds: {
        no_fault: [
          "Irretrievable breakdown of marriage",
          "No reasonable likelihood of preservation"
        ],
        fault_based: [
          "Adultery",
          "Abandonment",
          "Cruel treatment"
        ]
      },
      processes: [
        {
          stage: "Petition",
          description: "Filing and initial court procedures",
          requirements: [
            "File petition in proper jurisdiction",
            "Include required information",
            "Pay filing fees",
            "Serve other party"
          ],
          considerations: [
            "Jurisdiction issues",
            "Temporary relief needs",
            "Protection orders",
            "Child custody concerns"
          ]
        },
        {
          stage: "Financial Disclosure",
          description: "Mandatory exchange of financial information",
          requirements: [
            "Statement of property",
            "Income and expense statement",
            "Asset disclosure",
            "Debt disclosure"
          ],
          considerations: [
            "Complex assets",
            "Business interests",
            "Pension rights",
            "Marital debt allocation"
          ]
        }
      ],
      property_division: {
        approach: "Missouri uses fair and equitable distribution",
        factors: [
          "Economic circumstances",
          "Contribution to acquisition",
          "Value of non-marital property",
          "Conduct during marriage",
          "Custodial arrangements"
        ]
      }
    }
  ];

  return {
    props: {
      stateInfo,
    },
    // Keep our guidance fresh and relevant
    revalidate: 604800,
  };
};

export default DivorcePage;