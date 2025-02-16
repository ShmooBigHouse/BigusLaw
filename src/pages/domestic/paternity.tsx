import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const PaternityPage: NextPage = () => {
  return (
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
          {/* Introduction Section */}
          <div className="mb-8">
            <div className="bg-white shadow-sm p-8 border-b border-gray-600">
              <p className="text-gray-800 text-lg leading-relaxed">
                Establishing paternity is a crucial legal step for unmarried parents in both Kansas and Missouri, as it defines a child's legal father and secures rights and responsibilities for both parents. This process ensures that the child benefits from financial support, access to family medical histories, and inheritance rights.
              </p>
            </div>
          </div>

          {/* State Laws Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Establishing Paternity in Kansas</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Presumption of Paternity</h3>
                    <p className="text-gray-800">
                      If a child is born to a married couple, the husband is presumed to be the legal father. This presumption applies if the couple was married at any time between conception and birth.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Unmarried Parents</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><span className="font-semibold">Voluntary Acknowledgment:</span> Both parents can sign a Voluntary Acknowledgment of Paternity (VAP) form, typically at the hospital when the child is born. This form establishes legal paternity without court involvement.</li>
                      <li><span className="font-semibold">Genetic Testing:</span> If there's uncertainty about the father's identity, either parent can request genetic testing. This can be arranged through Kansas Child Support Services or private facilities.</li>
                      <li><span className="font-semibold">Paternity Petition:</span> When voluntary acknowledgment isn't possible, a paternity petition can be filed in court to legally establish the father's identity.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Establishing Paternity in Missouri</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Presumption of Paternity</h3>
                    <p className="text-gray-800">
                      Similar to Kansas, if a child is born during a marriage, the husband is presumed to be the legal father.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Unmarried Parents</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><span className="font-semibold">Affidavit Acknowledging Paternity:</span> Unmarried parents can sign this affidavit at the hospital during the child's birth, which adds the father's name to the birth certificate. If not completed at the hospital, it can be obtained later through the Department of Health and Senior Services or the Family Support Division.</li>
                      <li><span className="font-semibold">Father's Petition:</span> A man believing himself to be the biological father can file a "Father's Petition for Declaration of Paternity, Child Custody, and/or Support" in the appropriate circuit court.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rights and Responsibilities Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rights and Responsibilities</h2>
            <div className="pl-4 border-l-4 border-blue-600">
              <p className="text-gray-800">
                Establishing paternity grants the father legal rights, such as seeking custody or visitation, and imposes responsibilities, including child support obligations. It also ensures the child can access benefits like inheritance rights and medical histories from both parents.
              </p>
            </div>
          </div>

          {/* Legal Counsel Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Importance of Legal Counsel</h2>
            <div className="pl-4 border-l-4 border-blue-600">
              <p className="text-gray-800">
                Navigating paternity laws can be complex. It's advisable for parents to consult with an experienced family law attorney to understand their rights and obligations fully.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Paternity Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaternityPage;