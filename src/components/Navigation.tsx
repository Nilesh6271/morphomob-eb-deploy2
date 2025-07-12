import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home' as Page, label: 'Home' },
    { key: 'about' as Page, label: 'About Us' },
    { key: 'services' as Page, label: 'Solutions' },
    { key: 'contact' as Page, label: 'Partnership' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <img src="/Images/logo2.png" alt="MorphoMob Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 relative ${
                  currentPage === item.key
                    ? 'text-blue-800'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                {item.label}
                {currentPage === item.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Get Enterprise Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`block w-full text-left px-4 py-3 text-base font-bold transition-colors duration-200 rounded-lg ${
                    currentPage === item.key
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 mt-4"
              >
                Get Enterprise Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;