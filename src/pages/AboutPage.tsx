import React from 'react';
import { Target, Eye, Users, Shield, Clock, TrendingUp, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: "Uncompromising Excellence",
      description: "Every material batch and equipment unit undergoes rigorous quality protocols that exceed international standards and industry benchmarks."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-800" />,
      title: "Mission-Critical Reliability",
      description: "Zero-tolerance approach to delays with predictive logistics and 24/7 emergency response capabilities for time-sensitive operations."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800" />,
      title: "Strategic Partnership",
      description: "Beyond vendor relationships—we become integral to your project success through dedicated support and collaborative planning."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-800" />,
      title: "Continuous Innovation",
      description: "Leveraging cutting-edge technology and industry best practices to optimize project economics and accelerate delivery timelines."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Infrastructure Excellence Since Foundation
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              Redefining Infrastructure
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Partnership Standards</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed">
              MorphoMob Infra Solutions represents the evolution of infrastructure support services—where 
              strategic thinking meets operational excellence to power India's most ambitious construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Company Genesis */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Built for the Future of Infrastructure</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Born from the recognition that India's infrastructure boom demands more than traditional supply chains, 
                MorphoMob was conceived as the definitive solution for enterprise-scale construction challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our founding vision centered on creating an infrastructure partner that could seamlessly integrate 
                with Fortune 500 construction companies, government mega-projects, and industrial developments—delivering 
                not just materials and equipment, but strategic value that transforms project economics.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Today, we serve as the trusted infrastructure backbone for India's leading developers, contractors, 
                and industrial giants, consistently delivering the reliability and precision that mega-projects demand.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">₹500Cr+</div>
                  <div className="text-gray-600 font-medium">Projects Enabled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">99.8%</div>
                  <div className="text-gray-600 font-medium">Delivery Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">24/7</div>
                  <div className="text-gray-600 font-medium">Support Availability</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Images/168316cd404d4b35a4b03d67e5a142a8(1).jpg" 
                alt="Modern infrastructure development" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <Globe className="h-8 w-8 text-blue-800 mb-2" />
                <div className="text-sm font-semibold text-gray-900">Powering India's Growth</div>
                <div className="text-xs text-gray-600">Infrastructure Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 rounded-2xl p-4 mr-6">
                  <Target className="h-10 w-10 text-blue-800" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be India's most trusted infrastructure solutions partner, empowering mega-projects with 
                premium materials, cutting-edge equipment, and strategic support that drives exceptional 
                outcomes and builds lasting partnerships with industry leaders.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 rounded-2xl p-4 mr-6">
                  <Eye className="h-10 w-10 text-blue-800" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To transform India's infrastructure landscape by setting new benchmarks in quality, 
                reliability, and innovation—becoming the definitive choice for government contractors, 
                Fortune 500 developers, and industrial giants across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Values That Drive Excellence</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              These foundational principles guide every decision, every delivery, and every partnership—
              ensuring consistent excellence in all our client relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Excellence */}
      {/* Leadership Excellence */}
    </div>
  );
};

export default AboutPage;