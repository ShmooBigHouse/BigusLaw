import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Criminal Defense',
      path: '/criminal-defense',
      dropdown: ['Felonies', 'Misdemeanors', 'Traffic', 'DUI', 'Drug Charges', 'Juvenile', 'Abuse', 'Appeals']
    },
    {
      name: 'Domestic',
      path: '/domestic',
      dropdown: [
        'Divorce',
        'Paternity',
        'Child Custody',
        'Child Support',
        'Child in Need of Care',
        "Grandparent's Rights",
        'Adoption'
      ]
    },
    { 
      name: 'Mediation', 
      path: '/mediation', 
      dropdown: ['Core', 'Domestic'] 
    },
    { name: 'Collections', path: '/collections' }
  ];

  return (
    <header className="relative bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5"></div>
      
      {/* Accent Strip */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header content above nav */}
        <div className="grid grid-cols-3 items-center min-h-[200px]">
          <div className="flex justify-center items-center h-full">
            <div className="w-40 h-40 flex items-center">
              <Image
                src="/scales.png"
                alt="Scales of Justice"
                width={160}
                height={160}
                className="object-contain brightness-0 invert drop-shadow-lg"
                style={{ border: '2px solid white' }}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="border-2 border-white rounded-lg p-6 bg-blue-800 shadow-2xl w-full max-w-md backdrop-blur-sm bg-opacity-90">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white text-4xl font-bold tracking-wide border-b-2 border-white pb-3 text-center w-full drop-shadow-lg">
                  Edward L. Bigus
                </span>
                <span className="block text-xl text-white font-light tracking-wider mt-3 text-center">
                  Attorney at Law
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="text-white space-y-4">
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-6 h-6 group-hover:text-blue-200 transition-colors drop-shadow-lg" />
                  <a href="tel:1-913-888-4520" className="text-lg hover:text-blue-200 transition-colors drop-shadow-lg">
                    Office: (913) 888-4520
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-6 h-6 group-hover:text-blue-200 transition-colors drop-shadow-lg" />
                  <a href="tel:1-913-221-4520" className="text-lg hover:text-blue-200 transition-colors drop-shadow-lg">
                    Cell: (913) 221-4520
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-6 h-6 group-hover:text-blue-200 transition-colors drop-shadow-lg" />
                  <a href="mailto:elbiguspa@gmail.com" className="text-lg hover:text-blue-200 transition-colors drop-shadow-lg">
                    elbiguspa@gmail.com
                  </a>
                </div>
              </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative flex justify-center z-50">
          <div className="inline-flex bg-white rounded-t-lg border-2 border-black shadow-lg">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className={`relative group 
                  ${index !== navItems.length - 1 ? 'border-r-2 border-black' : ''}`}
              >
                <Link 
                  href={item.path}
                  className={`inline-block px-8 py-3 text-gray-700 font-medium hover:text-blue-600 
                    hover:bg-blue-50 transition-all duration-200
                    ${index === 0 ? 'rounded-tl-lg' : ''} 
                    ${index === navItems.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  {item.name}
                </Link>
                
                {item.dropdown && (
                  <div 
                    className="absolute left-0 hidden group-hover:block
                              w-56 bg-white border-2 border-black rounded-b-lg shadow-xl z-[100]"
                    style={{ top: '100%' }}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`${item.path}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 
                                 transition-colors duration-150"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="border-b-2 border-black"></div>
      </div>
    </header>
  );
};

export default Header;