import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DomesticMediationPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Domestic Mediation</h1>
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
                Domestic mediation is a guided, structured process that helps families resolve disputes related to divorce, child custody, child support, and other family law matters. Instead of going through an adversarial court battle, mediation provides a collaborative environment where both parties can work toward a fair and lasting agreement.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Mediation for Family Disputes</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Less Stressful Environment</h3>
                      <p className="text-gray-700">Mediation fosters communication and cooperation, reducing the emotional toll on all parties.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Child-Focused Approach</h3>
                      <p className="text-gray-700">Decisions are made with the best interests of children in mind, protecting their well-being throughout the process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">More Affordable</h3>
                      <p className="text-gray-700">Avoid the high costs of lengthy court battles and significantly reduce legal fees.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Faster Resolution</h3>
                      <p className="text-gray-700">Complete the process in weeks rather than the months or years often required for court proceedings.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Solutions</h3>
                      <p className="text-gray-700">Create personalized agreements that best suit your family's unique situation and needs.</p>
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

          {/* Common Issues Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Issues Resolved Through Domestic Mediation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-3">Divorce Matters</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Division of assets and property</li>
                    <li>Spousal support arrangements</li>
                    <li>Retirement and pension distribution</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-3">Child-Related Issues</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Child custody and parenting time</li>
                    <li>Child support modifications</li>
                    <li>Paternity-related disputes</li>
                    <li>Grandparents' rights and visitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Issues Resolved Through Domestic Mediation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-3">Divorce Matters</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Division of assets and property</li>
                    <li>Spousal support arrangements</li>
                    <li>Retirement and pension distribution</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-3">Child-Related Issues</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Child custody and parenting time</li>
                    <li>Child support modifications</li>
                    <li>Paternity-related disputes</li>
                    <li>Grandparents' rights and visitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Domestic Mediation</h2>
              <p className="text-gray-700 text-center mb-8">
                If you're facing a family-related legal dispute, domestic mediation can be a valuable tool to find solutions while preserving important relationships. Contact us to discuss whether mediation is the right option for your case.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DomesticMediationPage;