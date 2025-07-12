import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Award, Shield, Zap } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact' | 'terms' | 'safety' | 'sla' | 'privacy';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'About Us', page: 'about' as Page },
    { label: 'Solutions', page: 'services' as Page },
    { label: 'Partnership', page: 'contact' as Page },
  ];

  const services = [
    'Premium Ready Mix Concrete',
    'Heavy Equipment Rental',
    'Structural Steel Solutions',
    'Tower & Mobile Cranes',
    'Certified Aggregates',
    'Enterprise Project Support'
  ];

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: '+91 98765 43210', label: 'Executive Hotline' },
    { icon: <Mail className="h-4 w-4" />, text: 'partnerships@morphomobinfra.com', label: 'Business Development' },
    { icon: <MapPin className="h-4 w-4" />, text: 'Industrial Area, Sector 15, Gurgaon', label: 'Corporate HQ' },
    { icon: <Clock className="h-4 w-4" />, text: 'Mon-Sat: 8AM-8PM | Emergency: 24/7', label: 'Business Hours' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/profile.php?id=61578201541461', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://x.com/morphomobinfra', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/morphomob-infra-solutions', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/morphomobinfra', label: 'Instagram' }
  ];

  const certifications = [
    { icon: <Award className="h-5 w-5" />, text: 'ISO 9001:2015 Certified' },
    { icon: <Shield className="h-5 w-5" />, text: 'ISO 14001:2015 Certified' },
    { icon: <Zap className="h-5 w-5" />, text: '24/7 Emergency Response' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <img src="/Images/M (4)-Photoroom.png" alt="INFRASTRUCTURE SOLUTIONS Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              India's premier infrastructure solutions partner, empowering mega-projects with 
              unmatched reliability, precision, and strategic value for enterprise clients.
            </p>
            
            {/* Certifications */}
            <div className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-orange-400 mr-3">
                    {cert.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{cert.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-orange-400">Quick Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => { setCurrentPage(link.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-orange-400">Enterprise Solutions</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-orange-400">Executive Contact</h3>
            <ul className="space-y-6">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-orange-400 mr-4 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">
                      {info.label}
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{info.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 MorphoMob Infra Solutions. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Powering India's infrastructure development with enterprise-grade solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <button
                onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium focus:outline-none"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => { setCurrentPage('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium focus:outline-none"
              >
                Terms of Service
              </button>
              <button
                onClick={() => { setCurrentPage('sla'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium focus:outline-none"
              >
                Enterprise SLA
              </button>
              <button
                onClick={() => { setCurrentPage('safety'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium focus:outline-none"
              >
                Safety Standards
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;