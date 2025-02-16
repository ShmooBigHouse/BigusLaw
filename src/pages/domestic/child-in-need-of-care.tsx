import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const ChildInNeedPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Child in Need of Care</h1>
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
                In both Kansas and Missouri, the welfare of children is a paramount concern, leading to specific legal frameworks addressing situations where a child may require state intervention for their protection and well-being.
              </p>
            </div>
          </div>

          {/* State Laws Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas: Child in Need of Care (CINC)</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Definition</h3>
                    <p className="text-gray-800">
                      Under Kansas law, a "Child in Need of Care" (CINC) refers to an individual under 18 years of age who meets specific criteria, such as lacking adequate parental care, being a victim of abuse or neglect, or being abandoned.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Legal Process</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Initiation:</span> CINC cases typically begin when concerns about a child's welfare are reported to authorities.</li>
                      <li><span className="font-semibold">Protective Custody:</span> A child may be placed in protective custody if there's an immediate threat to their safety. This custody cannot exceed 72 hours, excluding weekends and holidays, without a court hearing to determine the necessity of continued custody.</li>
                      <li><span className="font-semibold">Court Proceedings:</span> The court evaluates evidence to decide if the child is indeed in need of care and determines appropriate interventions, which may include services for the family or alternative placements.</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
                    <p className="text-gray-800">
                      Kansas statutes emphasize the confidentiality of records in CINC cases, allowing information exchange only among authorized parties to protect the child's privacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri: Child in Need of Care</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Definition</h3>
                    <p className="text-gray-800">
                      In Missouri, the juvenile court holds exclusive jurisdiction over cases involving children under 17 years old who are alleged to be in need of care and treatment due to various circumstances, such as parental neglect or the child's behavior.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Legal Process</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Reporting and Investigation:</span> Allegations of a child needing care are reported to the Missouri Department of Social Services, which conducts investigations to assess the child's situation.</li>
                      <li><span className="font-semibold">Court Intervention:</span> If necessary, the juvenile court intervenes, holding hearings to determine the child's needs and the appropriate course of action, which may involve family services or placement in foster care.</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
                    <p className="text-gray-800">
                      Missouri law mandates the confidentiality of records in child welfare cases, restricting access to ensure the child's and family's privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Legal Support in Child Welfare Cases</h2>
            <div className="pl-4 border-l-4 border-blue-600">
              <p className="text-gray-800">
                Both Kansas and Missouri have established legal procedures to protect children who may be in vulnerable situations. These processes aim to ensure the safety and well-being of the child while balancing the rights and responsibilities of parents or guardians. Given the complexities of such cases, consulting with a legal professional experienced in child welfare law is advisable for those involved.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Child in Need of Care Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChildInNeedPage;