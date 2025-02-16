import React from 'react';
import type { NextPage } from 'next';

const DisclaimerPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Disclaimer</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="prose max-w-4xl mx-auto">
          <div className="bg-white p-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              The information on this website is for general informational purposes only and may be subject to change. 
              It does not constitute legal advice, nor does it establish an attorney-client relationship. 
              For legal guidance specific to your situation, please consult an attorney.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;