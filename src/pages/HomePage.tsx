import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Truck, Wrench, Phone, Users, Award, Clock, Shield, Target } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

type Page = 'home' | 'about' | 'services' | 'contact';

const HomePage: React.FC<{ setCurrentPage?: (page: Page) => void }> = ({ setCurrentPage }) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: "Uncompromising Quality Standards",
      description: "ISO-certified operations with rigorous quality protocols ensure every material and equipment piece exceeds industry benchmarks."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-800" />,
      title: "Strategic Project Partnership",
      description: "Beyond supply and rental—we become your strategic infrastructure partner, optimizing timelines and reducing total project costs."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800" />,
      title: "Enterprise-Grade Support",
      description: "Dedicated project managers and technical specialists ensure seamless integration with your construction operations."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-800" />,
      title: "Mission-Critical Reliability",
      description: "Zero-tolerance approach to delays with 24/7 emergency response capabilities and guaranteed delivery commitments."
    }
  ];

  const stats = [
    { number: "500+", label: "Premium Materials Supplied" },
    { number: "150+", label: "Premium Equipment Fleet" },
    { number: "100%", label: "On-Time Delivery Guarantee" },
    { number: "24/7", label: "Emergency Response" }
  ];

  const clientTypes = [
    "Construction Companies",
    "Government Infrastructure Contractors",
    "Real Estate Developers",
    "Industrial Manufacturing Giants",
    "Smart City Development Projects",
    "Airport & Metro Rail Contractors"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden" style={{ backgroundImage: "url('/Images/beautiful-view-construction-site-city-sunset.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Premier Infrastructure Partner
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Powering India's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Mega Projects</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                The definitive infrastructure solutions partner for government contractors, developers, 
                and industrial giants. Where precision meets scale, and reliability drives success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage('contact');
                      setTimeout(() => {
                        const el = document.getElementById('request-strategic-consultation');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      setQuoteModalOpen(true);
                    }
                  }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center shadow-2xl transform hover:scale-105"
                >
                  Schedule Strategic Consultation <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <button 
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage('services');
                      setTimeout(() => {
                        const el = document.getElementById('solutions-hero');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
                  View Services Provided
                </button>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-200 text-sm mb-4 font-medium">TRUSTED BY INDUSTRY LEADERS:</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-blue-100">
                  {clientTypes.slice(0, 4).map((client, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                      <span>{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/Images/construction-site.jpg" 
                  alt="Large-scale construction project with advanced machinery" 
                  className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-blue-900">100%</div>
                  <div className="text-gray-600 font-medium">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance That Defines Excellence</h2>
            <p className="text-lg text-gray-600">Metrics that matter to enterprise-scale operations</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-3">{stat.number}</div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Enterprise Leaders Choose MorphoMob
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Beyond materials and equipment—we deliver strategic infrastructure partnerships 
              that transform project economics and accelerate delivery timelines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-blue-900 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Infrastructure Solutions</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Integrated materials supply and equipment rental services designed for enterprise-scale operations
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Premium Materials Supply */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-white/20 text-blue-900">
              <div className="flex items-center mb-8">
                <div className="bg-orange-500 rounded-2xl p-4 mr-6">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">Premium Materials Supply</h3>
                  <p className="text-blue-700">Enterprise-grade construction materials</p>
                </div>
              </div>
              <p className="text-blue-900 mb-8 text-lg leading-relaxed">
                ISO-certified materials sourced from India's leading manufacturers. Every batch tested, 
                certified, and delivered with precision timing that keeps mega-projects on schedule.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Ready Mix Concrete (M10-M80)",
                  "Premium TMT Steel Bars",
                  "Certified Cement & Aggregates",
                  "Specialized Construction Materials",
                  "Electrical & MEP Components",
                  "Waterproofing Solutions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => {
                  if (setCurrentPage) {
                    setCurrentPage('services');
                    setTimeout(() => {
                      const el = document.getElementById('premium-materials-supply');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    setQuoteModalOpen(true);
                  }
                }}
                className="text-orange-400 font-bold hover:text-orange-300 flex items-center text-lg"
              >
                Explore Materials Catalog <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>

            {/* Heavy Equipment Rental */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-white/20 text-blue-900">
              <div className="flex items-center mb-8">
                <div className="bg-orange-500 rounded-2xl p-4 mr-6">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">Heavy Equipment Rental</h3>
                  <p className="text-blue-700">State-of-the-art construction machinery</p>
                </div>
              </div>
              <p className="text-blue-900 mb-8 text-lg leading-relaxed">
                Latest-generation equipment fleet with certified operators. Predictive maintenance protocols 
                ensure 99.8% uptime for mission-critical construction operations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Tower & Mobile Cranes (5T-500T)",
                  "Excavators & Wheel Loaders",
                  "Concrete Pumps & Mixers",
                  "Road Construction Equipment",
                  "Piling Rigs & Foundation Tools",
                  "Support Equipment & Generators"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => {
                  if (setCurrentPage) {
                    localStorage.setItem('servicesTab', 'equipment');
                    setCurrentPage('services');
                    setTimeout(() => {
                      const el = document.getElementById('heavy-equipment-rental');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  } else {
                    setQuoteModalOpen(true);
                  }
                }}
                className="text-orange-400 font-bold hover:text-orange-300 flex items-center text-lg"
              >
                View Equipment Fleet <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Partnership CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-20 w-20 text-white mx-auto mb-8 opacity-90" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Scale Your Infrastructure Operations?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Join India's leading developers, contractors, and industrial giants who trust MorphoMob 
            for mission-critical infrastructure projects. Experience the difference of true partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                if (setCurrentPage) {
                  setCurrentPage('contact');
                  setTimeout(() => {
                    const el = document.getElementById('request-strategic-consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  setQuoteModalOpen(true);
                }
              }}
              className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center shadow-2xl"
            >
              <Phone className="mr-3 h-6 w-6" />
              Schedule Executive Consultation
            </button>
            <button 
              onClick={() => {
                if (setCurrentPage) {
                  setCurrentPage('services');
                  setTimeout(() => {
                    const el = document.getElementById('solutions-hero');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
              View Services Provided
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-orange-400/30">
            <p className="text-orange-100 text-lg">
              <strong></strong>
            </p>
            <p className="text-orange-200 text-sm mt-2">
              Because infrastructure never sleeps, neither do we.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        serviceType="General Consultation"
      />
    </div>
  );
};

export default HomePage;