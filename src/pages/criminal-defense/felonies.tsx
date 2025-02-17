import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import Head from 'next/head';

// Define the shape of our cosmic data
interface FeloniesPageProps {
  kansasClassifications: {
    level: string;
    description: string;
    penalties: string[];
  }[];
  missouriClassifications: {
    level: string;
    description: string;
    penalties: string[];
  }[];
}
const FeloniesPage: NextPage<FeloniesPageProps> = ({ kansasClassifications, missouriClassifications, }) => {
  return (
    <>
      <Head>
        <title>Felony Defense Attorney | Edward L. Bigus | Kansas & Missouri</title>
        <meta 
          name="description" 
          content="Experienced felony defense in Kansas & Missouri. Protecting your rights with over 30 years of criminal defense experience. Free consultation with Edward L. Bigus."
        />
        <meta 
          name="keywords" 
          content="felony defense attorney, criminal defense lawyer, Kansas felony attorney, Missouri felony lawyer, Edward Bigus"
        />
        <meta property="og:title" content="Felony Defense Attorney | Edward L. Bigus" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col bg-white">
        {/* Hero Section */}
        <div className="w-full bg-gray-100 border-b">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Felony Defense</h1>
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
            {/* Original Intro Section with its sacred border */}
            <div className="mb-8">
              <div className="bg-white shadow-sm p-8 border-b border-gray-600">
                <p className="text-gray-800 text-lg leading-relaxed">
                  Understanding the potential consequences of a felony charge in Kansas or Missouri is crucial. 
                  Below is an overview of the classifications, possible penalties, and recommended actions if you're 
                  facing such charges in these states.
                </p>
              </div>
            </div>

            {/* Immediate Steps Section with Gavel */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Charged with a Felony</h2>
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
                <div className="w-full md:w-1/3 max-w-[300px]">
                  <div className="relative aspect-square">
                    <Image 
                      src="/Gavel.png"
                      alt="Justice Gavel"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* State Classifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Kansas */}
              <div className="bg-white shadow-sm p-4 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Felony Classifications</h2>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-2">Classification System</h3>
                    <p className="text-gray-800">
                      Kansas categorizes felonies by severity levels, ranging from 1 (most severe) to 10 (least severe).
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-2">Penalties</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Severity Level 1 Felony:</span> 10 to 42 months in prison and fines up to $100,000.</li>
                      <li><span className="font-semibold">Severity Level 5 Felony:</span> Prison sentence based on criminal history.</li>
                      <li><span className="font-semibold">Severity Level 10 Felony:</span> Presumptive probation; prison sentence possible depending on history.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Missouri */}
              <div className="bg-white shadow-sm p-4 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Felony Classifications</h2>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-2">Classes A through E</h3>
                    <p className="text-gray-800">
                      Missouri classifies felonies from Class A (most serious) to Class E (least serious).
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-2">Penalties</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Class A Felony:</span> 10 to 30 years, or life imprisonment.</li>
                      <li><span className="font-semibold">Class B Felony:</span> 5 to 15 years in prison.</li>
                      <li><span className="font-semibold">Class C Felony:</span> 3 to 10 years in prison.</li>
                      <li><span className="font-semibold">Class D Felony:</span> Up to 7 years in prison.</li>
                      <li><span className="font-semibold">Class E Felony:</span> Up to 4 years in prison.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white shadow-sm p-4 md:p-8 border-t border-gray-600">
                <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
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
const kansasClassifications = [
  {
    level: "Severity Level 1 Felony",
    description: "Most serious felony under Kansas law",
    penalties: [
      "10 to 42 months in prison",
      "Fines up to $100,000",
      "Additional consequences based on criminal history"
    ]
  },
  {
    level: "Severity Level 5 Felony",
    description: "Mid-level felony classification",
    penalties: [
      "Prison sentence based on criminal history",
      "Substantial fines",
      "Potential additional penalties"
    ]
  },
  {
    level: "Severity Level 10 Felony",
    description: "Least severe felony classification",
    penalties: [
      "Presumptive probation for first-time offenders",
      "Prison possible based on criminal history",
      "Fines and restitution"
    ]
  }
]

const missouriClassifications = [
  {
    level: "Class A Felony",
    description: "Most severe classification",
    penalties: [
      "10 to 30 years imprisonment",
      "Possible life sentence",
      "Maximum fines"
    ]
  },
  {
    level: "Class B Felony",
    description: "Second most serious classification",
    penalties: [
      "5 to 15 years imprisonment",
      "Significant fines",
      "Extended supervision"
    ]
  },
  {
    level: "Class C Felony",
    description: "Mid-level felony offense",
    penalties: [
      "3 to 10 years imprisonment",
      "Fines up to $10,000",
      "Possible probation"
    ]
  },
  {
    level: "Class D Felony",
    description: "Lower-level felony",
    penalties: [
      "Up to 7 years imprisonment",
      "Fines up to $10,000",
      "Alternative sentencing possible"
    ]
  },
  {
    level: "Class E Felony",
    description: "Least severe felony class",
    penalties: [
      "Up to 4 years imprisonment",
      "Fines up to $10,000",
      "Probation often available"
    ]
  }
];

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      kansasClassifications,
      missouriClassifications,
    },
    // Revalidate weekly - keep that content fresh like morning dew
    revalidate: 604800,
  };
};

export default FeloniesPage;