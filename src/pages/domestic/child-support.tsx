import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

interface StateInfo {
  state: string;
  description: string;
  custody_types: {
    type: string;
    description: string;
    key_points: string[];
  }[];
  factors: string[];
  modification_requirements: string[];
}

interface ChildSupportPageProps {
  stateInfo: StateInfo[];
}

const ChildSupportPage: NextPage<ChildSupportPageProps> = ({ stateInfo = [] }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Child Support</h1>
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
                Understanding child support laws in Kansas and Missouri is essential for parents navigating family law matters. Both states have established guidelines to ensure that child support amounts are fair and consistent, prioritizing the child's best interests.
              </p>
            </div>
          </div>

          {/* State Laws Section */}
          <div className="bg-white shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kansas Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kansas Child Support</h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Calculation Method</h3>
                    <p className="text-gray-800">
                      Kansas utilizes the Income Shares Model, which estimates the amount parents would have spent on their child if they remained together. This combined support obligation is then divided proportionally based on each parent's income.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Payment Process</h3>
                    <p className="text-gray-800">
                      Typically, child support payments are deducted directly from the paying parent's paycheck through an income withholding order. These funds are forwarded to the Kansas Payment Center (KPC) and then disbursed to the receiving parent.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Duration of Support</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Standard Termination:</span> Child support obligations in Kansas generally continue until the child reaches 18 years of age.</li>
                      <li><span className="font-semibold">Extended Support:</span> If the child is still attending high school at 18, support continues until the end of that school year.</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Enforcement</h3>
                    <p className="text-gray-800">
                      The Kansas Department for Children and Families' Child Support Services (CSS) assists in enforcing support orders, ensuring timely and full payments.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Parenting Time and Support</h3>
                    <p className="text-gray-800">
                      Kansas law treats child support and parenting time separately. Withholding support due to denied visitation, or vice versa, is not permissible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Missouri Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Missouri Child Support</h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Calculation Method</h3>
                    <p className="text-gray-800">
                      Missouri employs a standardized form, known as Form 14, to calculate the "presumed child support amount." This form considers both parents' incomes, the number of children, and other relevant expenses.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Duration of Support</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold">Standard Termination:</span> Child support typically ends when the child turns 18.</li>
                      <li><span className="font-semibold">Extended Support:</span> If the child is still in high school at 18, support continues until graduation or the child's 21st birthday, whichever comes first.</li>
                      <li><span className="font-semibold">Other Termination Conditions:</span> Support obligations may also cease if the child marries, enters active military duty, becomes self-supporting, or passes away.</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Enforcement</h3>
                    <p className="text-gray-800">
                      Missouri offers free services to establish, modify, and enforce child support through the Family Support Division.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold mb-3">Parental Responsibilities</h3>
                    <p className="text-gray-800">
                      Even if the custodial parent has sufficient income, courts may require the non-custodial parent to make support payments to ensure the child's needs are met equitably.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white shadow-sm p-8 border-t border-gray-600">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Child Support Case</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ChildSupportPageProps> = async (): Promise<{ 
  props: ChildSupportPageProps; 
  revalidate: number 
}> => {
  const stateInfo: StateInfo[] = [];

  return {
    props: {
      stateInfo,
    },
    revalidate: 604800,
  };
};

export default ChildSupportPage;