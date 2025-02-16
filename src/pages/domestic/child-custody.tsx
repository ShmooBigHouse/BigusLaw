import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const ChildCustodyPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Child Custody</h1>
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
                Navigating child custody matters in Kansas and Missouri requires a clear understanding of each state's legal framework. Both states prioritize the child's best interests, but specific laws and procedures can vary.
              </p>
            </div>
          </div>

          {/* Types of Custody Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Types of Custody</h2>
            
            <div className="space-y-6">
              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">Legal Custody</h3>
                <p className="text-gray-800 mb-4">
                  The authority to make significant decisions regarding the child's welfare, including education, healthcare, and religious upbringing.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-semibold">Joint Legal Custody:</span> Both parents share decision-making responsibilities.</li>
                  <li><span className="font-semibold">Sole Legal Custody:</span> One parent holds exclusive decision-making rights.</li>
                </ul>
              </div>

              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">Physical Custody</h3>
                <p className="text-gray-800 mb-4">
                  Determines where the child resides and the day-to-day care.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-semibold">Joint Physical Custody:</span> The child spends significant time with both parents.</li>
                  <li><span className="font-semibold">Sole Physical Custody:</span> The child primarily resides with one parent, while the other may have visitation rights.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* State Laws Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Child Custody Laws</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Best Interests of the Child</h3>
                    <p className="text-gray-800">
                      Kansas courts determine custody based on the child's best interests, considering factors such as each parent's role and involvement before and after separation.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Parenting Plan Requirement</h3>
                    <p className="text-gray-800">
                      A written parenting plan is mandatory in Kansas. If parents cannot agree on a plan, the court will establish one.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Joint Custody Preference</h3>
                    <p className="text-gray-800">
                      There's a presumption that a written agreement between the parties about custody or residency is in the child's best interest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Child Custody Laws</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Best Interests of the Child</h3>
                    <p className="text-gray-800">
                      Missouri courts also focus on the child's best interests, evaluating factors like each parent's involvement and the child's needs.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Joint Custody Presumption</h3>
                    <p className="text-gray-800">
                      Missouri law presumes that joint custody is in the child's best interest, ensuring frequent and meaningful contact with both parents.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Parenting Plan Submission</h3>
                    <p className="text-gray-800">
                      Parents must submit a proposed parenting plan. If they cannot agree, the court will devise one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modifying Custody Orders Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Modifying Custody Orders</h2>
            <div className="pl-4 border-l-4 border-blue-600">
              <p className="text-gray-800">
                In both states, custody orders can be modified if there's a significant change in circumstances affecting the child's welfare. Legal counsel can assist in navigating the modification process.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Child Custody Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChildCustodyPage;