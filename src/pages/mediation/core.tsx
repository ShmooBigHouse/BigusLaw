import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const CoreMediationPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Core Mediation</h1>
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
                Mediation is a structured, voluntary process that allows individuals to resolve disputes outside of the courtroom. Core mediation services apply to a wide range of legal conflicts, including family matters, business disputes, and civil disagreements. Our approach focuses on finding mutually beneficial solutions while saving time and money compared to traditional litigation.
              </p>
            </div>
          </div>

          {/* Benefits Section - Prioritized First */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Mediation</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cost-Effective Solution</h3>
                      <p className="text-gray-700">Save significant legal expenses by avoiding lengthy court battles and expensive litigation procedures.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Time-Saving Process</h3>
                      <p className="text-gray-700">Resolve disputes much faster than traditional trial proceedings, allowing you to move forward with your life.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Control Over the Outcome</h3>
                      <p className="text-gray-700">Craft your own agreement rather than having a judge decide for you, ensuring the solution meets your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Less Stressful Environment</h3>
                      <p className="text-gray-700">Experience a cooperative, problem-solving approach rather than the confrontational nature of court proceedings.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <Image 
                  src="/handshake.png"
                  alt="Handshake"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How Core Mediation Works</h2>
            <div className="space-y-6">
              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">The Mediation Process</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <span className="font-semibold">Neutral Facilitation:</span>
                    <p className="mt-2">A qualified mediator facilitates discussions between disputing parties, ensuring fair and balanced negotiations.</p>
                  </li>
                  <li>
                    <span className="font-semibold">Guided Resolution:</span>
                    <p className="mt-2">The mediator helps guide both sides toward a mutually agreeable resolution without making decisions for the parties.</p>
                  </li>
                  <li>
                    <span className="font-semibold">Confidential Discussions:</span>
                    <p className="mt-2">All mediation discussions are confidential and cannot be used against either party in court, promoting open and honest communication.</p>
                  </li>
                  <li>
                    <span className="font-semibold">Voluntary Participation:</span>
                    <p className="mt-2">While some courts may encourage mediation, the process remains voluntary, allowing parties to maintain control over their participation.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Core Mediation</h2>
              <p className="text-gray-700 text-center mb-8">
                If you are facing a legal dispute, mediation may be an effective alternative to court. Contact us to explore whether core mediation is the right option for your situation.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoreMediationPage;