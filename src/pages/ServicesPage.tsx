import React, { useState, useEffect } from 'react';
import { Truck, Wrench, CheckCircle, ArrowRight, Timer, Shield, Award, Target } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'materials' | 'equipment'>('materials');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const tab = localStorage.getItem('servicesTab');
    if (tab === 'equipment') {
      setActiveTab('equipment');
      setTimeout(() => {
        const el = document.getElementById('heavy-equipment-rental');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
    localStorage.removeItem('servicesTab');
  }, []);

  const materialsServices = [
    {
      icon: null,
      bgImage: "/Images/19.png",
      iconImage: "/Images/20.png",
      title: "Premium Ready Mix Concrete",
      description: "Enterprise-grade RMC with guaranteed strength values from M10 to M80. Precision-batched using certified aggregates with real-time quality monitoring and delivery tracking.",
      features: ["ISO-certified batching plants", "Real-time strength monitoring", "GPS-tracked delivery fleet", "Technical consultation included"],
      specs: "Grades: M10-M80 | Slump: 25-150mm | Delivery: 24/7 availability"
    },
    {
      icon: null,
      bgImage: "/Images/21.png",
      iconImage: "/Images/22.png",
      title: "Structural Steel Solutions",
      description: "Premium TMT bars and structural steel from India's leading manufacturers. Complete certification documentation and mill test certificates for compliance requirements.",
      features: ["ISI marked TMT bars", "Mill test certificates", "Bulk supply capability", "Custom cutting & bending"],
      specs: "Grades: Fe415, Fe500, Fe550 | Sizes: 8mm-40mm | Standards: IS:1786"
    },
    {
      icon: null,
      bgImage: "/Images/13.png",
      iconImage: "/Images/14.png",
      title: "MEP & Electrical Systems",
      description: "Complete electrical, plumbing, and MEP materials from authorized dealers. Technical specifications support and installation guidance for complex systems.",
      features: ["Authorized brand dealers", "Technical specifications", "Installation support", "Warranty coverage"],
      specs: "Brands: Havells, Polycab, Finolex | Standards: IS, BIS certified"
    },
    {
      icon: null,
      bgImage: "/Images/15.png",
      iconImage: "/Images/16.png",
      title: "Advanced Waterproofing Solutions",
      description: "Comprehensive waterproofing systems including membranes, coatings, and sealants. Application guidance and performance warranties for critical applications.",
      features: ["Performance warranties", "Application training", "Technical support", "Quality assurance"],
      specs: "Systems: APP, SBS membranes | Coatings: Polyurethane, Acrylic"
    },
    {
      icon: null,
      bgImage: "/Images/17.png",
      iconImage: "/Images/18.png",
      title: "Specialty Construction Materials",
      description: "High-performance materials for specialized applications including admixtures, fiber reinforcement, and advanced concrete solutions for mega-projects.",
      features: ["Performance additives", "Fiber reinforcement", "Specialty concretes", "Technical consultation"],
      specs: "Applications: High-rise, Industrial, Infrastructure projects"
    },
    {
      icon: null,
      bgImage: "/Images/23.png",
      iconImage: "/Images/24.png",
      title: "Certified Aggregates & Materials",
      description: "Graded aggregates, manufactured sand, and specialty materials meeting stringent quality parameters. Comprehensive testing and certification for critical applications.",
      features: ["Graded & washed aggregates", "Manufactured sand (M-Sand)", "Quality test certificates", "Consistent gradation"],
      specs: "Sizes: 6mm-40mm | Crushing value: <30% | Water absorption: <2%"
    },
  ];

  const equipmentServices = [
    {
      icon: null,
      bgImage: "/Images/1.png",
      iconImage: "/Images/4.png",
      title: "Tower & Mobile Cranes",
      description: "Latest-generation cranes from 5T to 500T capacity with certified operators. Comprehensive lift planning and safety protocols for complex operations.",
      features: ["5T-500T capacity range", "Certified operators", "Lift planning services", "Safety compliance"],
      specs: "Types: Tower, Mobile, Crawler | Max height: 200m | Load charts provided"
    },
    {
      icon: null,
      bgImage: "/Images/2.png",
      iconImage: "/Images/5.png",
      title: "Earth Moving Fleet",
      description: "Modern excavators, wheel loaders, and dozers with GPS tracking and fuel monitoring. Skilled operators and preventive maintenance included.",
      features: ["GPS tracking systems", "Fuel monitoring", "Skilled operators", "Maintenance included"],
      specs: "Excavators: 20T-50T | Loaders: 3-5 cubic meter | Operating hours: 8-12 hrs/day"
    },
    {
      icon: null,
      bgImage: "/Images/3.png",
      iconImage: "/Images/6.png",
      title: "Concrete Pumping Systems",
      description: "High-output concrete pumps and placing equipment for large-scale pours. Boom pumps up to 65m reach with experienced pump operators.",
      features: ["High-output pumps", "Boom reach up to 65m", "Experienced operators", "Maintenance support"],
      specs: "Output: 60-180 cubic meter/hour | Boom reach: 32-65m | Pressure: 85 bar"
    },
    {
      icon: null,
      bgImage: "/Images/7.jpg",
      iconImage: "/Images/8.png",
      title: "Road Construction Equipment",
      description: "Specialized road building machinery including pavers, rollers, and milling machines. Complete road construction solutions with technical support.",
      features: ["Asphalt pavers", "Vibratory rollers", "Milling machines", "Technical support"],
      specs: "Paver width: 2.5-12m | Roller weight: 8-25T | Milling depth: 0-350mm"
    },
    {
      icon: null,
      bgImage: "/Images/9.png",
      iconImage: "/Images/10.png",
      title: "Power & Support Systems",
      description: "Reliable power generation and support equipment including generators, compressors, and lighting systems. 24/7 technical support and maintenance.",
      features: ["Power generators", "Air compressors", "Tower lighting", "24/7 support"],
      specs: "Generators: 25-2000 KVA | Compressors: 185-1600 CFM | Lighting: LED towers"
    },
    {
      icon: null,
      bgImage: "/Images/11.png",
      iconImage: "/Images/12.png",
      title: "Foundation & Piling Equipment",
      description: "Specialized foundation equipment including piling rigs, drilling machines, and foundation support systems for complex ground conditions.",
      features: ["Piling rigs", "Drilling equipment", "Foundation tools", "Ground analysis"],
      specs: "Pile diameter: 600-1500mm | Depth capacity: 60m | Torque: 150-400 kNm"
    }
  ];

  const advantages = [
    {
      icon: <Timer className="h-6 w-6 text-orange-500" />,
      title: "Rapid Deployment",
      description: "Emergency mobilization within 4 hours for critical project requirements."
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Quality Assurance",
      description: "ISO-certified processes with comprehensive testing and documentation."
    },
    {
      icon: <Target className="h-6 w-6 text-orange-500" />,
      title: "Technical Excellence",
      description: "Expert engineering support and on-site technical consultation."
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Performance Guarantee",
      description: "Service level agreements with performance guarantees and penalties."
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Strategic Consultation", 
      description: "Comprehensive project analysis and requirement assessment by our technical specialists." 
    },
    { 
      step: "02", 
      title: "Customized Proposal", 
      description: "Detailed technical and commercial proposal with transparent pricing and delivery schedules." 
    },
    { 
      step: "03", 
      title: "Contract Execution", 
      description: "Formal agreement with SLAs, performance guarantees, and flexible commercial terms." 
    },
    { 
      step: "04", 
      title: "Delivery & Support", 
      description: "Precision delivery with ongoing technical support and performance monitoring throughout project lifecycle." 
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="solutions-hero" className="relative text-white py-24" style={{ backgroundImage: "url('/Images/WhatsApp Image 2025-07-05 at 15.59.16_68826aff.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-slate-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Enterprise Infrastructure Solutions
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              Comprehensive Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Mega Projects</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed">
              From premium construction materials to state-of-the-art equipment rental—integrated solutions 
              that power India's most ambitious infrastructure developments.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-2xl p-2 flex shadow-lg">
              <button
                id="premium-materials-supply"
                onClick={() => setActiveTab('materials')}
                className={`px-12 py-4 rounded-xl font-bold transition-all duration-300 flex items-center text-lg ${
                  activeTab === 'materials'
                    ? 'bg-gradient-to-r from-blue-800 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-800 hover:bg-white'
                }`}
              >
                <Truck className="h-6 w-6 mr-3" />
                Premium Materials Supply
              </button>
              <button
                id="heavy-equipment-rental"
                onClick={() => setActiveTab('equipment')}
                className={`px-12 py-4 rounded-xl font-bold transition-all duration-300 flex items-center text-lg ${
                  activeTab === 'equipment'
                    ? 'bg-gradient-to-r from-blue-800 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-800 hover:bg-white'
                }`}
              >
                <Wrench className="h-6 w-6 mr-3" />
                Heavy Equipment Rental
              </button>
            </div>
          </div>

          {/* Materials Supply Content */}
          {activeTab === 'materials' && (
            <div>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Premium Materials Supply</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Enterprise-grade construction materials sourced from India's leading manufacturers, 
                  with comprehensive quality assurance and precision delivery for mega-project requirements.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                {materialsServices.map((service, index) => (
                  (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) ? (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 flex flex-col"
                    >
                      <div className="relative">
                        <img src={service.bgImage} alt={service.title} className="w-full h-56 object-cover" />
                        {/* White fade effect from bottom to top */}
                        <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 80%)'}} />
                        <div className="absolute left-4 -bottom-8 bg-white rounded-full p-2 shadow-md">
                          <img src={service.iconImage} alt={`${service.title} Icon`} className="w-12 h-12" />
                        </div>
                      </div>
                      <div className="pt-10 px-6 pb-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <span className="font-semibold">Technical Specifications:</span>
                          <div className="text-sm text-gray-700">{service.specs}</div>
                        </div>
                        <ul className="mb-6 space-y-1 text-green-600">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition mt-auto flex items-center justify-center whitespace-nowrap"
                          onClick={() => {
                            localStorage.setItem('navigateToContactScroll', 'true');
                            window.dispatchEvent(new Event('navigateToContact'));
                          }}
                        >
                          Request Technical Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
                      <div className="p-8">
                        <div className="bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                          <div className="text-sm font-semibold text-gray-900 mb-2">Technical Specifications:</div>
                          <div className="text-sm text-gray-600">{service.specs}</div>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-8 pb-8">
                        <button 
                          onClick={() => {
                            localStorage.setItem('navigateToContactScroll', 'true');
                            window.dispatchEvent(new Event('navigateToContact'));
                          }}
                          className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                        >
                          Request Technical Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Equipment Rental Content */}
          {activeTab === 'equipment' && (
            <div>
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Heavy Equipment Rental</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  State-of-the-art construction equipment fleet with certified operators and comprehensive 
                  maintenance support, ensuring optimal performance for large-scale construction operations.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                {equipmentServices.map((service, index) => (
                  (index >= 0 && index <= 5) ? (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 flex flex-col"
                    >
                      <div className="relative">
                        <img src={service.bgImage} alt={service.title} className="w-full h-56 object-cover" />
                        {/* White fade effect from bottom to top */}
                        <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 80%)'}} />
                        <div className="absolute left-4 -bottom-8 bg-white rounded-full p-2 shadow-md">
                          <img src={service.iconImage} alt={`${service.title} Icon`} className="w-12 h-12" />
                        </div>
                      </div>
                      <div className="pt-10 px-6 pb-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <span className="font-semibold">Equipment Specifications:</span>
                          <div className="text-sm text-gray-700">{service.specs}</div>
                        </div>
                        <ul className="mb-6 space-y-1 text-green-600">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition mt-auto"
                          onClick={() => {
                            localStorage.setItem('navigateToContactScroll', 'true');
                            window.dispatchEvent(new Event('navigateToContact'));
                          }}
                        >
                          Check Availability &rarr;
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
                      <div className="p-8">
                        <div className="bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                          <div className="text-sm font-semibold text-gray-900 mb-2">Equipment Specifications:</div>
                          <div className="text-sm text-gray-600">{service.specs}</div>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-8 pb-8">
                        <button 
                          onClick={() => {
                            localStorage.setItem('navigateToContactScroll', 'true');
                            window.dispatchEvent(new Event('navigateToContact'));
                          }}
                          className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                        >
                          Check Availability <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Enterprise Leaders Choose MorphoMob</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Beyond materials and equipment—we deliver strategic advantages that optimize project 
              economics and accelerate delivery timelines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-orange-100 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 relative" style={{ backgroundImage: "url('/Images/IMG-20250707-WA0003.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Enterprise Service Process</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Streamlined, transparent, and results-driven process designed for enterprise-scale operations
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative bg-white/90 rounded-3xl shadow-lg border border-blue-100 p-8 flex flex-col items-center">
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-3xl w-20 h-20 flex items-center justify-center mb-6 text-2xl font-bold shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-20 w-20 text-white mx-auto mb-8 opacity-90" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Optimize Your Infrastructure Operations?</h2>
          <p className="text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join India's leading construction companies, government contractors, and industrial developers 
            who trust MorphoMob for mission-critical infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                localStorage.setItem('navigateToContactScroll', 'true');
                window.dispatchEvent(new Event('navigateToContact'));
              }}
              className="bg-white text-orange-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-2xl"
            >
              Schedule Technical Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
};

export default ServicesPage;