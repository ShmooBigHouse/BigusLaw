import React from 'react';
import type { NextPage } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const AppealsPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Appeals</h1>
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
                Navigating the appeals process in Kansas and Missouri requires a comprehensive understanding of each state's legal framework. Below is an overview of the appellate procedures, key considerations, and recommended actions for individuals seeking to appeal a court decision in these states.
              </p>
            </div>
          </div>

          {/* State Laws and Systems Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Appeals Process</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Initiating an Appeal</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Notice of Appeal</h4>
                        <p className="text-gray-800">
                          To begin an appeal, a party must file a notice of appeal with the clerk of the district court. This notice should clearly indicate the intent to seek appellate review.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Timeframe</h4>
                        <p className="text-gray-800">
                          The notice of appeal must be filed within 14 days after the judgment becomes final. Timely filing is crucial to preserve the right to appeal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Appellate Procedure</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The appellant is responsible for preparing and transmitting the record on appeal, which includes transcripts, exhibits, and other pertinent documents, to the appellate court.</li>
                      <li>Both parties submit written briefs outlining their arguments. The Kansas Court of Appeals may also hear oral arguments to further assess the case.</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Potential Outcomes</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Affirmation: The appellate court agrees with the lower court's decision.</li>
                      <li>Reversal: The appellate court overturns the lower court's decision.</li>
                      <li>Remand: The case is sent back to the lower court for further proceedings.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Appeals Process</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Initiating an Appeal</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Notice of Appeal</h4>
                        <p className="text-gray-800">
                          In Missouri, the notice of appeal must be filed with the clerk of the trial court no later than ten days after the judgment becomes final.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Form and Contents</h4>
                        <p className="text-gray-800">
                          The notice should specify the parties involved, the judgment being appealed, and the appellate court designated to handle the appeal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Appellate Procedure</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The appellant is responsible for compiling the trial record, including all relevant documents and transcripts, and ensuring its transmission to the appellate court.</li>
                      <li>Both sides submit briefs presenting their legal arguments. The Missouri Court of Appeals may also schedule oral arguments to delve deeper into the issues presented.</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Potential Outcomes</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Affirmation: The appellate court upholds the original decision.</li>
                      <li>Reversal: The appellate court overturns the original decision.</li>
                      <li>Modification: The appellate court alters aspects of the lower court's decision.</li>
                      <li>Remand: The case is returned to the lower court for additional proceedings.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Considerations Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Considerations for Appeals</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timeliness</h3>
                  <p className="text-gray-700">Strict adherence to filing deadlines is essential. Missing a deadline can forfeit the right to appeal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Grounds for Appeal</h3>
                  <p className="text-gray-700">Appeals must be based on legal errors that occurred during the trial, such as misapplication of the law, procedural mistakes, or issues with how evidence was handled.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Representation</h3>
                  <p className="text-gray-700">Engaging an attorney experienced in appellate law is crucial, as the appeals process involves complex legal analysis and precise procedural requirements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Appeal</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppealsPage;