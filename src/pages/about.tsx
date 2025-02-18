import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';

// Define our cosmic data structures - like the constellations of your dad's expertise
interface PracticeArea {
  title: string;
  items: string[];
}

interface AboutPageProps {
  practiceAreas: PracticeArea[];
  experienceYears: number;
  barAdmissions: {
    state: string;
    year: number;
  }[];
}

const AboutPage: NextPage<AboutPageProps> = ({ 
  practiceAreas = [], 
  experienceYears = 40, 
  barAdmissions = [] 
}) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">About Edward L. Bigus</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Main Content */}
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience & Education</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Ed is licensed to practice law in both Kansas and Missouri, bringing over {experienceYears} years 
                  of experience in advocating for his clients. He understands the balance between strategic 
                  compromise and fighting for your rights. A Kansas native, Ed earned his B.S. in Business 
                  and J.D. from the University of Kansas. 
                  {barAdmissions.map(admission => (
                    ` He was admitted to the ${admission.state} Bar in ${admission.year}.`
                  ))}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Areas of Practice</h2>
                <hr className="border-t-2 border-gray-300 mb-8" />
                
                <div className="grid grid-cols-2 gap-16">
                  {practiceAreas.map((area, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-6">{area.title}</h3>
                      <ul className="space-y-4">
                        {area.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Contact */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <Image
                  src="/Ed.png"
                  alt="Edward L. Bigus"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-3 text-gray-700">
                  <p className="font-medium">110 S. Cherry Suite 203</p>
                  <p className="font-medium">Olathe, KS 66061</p>
                  <a href="mailto:elbiguspa@gmail.com" 
                     className="block text-blue-600 hover:text-blue-800 font-medium">
                    elbiguspa@gmail.com
                  </a>
                  <p className="font-medium">Office: 1-913-888-4520</p>
                  <p className="font-medium">Cell: 1-913-221-4520</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async (): Promise<{ 
  props: AboutPageProps; 
  revalidate: number 
}> => {
  // The sacred scrolls of legal expertise - each practice area a constellation in your dad's universe
  const practiceAreas: PracticeArea[] = [
    {
      title: 'Criminal Defense',
      items: [
        'Felonies',
        'Misdemeanors',
        'Traffic',
        'DUI',
        'Drug Charges',
        'Juvenile',
        'Abuse',
        'Appeals'
      ]
    },
    {
      title: 'Domestic Law',
      items: [
        'Divorce',
        'Paternity',
        'Child Custody',
        'Child Support',
        'Child in Need of Care',
        'Grandparent\'s Rights',
        'Adoption'
      ]
    },
    {
      title: 'Kansas State Certified Mediation',
      items: [
        'Core',
        'Domestic'
      ]
    },
    {
      title: 'Collections',
      items: [
        'Collections Law'
      ]
    }
  ];

  const barAdmissions = [
    { state: 'Kansas', year: 1984 },
    { state: 'Missouri', year: 1991 }
  ];

  return {
    props: {
      practiceAreas,
      experienceYears: 40,
      barAdmissions,
    },
    // Keep our cosmic credentials fresh like morning coffee
    revalidate: 604800,
  };
};

export default AboutPage;