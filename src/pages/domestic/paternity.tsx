import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Let's map out the cosmic DNA of our data structure 🧬
interface EstablishmentMethod {
  method: string;
  description: string;
  requirements: string[];
  timeline: string;
  considerations: string[];
}

interface StateInfo {
  state: string;
  description: string;
  legal_presumptions: {
    circumstance: string;
    details: string[];
  }[];
  establishment_methods: EstablishmentMethod[];
  rights_and_obligations: {
    rights: string[];
    obligations: string[];
  };
}

interface PaternityPageProps {
  stateInfo: StateInfo[];
}

const PaternityPage: NextPage<PaternityPageProps> = ({ stateInfo }) => {
  return (
    <>
      <Head>
        <title>Paternity Law Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert paternity law representation in Kansas & Missouri. Establishing legal rights and responsibilities with experienced guidance. Free consultation with Edward L. Bigus."
        />
        <meta property="og:title" content="Paternity Law Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Paternity</h1>
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
            {/* Introduction Section - The Gateway to Truth */}
            <div className="mb-8">
              <div className="bg-white shadow-sm p-8 border-b border-gray-600">
                <p className="text-gray-800 text-lg leading-relaxed">
                  Establishing paternity is more than a legal formality - it's about creating and protecting the bonds 
                  between parents and children. Whether you're seeking to establish or challenge paternity, understanding 
                  your rights and responsibilities is crucial for making informed decisions.
                </p>
              </div>
            </div>

            {/* Steps Section - The Path to Clarity */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Initial Steps in Paternity Matters
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Understand Your Position</h3>
                    <p className="text-gray-700">Determine whether you're establishing, challenging, or defending paternity claims.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gather Documentation</h3>
                    <p className="text-gray-700">Collect relevant records including birth certificates, correspondence, and any existing agreements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consider the Child's Interests</h3>
                    <p className="text-gray-700">Remember that paternity decisions significantly impact the child's future and well-being.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* State Info Section - The Legal Landscape */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {stateInfo.map((info) => (
                  <div key={info.state} className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {info.state} Paternity Laws
                    </h2>
                    
                    <p className="text-gray-800">{info.description}</p>

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Legal Presumptions of Paternity</h3>
                      {info.legal_presumptions.map((presumption, index) => (
                        <div key={index} className="mb-4">
                          <h4 className="font-semibold mb-2">{presumption.circumstance}</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {presumption.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {info.establishment_methods.map((method, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{method.method}</h3>
                        <p className="text-gray-800 mb-3">{method.description}</p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Requirements:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {method.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Timeline: </h4>
                            <p className="text-gray-800">{method.timeline}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Key Considerations:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {method.considerations.map((cons, idx) => (
                                <li key={idx}>{cons}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Rights and Obligations</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Parental Rights:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {info.rights_and_obligations.rights.map((right, idx) => (
                              <li key={idx}>{right}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Parental Obligations:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {info.rights_and_obligations.obligations.map((obligation, idx) => (
                              <li key={idx}>{obligation}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - The Bridge to Resolution */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white shadow-sm p-8 border-t border-gray-600">
                <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                  Contact Us About Your Paternity Case
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

export const getStaticProps: GetStaticProps<PaternityPageProps> = async () => {
  // Our cosmic state info - the blueprint of family connections
  const stateInfo: StateInfo[] = [
    {
      state: "Kansas",
      description: "Kansas law provides multiple pathways to establish paternity, ensuring both parents' rights and children's interests are protected.",
      legal_presumptions: [
        {
          circumstance: "Marriage",
          details: [
            "Child born during marriage",
            "Child born within 300 days of marriage termination",
            "Parents marry after birth and father acknowledges paternity"
          ]
        },
        {
          circumstance: "Voluntary Acknowledgment",
          details: [
            "Written acknowledgment filed with state",
            "Both parents sign under oath",
            "60-day revocation period"
          ]
        }
      ],
      establishment_methods: [
        {
          method: "Voluntary Acknowledgment of Paternity (VAP)",
          description: "A legal document signed by both parents establishing paternity",
          requirements: [
            "Both parents must sign voluntarily",
            "Proper witnessing and notarization",
            "Filing with vital statistics"
          ],
          timeline: "Can be completed at birth or any time after",
          considerations: [
            "60-day revocation period",
            "Cannot be used if mother is married to another person",
            "Becomes final after revocation period"
          ]
        },
        {
          method: "Court Order",
          description: "Legal action to establish paternity through court proceedings",
          requirements: [
            "Filing petition with court",
            "Service of process on alleged father",
            "Genetic testing if requested"
          ],
          timeline: "Can take several months to complete",
          considerations: [
            "DNA testing may be required",
            "Court can order child support",
            "Establishes all parental rights"
          ]
        }
      ],
      rights_and_obligations: {
        rights: [
          "Custody and visitation rights",
          "Access to medical records",
          "Right to participate in major decisions",
          "Inheritance rights established"
        ],
        obligations: [
          "Child support obligations",
          "Responsibility for medical care",
          "Educational support",
          "Ongoing financial responsibility"
        ]
      }
    },
    {
      state: "Missouri",
      description: "Missouri provides comprehensive legal framework for establishing paternity, protecting both parental rights and children's welfare.",
      legal_presumptions: [
        {
          circumstance: "Marriage",
          details: [
            "Child born during marriage",
            "Child born within 300 days of marriage dissolution",
            "Subsequent marriage and acknowledgment"
          ]
        },
        {
          circumstance: "Affidavit",
          details: [
            "Voluntary acknowledgment filed with state",
            "Signed by both parents",
            "15-day rescission period"
          ]
        }
      ],
      establishment_methods: [
        {
          method: "Affidavit of Paternity",
          description: "Legal document establishing paternity through voluntary acknowledgment",
          requirements: [
            "Both parents must sign",
            "Proper notarization",
            "Filing with Bureau of Vital Records"
          ],
          timeline: "Can be completed at birth or later",
          considerations: [
            "15-day rescission period",
            "Becomes permanent after rescission period",
            "Sets basis for support obligations"
          ]
        },
        {
          method: "Administrative Order",
          description: "Establishment through state agency proceedings",
          requirements: [
            "Petition filed with Family Support Division",
            "Notice to all parties",
            "Genetic testing if requested"
          ],
          timeline: "Usually 3-6 months to complete",
          considerations: [
            "Less formal than court proceedings",
            "Can include support orders",
            "Appeal rights available"
          ]
        }
      ],
      rights_and_obligations: {
        rights: [
          "Right to seek custody/visitation",
          "Access to educational records",
          "Medical decision-making rights",
          "Right to inherit/pass inheritance"
        ],
        obligations: [
          "Financial support obligations",
          "Health insurance coverage",
          "Educational expenses",
          "Ongoing care responsibilities"
        ]
      }
    }
  ];

  return {
    props: {
      stateInfo,
    },
    // Keep our family bonds strong with weekly updates
    revalidate: 604800,
  };
};

export default PaternityPage;