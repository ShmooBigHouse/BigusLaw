import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// Our cosmic family law type definitions - like the DNA of our digital household
interface DomesticService {
  title: string;
  path: string;
  desc: string;
}

interface DomesticPageProps {
  services: DomesticService[];
}

const DomesticPage: NextPage<DomesticPageProps> = ({ services = [] }) => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - The gateway to family harmony */}
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Domestic Law</h1>
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
          {/* Family Path Section - Where wisdom meets compassion */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Finding the Best Path Forward for Your Family
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6">
                  Family legal matters can be complicated and emotional, especially when children are involved. 
                  Our Overland Park family law attorneys are committed to resolving disputes in a way that protects 
                  your rights while prioritizing the well-being of your children.
                </p>
                <div className="space-y-2 md:space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Our Approach:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-800">Negotiate fair settlements through mediation or collaborative law</li>
                    <li className="text-gray-800">Work toward balanced co-parenting arrangements</li>
                    <li className="text-gray-800">Advocate for agreements that prioritize your children's best interests</li>
                    <li className="text-gray-800">Explore alternative dispute resolution options to avoid unnecessary court battles</li>
                    <li className="text-gray-800">Ensure that legal agreements provide stability and security for your family</li>
                  </ul>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  While some cases do require court intervention, we will do everything within our power to achieve 
                  a resolution that benefits you and your children. During your initial consultation, we'll discuss 
                  your options and determine the best approach for your family's future.
                </p>
              </div>
              <div className="w-full md:w-1/3 max-w-[300px]">
                <div className="relative aspect-square">
                  <Image 
                    src="/family.png"
                    alt="Family Law"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid - A mosaic of family support */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
              Our Domestic Law Services
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service) => (
                <div 
                  key={service.path}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                    <Link 
                      href={`/domestic/${service.path}`}
                      className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - The bridge to resolution */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mt-8 md:mt-12 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
              Contact Us About Your Case
            </h2>
            <hr className="border-t-2 border-gray-300 mb-6 md:mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<DomesticPageProps> = async (): Promise<{ 
  props: DomesticPageProps; 
  revalidate: number 
}> => {
  // The sacred scrolls of family law services - each one a path to harmony
  const services: DomesticService[] = [
    {
      title: 'Divorce',
      path: 'divorce',
      desc: 'Guiding you through the divorce process with compassion and dedication to protect your interests.'
    },
    {
      title: 'Paternity',
      path: 'paternity',
      desc: 'Establishing legal rights and responsibilities for parents and children through paternity actions.'
    },
    {
      title: 'Child Custody',
      path: 'child-custody',
      desc: 'Creating custody arrangements that serve the best interests of your children while protecting parental rights.'
    },
    {
      title: 'Child Support',
      path: 'child-support',
      desc: "Ensuring fair child support arrangements that provide for your children's needs."
    },
    {
      title: 'Child in Need of Care',
      path: 'child-in-need-of-care',
      desc: 'Protecting vulnerable children and working with families to create safe, stable environments.'
    },
    {
      title: "Grandparent's Rights",
      path: 'grandparents-rights',
      desc: 'Advocating for grandparents seeking to maintain meaningful relationships with their grandchildren.'
    },
    {
      title: 'Adoption',
      path: 'adoption',
      desc: 'Helping families grow through the adoption process, ensuring legal security for all parties.'
    }
  ];

  return {
    props: {
      services,
    },
    // Keep our family bonds strong with weekly refresh cycles
    revalidate: 604800,
  };
};

export default DomesticPage;