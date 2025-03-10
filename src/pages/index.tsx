import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useState } from 'react';

// Cosmic type definitions for our digital law office
interface PracticeArea {
  title: string;
  path: string;
  description: string;
}

interface HomePageProps {
  currentYear: number;
  practiceAreas: PracticeArea[];
}

const Home: NextPage<HomePageProps> = ({ currentYear = new Date().getFullYear(), practiceAreas = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:elbiguspa@gmail.com?subject=Legal Consultation Request from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section - The cosmic gateway to justice */}
      <section className="relative bg-gray-100 border-b w-full">
        <div className="w-full px-4 py-8 md:py-20 md:container md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Know Your Rights!
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-4">
                Experienced Legal Representation in Kansas & Missouri
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Over 30 Years of Advocacy & Results
              </p>
              <a
                href="mailto:elbiguspa@gmail.com"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <Mail className="mr-2" />
                Schedule a Consultation
              </a>
            </div>
            <div className="hidden md:block">
              <div className="relative w-64 h-80 mx-auto">
                <Image
                  src="/Ed.png"
                  alt="Edward L. Bigus"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - The story of our legal guardian */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            About Ed Bigus
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Ed is admitted in both Kansas and Missouri. He has been practicing law and assisting clients 
            for over 30 years. Ed knows when to compromise and when to fight for your rights. A native of Kansas, 
            Ed earned his B.S. in Business from the University of Kansas and his J.D. from the University 
            of Kansas. He was admitted to the Kansas Bar in 1984 and to the Missouri Bar in 1991.
          </p>
          <hr className="border-t-2 border-gray-300 mt-8" />
        </div>
      </section>

      {/* Practice Areas - The constellations of legal expertise */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {practiceAreas.map((area) => (
              <div key={area.path} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  <Link href={area.path} className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300">
                    {area.title}
                  </Link>
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {area.description}
                </p>
                <Link href={area.path} className="text-blue-600 hover:text-blue-800">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - The bridge to legal enlightenment */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-6">
            Contact Ed for a Free Consultation
          </h2>
          <hr className="border-t-2 border-gray-300 mb-8" />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async (): Promise<{ 
  props: HomePageProps; 
  revalidate: number 
}> => {
  // Our practice areas - like the constellations in your dad's legal universe
  const practiceAreas: PracticeArea[] = [
    {
      title: 'Criminal Defense',
      path: '/criminal-defense',
      description: 'Experienced representation in felonies, misdemeanors, DUI, drug charges, juvenile cases, traffic violations, and appeals.'
    },
    {
      title: 'Domestic Law',
      path: '/domestic',
      description: 'Comprehensive family law services including divorce, custody, support, adoption, and grandparents\' rights.'
    },
    {
      title: 'Mediation',
      path: '/mediation',
      description: 'Kansas State Certified Mediator offering both core and domestic mediation services.'
    }
  ];

  return {
    props: {
      currentYear: new Date().getFullYear(),
      practiceAreas,
    },
    // Keep our cosmic content fresh
    revalidate: 604800,
  };
};

export default Home;