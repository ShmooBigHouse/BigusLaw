import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Let's map out our healing pathways with these cosmic interfaces
interface AbuseCategory {
  type: string;
  definition: string;
  key_elements: string[];
  defense_considerations: string[];
}

interface StateInfo {
  state: string;
  description: string;
  categories: AbuseCategory[];
  legal_protections: string[];
  support_resources: {
    type: string;
    resources: string[];
  }[];
}

interface AbusePageProps {
  stateInfo: StateInfo[];
}

const AbusePage: NextPage<AbusePageProps> = ({ stateInfo }) => {
  return (
    <>
      <Head>
        <title>Abuse Defense Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert abuse defense and victim advocacy in Kansas & Missouri. Protecting rights with sensitivity and experience. Free consultation with Edward L. Bigus."
        />
        <meta property="og:title" content="Abuse Defense Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Abuse Defense & Victim Advocacy</h1>
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
                  Abuse cases require a delicate balance of legal expertise and compassionate advocacy. Whether you're 
                  seeking protection or defending against allegations, understanding your rights and the available legal 
                  options is crucial for moving forward.
                </p>
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Immediate Steps to Take
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ensure Safety First</h3>
                    <p className="text-gray-700">If you're in immediate danger, contact emergency services (911). Your safety is the primary concern.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document Everything</h3>
                    <p className="text-gray-700">Keep detailed records of incidents, including dates, times, locations, and any witnesses present.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Seek Legal Counsel</h3>
                    <p className="text-gray-700">Contact an experienced attorney who can guide you through the legal process and protect your rights.</p>
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
                      {info.state} Abuse Laws and Protections
                    </h2>
                    
                    <p className="text-gray-800">{info.description}</p>

                    {info.categories.map((category, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{category.type}</h3>
                        <p className="text-gray-800 mb-3">{category.definition}</p>
                        
                        <h4 className="font-semibold mb-2">Key Elements:</h4>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                          {category.key_elements.map((element, idx) => (
                            <li key={idx}>{element}</li>
                          ))}
                        </ul>

                        <h4 className="font-semibold mb-2">Defense Considerations:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {category.defense_considerations.map((consideration, idx) => (
                            <li key={idx}>{consideration}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Legal Protections</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.legal_protections.map((protection, index) => (
                          <li key={index}>{protection}</li>
                        ))}
                      </ul>
                    </div>

                    {info.support_resources.map((resource, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{resource.type}</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {resource.resources.map((item, idx) => (
                            <li key={idx}>{item}</li>
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

export const getStaticProps: GetStaticProps<AbusePageProps> = async () => {
  // Our cosmic state info - a beacon of light in dark times
  const stateInfo: StateInfo[] = [
    {
      state: "Kansas",
      description: "Kansas law provides comprehensive protection against various forms of abuse, with specific provisions for domestic violence, child abuse, and elder abuse.",
      categories: [
        {
          type: "Domestic Violence",
          definition: "Acts of abuse between intimate partners or family members",
          key_elements: [
            "Physical or threatened harm",
            "Pattern of coercive control",
            "Impact on household members",
            "History of incidents"
          ],
          defense_considerations: [
            "Self-defense claims",
            "Lack of intent",
            "Mistaken identity",
            "False allegations"
          ]
        },
        {
          type: "Child Abuse",
          definition: "Actions or omissions resulting in harm to a minor",
          key_elements: [
            "Physical injury or neglect",
            "Emotional abuse",
            "Sexual abuse",
            "Educational neglect"
          ],
          defense_considerations: [
            "Reasonable discipline",
            "Accidental injury",
            "Cultural practices",
            "Lack of knowledge"
          ]
        }
      ],
      legal_protections: [
        "Protection from Abuse Orders (PFA)",
        "Emergency protective custody",
        "No-contact orders",
        "Safe housing provisions"
      ],
      support_resources: [
        {
          type: "Crisis Services",
          resources: [
            "24/7 crisis hotlines",
            "Emergency shelter services",
            "Legal advocacy programs",
            "Counseling services"
          ]
        },
        {
          type: "Long-term Support",
          resources: [
            "Housing assistance",
            "Job training programs",
            "Support groups",
            "Child advocacy centers"
          ]
        }
      ]
    },
    {
      state: "Missouri",
      description: "Missouri offers robust legal protections and support services for abuse victims while ensuring due process rights for the accused.",
      categories: [
        {
          type: "Domestic Abuse",
          definition: "Abuse between household members or intimate partners",
          key_elements: [
            "Physical violence",
            "Stalking behaviors",
            "Harassment",
            "Financial abuse"
          ],
          defense_considerations: [
            "Mutual combat",
            "Alibi defense",
            "Mental state",
            "Witness credibility"
          ]
        },
        {
          type: "Child Abuse/Neglect",
          definition: "Actions causing harm or risk to a child's welfare",
          key_elements: [
            "Physical abuse",
            "Emotional maltreatment",
            "Sexual abuse",
            "Medical neglect"
          ],
          defense_considerations: [
            "Parental rights",
            "Religious beliefs",
            "Financial hardship",
            "Cultural differences"
          ]
        }
      ],
      legal_protections: [
        "Orders of Protection",
        "Child protective orders",
        "Victim privacy laws",
        "Housing protection"
      ],
      support_resources: [
        {
          type: "Immediate Assistance",
          resources: [
            "Safe shelter networks",
            "Legal aid services",
            "Medical advocacy",
            "Crisis intervention"
          ]
        },
        {
          type: "Recovery Support",
          resources: [
            "Trauma counseling",
            "Financial assistance",
            "Safety planning",
            "Support groups"
          ]
        }
      ]
    }
  ];

  return {
    props: {
      stateInfo,
    },
    // Keep our protective shield updated weekly
    revalidate: 604800,
  };
};

export default AbusePage;