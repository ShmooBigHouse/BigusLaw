import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DivorcePage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Divorce</h1>
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
                Navigating the complexities of divorce in Kansas and Missouri requires a clear understanding of each state's legal framework. Whether you're initiating the process or responding to a petition, being informed about the procedures, grounds, and considerations is essential.
              </p>
            </div>
          </div>

          {/* Grounds and Residency Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Divorce Laws</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Grounds for Divorce</h3>
                    <p className="text-gray-800">
                      Kansas operates under a no-fault divorce system, meaning that neither spouse is required to prove wrongdoing by the other party to obtain a divorce. The primary ground is that the marriage is "irretrievably broken."
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Residency Requirements</h3>
                    <p className="text-gray-800">
                      At least one spouse must have been a resident of Kansas for a minimum of 60 days before filing the divorce petition.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Waiting Period</h3>
                    <p className="text-gray-800">
                      There is a mandatory 60-day waiting period from the date of filing before a divorce can be finalized.
                    </p>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Divorce Laws</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Grounds for Divorce</h3>
                    <p className="text-gray-800">
                      Missouri also follows a no-fault approach, where the marriage must be proven as "irretrievably broken" with no reasonable likelihood of reconciliation.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Residency Requirements</h3>
                    <p className="text-gray-800">
                      One spouse must have been a resident of Missouri for at least 90 days prior to filing for divorce.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Waiting Period</h3>
                    <p className="text-gray-800">
                      While there's no statutory waiting period, the process typically takes at least 30 days from the date of filing, depending on court schedules and case specifics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filing Process Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Filing Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Petition for Divorce</h3>
                  <p className="text-gray-700">The process begins when one spouse (the petitioner) files a Petition for Divorce in Kansas or a Petition for Dissolution of Marriage in Missouri. This document outlines the desire to end the marriage and addresses issues like property division, child custody, and support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Service of Process</h3>
                  <p className="text-gray-700">The petitioner must ensure the other spouse (the respondent) receives copies of the divorce papers, officially notifying them of the proceedings.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Response</h3>
                  <p className="text-gray-700">Upon receiving the petition, the respondent has the opportunity to file a response, agreeing or contesting the terms outlined.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Considerations Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Considerations</h2>
            
            <div className="space-y-6">
              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">Property and Debt Division</h3>
                <p className="text-gray-800">
                  Both Kansas and Missouri require an equitable distribution of marital property and debts. This doesn't necessarily mean a 50/50 split but rather a fair division based on factors like the length of the marriage, each spouse's financial situation, and contributions to the marriage.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">Child Custody and Support</h3>
                <p className="text-gray-800">
                  Courts in both states prioritize the best interests of the child when determining custody arrangements. Factors considered include each parent's relationship with the child, the child's adjustment to home and school, and the mental and physical health of all parties involved.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">Considerations for Both Parties</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-semibold">Legal Representation:</span> It's advisable for both the petitioner and respondent to seek legal counsel to navigate the complexities of divorce proceedings effectively.</li>
                  <li><span className="font-semibold">Alternative Dispute Resolution:</span> Mediation or collaborative divorce approaches can offer amicable solutions, potentially reducing time and legal expenses.</li>
                  <li><span className="font-semibold">Emotional Well-being:</span> Divorce can be emotionally taxing. Seeking support from counselors or support groups can be beneficial during this transition.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Divorce Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DivorcePage;