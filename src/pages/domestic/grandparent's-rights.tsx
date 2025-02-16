import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const GrandparentsRightsPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Grandparent's Rights</h1>
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
                Grandparents play a vital role in the lives of their grandchildren, and both Kansas and Missouri have legal provisions that recognize and protect grandparents' rights under certain circumstances. Understanding these rights and the legal processes involved is crucial for grandparents seeking to maintain meaningful relationships with their grandchildren.
              </p>
            </div>
          </div>

          {/* State Laws Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Grandparents' Rights</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Visitation Rights</h3>
                    <p className="text-gray-800">
                      In Kansas, grandparents can petition the court for visitation with their unmarried minor grandchildren. The court must determine that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Visitation is in the child's best interests</li>
                      <li>A substantial relationship exists between the grandparent and grandchild</li>
                      <li>The visitation rights are reasonable and appropriate</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Custody Rights</h3>
                    <p className="text-gray-800">
                      While parents are generally preferred as custodians, Kansas courts may consider awarding custody to grandparents if:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Evidence shows that remaining with the parents would be detrimental to the child's welfare</li>
                      <li>Parental unfitness can be demonstrated</li>
                      <li>Staying with the parents is contrary to the child's best interests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Grandparents' Rights</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Visitation Rights</h3>
                    <p className="text-gray-800">
                      Missouri law permits grandparents to seek visitation rights under specific conditions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>During or after parental divorce proceedings</li>
                      <li>If a parent is deceased</li>
                      <li>When the child has resided with the grandparent for at least six months within the preceding two years</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Custody Rights</h3>
                    <p className="text-gray-800">
                      Grandparents may be considered for custody in Missouri if:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Both parents are deemed unfit, unsuitable, or unable to provide proper care</li>
                      <li>Awarding custody to the parents would be detrimental to the child's welfare</li>
                      <li>The court determines it's in the best interests of the child</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Legal Process</h3>
                    <p className="text-gray-800">
                      Grandparents must file a petition in the appropriate court. The court evaluates:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>The existing relationship between grandparent and grandchild</li>
                      <li>The child's needs and best interests</li>
                      <li>Potential impact on the parent-child relationship</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Considerations Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Important Legal Considerations</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document Your Relationship</h3>
                  <p className="text-gray-700">Maintain records of your involvement in your grandchild's life, including visits, communications, and any financial support provided.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seek Legal Counsel</h3>
                  <p className="text-gray-700">Consult with an experienced family law attorney to understand your rights and the specific legal standards in your jurisdiction.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consider Mediation</h3>
                  <p className="text-gray-700">Explore alternative dispute resolution methods to maintain family relationships and avoid costly litigation when possible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Grandparents' Rights Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GrandparentsRightsPage;