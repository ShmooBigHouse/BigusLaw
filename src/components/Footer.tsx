import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Practice Info */}
          <div>
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white">Edward L. Bigus</h3>
              <p className="text-blue-400 mt-2">Attorney at Law</p>
            </div>
            <div className="mt-4 space-y-2">
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                About my practice
              </Link>
              <div className="text-sm text-gray-400 mt-4">
                <p>Kansas Bar Admission: 1984</p>
                <p>Missouri Bar Admission: 1991</p>
                <p className="mt-2">Licensed in Kansas & Missouri</p>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Practice Areas</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {/* First Column */}
              <div className="space-y-2">
                <Link href="/criminal-defense" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Criminal Defense
                </Link>
                <div className="pl-4 text-sm space-y-1">
                  <Link href="/criminal-defense/felonies" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Felonies
                  </Link>
                  <Link href="/criminal-defense/misdemeanors" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Misdemeanors
                  </Link>
                  <Link href="/criminal-defense/traffic" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Traffic
                  </Link>
                  <Link href="/criminal-defense/dui" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    DUI
                  </Link>
                </div>
                
                <Link href="/mediation" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Mediation
                </Link>
                <div className="pl-4 text-sm space-y-1">
                  <Link href="/mediation/core" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Core
                  </Link>
                  <Link href="/mediation/domestic" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Domestic
                  </Link>
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-2">
                <Link href="/domestic" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Domestic Law
                </Link>
                <div className="pl-4 text-sm space-y-1">
                  <Link href="/domestic/divorce" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Divorce
                  </Link>
                  <Link href="/domestic/paternity" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Paternity
                  </Link>
                  <Link href="/domestic/child-custody" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Child Custody
                  </Link>
                  <Link href="/domestic/child-support" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Child Support
                  </Link>
                  <Link href="/domestic/child-in-need-of-care" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Child in Need of Care
                  </Link>
                  <Link href="/domestic/grandparents-rights" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Grandparent's Rights
                  </Link>
                  <Link href="/domestic/adoption" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Adoption
                  </Link>
                </div>

                <Link href="/collections" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Collections
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="text-gray-300">
                <p className="mb-1">Office Location:</p>
                <p>110 S. Cherry Suite 203</p>
                <p>Olathe, KS 66061</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">Get in Touch:</p>
                <a href="tel:1-913-888-4520" 
                   className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Office: (913) 888-4520
                </a>
                <a href="tel:1-913-221-4520" 
                   className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Cell: (913) 221-4520
                </a>
                <a href="mailto:elbiguspa@gmail.com" 
                   className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  elbiguspa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2 border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Edward L. Bigus. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" 
                    className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" 
                    className="hover:text-blue-400 transition-colors duration-200">
                Disclaimer
              </Link>
              <Link href="/sitemap" 
                    className="hover:text-blue-400 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;