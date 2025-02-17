import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Mediation', 
      path: '/mediation',
      dropdown: ['Core', 'Domestic']
    },
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
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="w-full bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5"></div>
      
      {/* Accent Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>

      <div className="w-full px-4 md:container md:mx-auto relative">
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 top-4 z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Header content above nav */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center min-h-[200px] gap-8 py-4">
          <div className="flex justify-center items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center">
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
            <div className="border-2 border-white rounded-lg p-4 md:p-6 bg-blue-800 shadow-2xl w-full max-w-md backdrop-blur-sm bg-opacity-90">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white text-3xl md:text-4xl font-bold tracking-wide border-b-2 border-white pb-3 text-center w-full drop-shadow-lg">
                  Edward L. Bigus
                </span>
                <span className="block text-lg md:text-xl text-white font-light tracking-wider mt-3 text-center">
                  Attorney at Law
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-white space-y-4">
              <div className="flex items-center group">
                <a href="tel:1-913-888-4520" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 border-2 border-white w-full md:w-64">
                  <Phone className="w-5 h-5" />
                  <span>Office: (913) 888-4520</span>
                </a>
              </div>
              <div className="flex items-center group">
                <a href="tel:1-913-221-4520" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 border-2 border-white w-full md:w-64">
                  <Phone className="w-5 h-5" />
                  <span>Cell: (913) 221-4520</span>
                </a>
              </div>
              <div className="flex items-center group">
                <a href="mailto:elbiguspa@gmail.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 border-2 border-white w-full md:w-64">
                  <Mail className="w-5 h-5" />
                  <span>elbiguspa@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative flex justify-center z-50 overflow-x-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:inline-flex bg-white rounded-t-lg border-2 border-black shadow-lg">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className={`relative group ${index !== navItems.length - 1 ? 'border-r-2 border-black' : ''}`}
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
                    className="absolute left-0 hidden group-hover:block w-56 bg-white border-2 border-black rounded-b-lg shadow-xl"
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

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed inset-0 bg-blue-900 z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
            {/* Branding at top of mobile menu with gradient background */}
            <div className="bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 p-4 border-b border-blue-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/scales.png"
                    alt="Scales of Justice"
                    width={80}
                    height={80}
                    className="object-contain brightness-0 invert drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="text-center pb-4">
                <h2 className="text-white text-xl font-bold">Edward L. Bigus</h2>
                <p className="text-blue-200">Attorney at Law</p>
              </div>
            </div>

            {/* Bold gradient divider */}
            <div className="h-0.5 bg-gradient-to-r from-blue-900 via-white to-blue-900 opacity-90"></div>

            {/* Navigation Items */}
            <div className="py-4 px-4">
              {navItems.map((item) => (
                <div key={item.name} className="mb-4">
                  {item.dropdown ? (
                    // Dropdown button for items with subitems
                    <button 
                      className="flex items-center justify-between w-full text-white text-lg py-2 px-4 rounded hover:bg-blue-800"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${openDropdowns[item.name] ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    // Regular link for items without subitems
                    <Link 
                      href={item.path}
                      className="block text-white text-lg py-2 px-4 rounded hover:bg-blue-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Dropdown content */}
                  {item.dropdown && (
                    <div className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openDropdowns[item.name] ? 'max-h-96' : 'max-h-0'}`}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`${item.path}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                          className="block text-blue-200 py-2 px-4 rounded hover:bg-blue-800"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        <div className="border-b-2 border-black"></div>
      </div>
    </header>
  );
};

export default Header;