import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const AbusePage: NextPage = () => {
  return (
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
                Abuse, encompassing physical, verbal, sexual, and other forms, is a grave offense with significant legal repercussions in both Kansas and Missouri. Below is an overview of the laws, penalties, and recommended actions if you or someone you know is facing abuse charges or is a victim seeking assistance in these states.
              </p>
            </div>
          </div>

          {/* State Laws and Systems Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Abuse Laws and Penalties</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Child Abuse</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Definition</h4>
                        <p className="text-gray-800">
                          In Kansas, child abuse includes knowingly inflicting cruel and inhuman corporal punishment upon a child under 18 years of age.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Penalties</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Classified as a severity level 5 person felony.</li>
                          <li>Punishable by imprisonment and fines, with specific sentences depending on the case details.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Domestic Violence</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Definition</h4>
                        <p className="text-gray-800">
                          Acts such as battery, assault, stalking, or violations of protection orders against a family or household member.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Penalties</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Penalties vary based on the offense's severity and prior convictions, ranging from misdemeanors to felonies.</li>
                          <li>Convictions can lead to jail time, fines, mandatory counseling, and restraining orders.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Abuse Laws and Penalties</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Child Abuse</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Definition</h4>
                        <p className="text-gray-800">
                          In Missouri, child abuse involves inflicting physical injury, sexual abuse, or emotional harm upon a child under 18 years of age.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Penalties</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Classified as a felony offense.</li>
                          <li>If the child suffers serious physical or emotional injury, it's a class A felony, carrying severe penalties, including life imprisonment.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Domestic Assault</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Definition</h4>
                        <p className="text-gray-800">
                          Includes acts like attempting to cause or knowingly causing physical injury to a domestic partner.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Penalties</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Domestic assault in the fourth degree is a class A misdemeanor, escalating to a class E felony with prior offenses.</li>
                          <li>Penalties range from fines and jail time for misdemeanors to extended imprisonment for felonies.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Immediate Steps if Facing Abuse Charges or as a Victim</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seek Legal Counsel</h3>
                  <p className="text-gray-700">Whether you're accused or a victim, consulting with an experienced attorney is crucial to understand your rights and navigate the legal system effectively.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document Evidence</h3>
                  <p className="text-gray-700">Keep detailed records of incidents, including dates, times, witnesses, and any physical evidence like photographs or medical reports.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Report to Authorities</h3>
                  <p className="text-gray-700">Victims should report abuse to local law enforcement or child protective services immediately to ensure safety and legal documentation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Legal Procedures</h3>
                  <p className="text-gray-700">Adhere to all court orders, attend all hearings, and comply with legal requirements to protect your rights and interests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AbusePage;