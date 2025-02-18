import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Map out our cosmic data structures - like constellations guiding young souls
interface JuvenileProcess {
  stage: string;
  description: string;
  key_points: string[];
}

interface StateInfo {
  state: string;
  description: string;
  age_jurisdiction: {
    standard: string;
    exceptions: string[];
  };
  processes: JuvenileProcess[];
  rehabilitation_options: string[];
}

interface JuvenilePageProps {
  stateInfo: StateInfo[];
}

const JuvenilePage: NextPage<JuvenilePageProps> = ({ stateInfo }) => {
  return (
    <>
      <Head>
        <title>Juvenile Defense Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Expert juvenile defense in Kansas & Missouri. Protecting young futures with over 30 years of experience. Free consultation with Edward L. Bigus."
        />
        <meta property="og:title" content="Juvenile Defense Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        <div className="w-full bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Juvenile Defense</h1>
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
                  The juvenile justice system in both Kansas and Missouri focuses on rehabilitation rather than punishment, 
                  recognizing that young people have unique needs and greater potential for positive change. Understanding 
                  how to navigate this system is crucial for protecting your child's future.
                </p>
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Immediate Steps if Your Child Faces Charges
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Seek Legal Representation Immediately</h3>
                    <p className="text-gray-700">Early intervention by an experienced juvenile defense attorney can significantly impact the case's outcome.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Maintain Open Communication</h3>
                    <p className="text-gray-700">Stay involved in your child's case while ensuring they understand their rights and the importance of being truthful with their attorney.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Document Everything</h3>
                    <p className="text-gray-700">Keep detailed records of all interactions with law enforcement and the court system.</p>
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
                      {info.state} Juvenile Justice System
                    </h2>
                    
                    <p className="text-gray-800">{info.description}</p>

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Age Jurisdiction</h3>
                      <p className="text-gray-800 mb-3">{info.age_jurisdiction.standard}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.age_jurisdiction.exceptions.map((exception, idx) => (
                          <li key={idx}>{exception}</li>
                        ))}
                      </ul>
                    </div>

                    {info.processes.map((process, index) => (
                      <div key={index} className="pl-4 border-l-4 border-blue-600">
                        <h3 className="text-xl font-semibold mb-3">{process.stage}</h3>
                        <p className="text-gray-800 mb-3">{process.description}</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {process.key_points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold mb-3">Rehabilitation Options</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {info.rehabilitation_options.map((option, index) => (
                          <li key={index}>{option}</li>
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
                  Contact Us About Your Child's Case
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

export const getStaticProps: GetStaticProps<JuvenilePageProps> = async () => {
  // Our cosmic state info - the guiding light for young souls seeking redemption
  const stateInfo: StateInfo[] = [
    {
      state: "Kansas",
      description: "Kansas juvenile justice system emphasizes rehabilitation and prevention, offering various programs and interventions designed to help young people avoid further involvement with the law.",
      age_jurisdiction: {
        standard: "Generally handles cases involving youth under 18 years of age",
        exceptions: [
          "Cases can be transferred to adult court for serious offenses",
          "Extended jurisdiction possible until age 21 for rehabilitation",
          "Special provisions for youth 10 and under"
        ]
      },
      processes: [
        {
          stage: "Initial Assessment",
          description: "Early evaluation to determine appropriate intervention level",
          key_points: [
            "Risk and needs assessment",
            "Family involvement encouraged",
            "Immediate intervention programs available",
            "Diversion options considered first"
          ]
        },
        {
          stage: "Court Proceedings",
          description: "Formal judicial process when necessary",
          key_points: [
            "Less formal than adult court",
            "Focus on rehabilitation",
            "Parent/guardian involvement required",
            "Educational needs considered"
          ]
        }
      ],
      rehabilitation_options: [
        "Youth Court programs",
        "Community-based interventions",
        "Educational support services",
        "Behavioral health treatment",
        "Family engagement programs"
      ]
    },
    {
      state: "Missouri",
      description: "Missouri's juvenile justice system is nationally recognized for its rehabilitative approach, utilizing small group homes and treatment centers instead of large institutions.",
      age_jurisdiction: {
        standard: "Typically handles cases involving youth under 17 years of age",
        exceptions: [
          "Certain serious offenses may be certified to adult court",
          "Jurisdiction can extend to age 21 for rehabilitation",
          "Special considerations for children under 12"
        ]
      },
      processes: [
        {
          stage: "Intake and Assessment",
          description: "Comprehensive evaluation of youth's needs and circumstances",
          key_points: [
            "Informal adjustment options",
            "Family support services",
            "Risk assessment protocols",
            "Diversion program eligibility"
          ]
        },
        {
          stage: "Adjudication and Disposition",
          description: "Court process focused on rehabilitation",
          key_points: [
            "Treatment-oriented approach",
            "Educational continuity emphasis",
            "Family preservation focus",
            "Individualized case planning"
          ]
        }
      ],
      rehabilitation_options: [
        "Missouri Youth Services Institute programs",
        "Day treatment centers",
        "Alternative education programs",
        "Mental health services",
        "Vocational training opportunities"
      ]
    }
  ];

  return {
    props: {
      stateInfo,
    },
    // Keep our guiding stars aligned with weekly revalidation
    revalidate: 604800,
  };
};

export default JuvenilePage;