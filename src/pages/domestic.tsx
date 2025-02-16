import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const DomesticPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Domestic Law</h1>
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
          {/* Family Path Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Finding the Best Path Forward for Your Family</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Family legal matters can be complicated and emotional, especially when children are involved. Our Overland Park family law attorneys are committed to resolving disputes in a way that protects your rights while prioritizing the well-being of your children. Whenever possible, we seek solutions that minimize stress and conflict. Depending on your case, we may:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Negotiate fair settlements through mediation or collaborative law</li>
                  <li>Work toward balanced co-parenting arrangements</li>
                  <li>Advocate for agreements that prioritize your children&apos;s best interests</li>
                  <li>Explore alternative dispute resolution options to avoid unnecessary court battles</li>
                  <li>Ensure that legal agreements provide stability and security for your family</li>
                </ul>
                <p className="text-gray-800 text-lg leading-relaxed">
                  While some cases do require court intervention, we will do everything within our power to achieve a resolution that benefits you and your children. During your initial consultation, we&apos;ll discuss your options and determine the best approach for your family&apos;s future.
                </p>
              </div>
              <div className="w-1/3">
                <Image 
                  src="/family.png"
                  alt="Family"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Domestic Law Services</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {title: 'Divorce', path: 'divorce', desc: 'Guiding you through the divorce process with compassion and dedication to protect your interests.'},
                {title: 'Paternity', path: 'paternity', desc: 'Establishing legal rights and responsibilities for parents and children through paternity actions.'},
                {title: 'Child Custody', path: 'child-custody', desc: 'Creating custody arrangements that serve the best interests of your children while protecting parental rights.'},
                {title: 'Child Support', path: 'child-support', desc: 'Ensuring fair child support arrangements that provide for your children\'s needs.'},
                {title: 'Child in Need of Care', path: 'child-in-need-of-care', desc: 'Protecting vulnerable children and working with families to create safe, stable environments.'},
                {title: "Grandparent's Rights", path: 'grandparents-rights', desc: 'Advocating for grandparents seeking to maintain meaningful relationships with their grandchildren.'},
                {title: 'Adoption', path: 'adoption', desc: 'Helping families grow through the adoption process, ensuring legal security for all parties.'}
              ].map((service) => (
                <div key={service.path} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href={`/domestic/${service.path}`} className="text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all duration-300">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Contact Us About Your Case</h2>
            <hr className="border-t-2 border-gray-300 mb-8" />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DomesticPage;