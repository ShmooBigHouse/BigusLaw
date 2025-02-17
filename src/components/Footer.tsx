import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-12">
      <div className="w-full px-4 md:container md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Practice Info */}
          <div>
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white">Edward L. Bigus</h3>
              <p className="text-blue-400 mt-2">Attorney at Law</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="inline-block">
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block">
                  About my practice
                </Link>
              </div>
              <div className="text-sm text-gray-400 mt-4 space-y-2">
                <p>Licensed in Kansas and Missouri</p>
              </div>
              <div className="text-sm text-gray-400 mt-4 space-y-1">
                <p>Kansas Bar Admission: 1984</p>
                <p>Missouri Bar Admission: 1991</p>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="hidden md:block">
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Practice Areas</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {/* First Column */}
              <div className="space-y-2">
                <div className="inline-block">
                  <Link href="/criminal-defense" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block">
                    Criminal Defense
                  </Link>
                </div>
                <div className="pl-4 text-sm space-y-1">
                  <div className="inline-block">
                    <Link href="/criminal-defense/felonies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Felonies
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/misdemeanors" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Misdemeanors
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/traffic" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Traffic
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/dui" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      DUI
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/drug-charges" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Drug Charges
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/juvenile" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Juvenile
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/abuse" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Abuse
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/criminal-defense/appeals" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Appeals
                    </Link>
                  </div>
                </div>
                
                <div className="inline-block">
                  <Link href="/mediation" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block">
                    Mediation
                  </Link>
                </div>
                <div className="pl-4 text-sm space-y-1">
                  <div className="inline-block">
                    <Link href="/mediation/core" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Core
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/mediation/domestic" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Domestic
                    </Link>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-2">
                <div className="inline-block">
                  <Link href="/domestic" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block">
                    Domestic Law
                  </Link>
                </div>
                <div className="pl-4 text-sm space-y-1">
                  <div className="inline-block">
                    <Link href="/domestic/divorce" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Divorce
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/domestic/paternity" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Paternity
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/domestic/child-custody" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Child Custody
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/domestic/child-support" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Child Support
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/domestic/child-in-need-of-care" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Child in Need of Care
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/domestic/grandparents-rights" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Grandparent's Rights
                    </Link>
                  </div>
                  <br />
                  <div className="inline-block">
                    <Link href="/domestic/adoption" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                      Adoption
                    </Link>
                  </div>
                </div>

                <div className="inline-block">
                  <Link href="/collections" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block">
                    Collections
                  </Link>
                </div>
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
                <div className="inline-block">
                  <a href="tel:1-913-888-4520" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    Office: (913) 888-4520
                  </a>
                </div>
                <br />
                <div className="inline-block">
                  <a href="tel:1-913-221-4520" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    Cell: (913) 221-4520
                  </a>
                </div>
                <br />
                <div className="inline-block">
                  <a href="mailto:elbiguspa@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block">
                    elbiguspa@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2 border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="space-y-2 md:space-y-0">
              <p>© {currentYear} Edward L. Bigus. All rights reserved.</p>
              <p className="text-xs text-gray-500">Designed by BigusDesign.com</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="inline-block">
                <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200 inline-block">
                  Privacy Policy
                </Link>
              </div>
              <div className="inline-block">
                <Link href="/disclaimer" className="hover:text-blue-400 transition-colors duration-200 inline-block">
                  Disclaimer
                </Link>
              </div>
              <div className="inline-block">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;