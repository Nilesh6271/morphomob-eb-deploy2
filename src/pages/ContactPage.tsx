import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Building2, 
  Users, 
  Wrench, 
  Truck,
  Shield,
  Award,
  Zap,
  Target,
  AlertCircle
} from 'lucide-react';
import { useApi } from '../hooks/useApi';
import LoadingSpinner from '../components/LoadingSpinner';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    projectType: '',
    projectValue: '',
    timeline: '',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { loading, error, execute } = useApi();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Remove empty optional fields before sending
    const dataToSend: Partial<typeof formData> = { ...formData };
    if (!dataToSend.projectValue) delete dataToSend.projectValue;
    if (!dataToSend.timeline) delete dataToSend.timeline;

    const result = await execute('/contact/submit', {
      method: 'POST',
      body: JSON.stringify(dataToSend)
    });

    if (result.success) {
      setSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-800" />,
      title: "Executive Hotline",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Direct access to senior management",
      availability: "24/7 Emergency Response"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-800" />,
      title: "Business Development",
      details: ["partnerships@morphomobinfra.com", "projects@morphomobinfra.com"],
      description: "Strategic partnerships and large projects",
      availability: "Response within 4 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-800" />,
      title: "Corporate Headquarters",
      details: ["MorphoMob Infrastructure Hub", "Industrial Area, Sector 15, Gurgaon, Haryana"],
      description: "Visit our state-of-the-art facility",
      availability: "By appointment only"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-800" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
      description: "Extended hours for project support",
      availability: "Emergency support 24/7"
    }
  ];

  const projectTypes = [
    "Commercial High-Rise Development",
    "Industrial Manufacturing Facility",
    "Government Infrastructure Project",
    "Residential Township Development",
    "Smart City Development",
    "Airport/Metro Rail Construction",
    "Highway/Bridge Construction",
    "Power Plant/Energy Infrastructure",
    "Other Large-Scale Project"
  ];

  const serviceAreas = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-800" />,
      title: "Commercial Mega Projects",
      description: "High-rise towers, shopping complexes, corporate campuses, and mixed-use developments"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800" />,
      title: "Government Contracts",
      description: "Smart cities, public infrastructure, government buildings, and civic amenities"
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-800" />,
      title: "Industrial Facilities",
      description: "Manufacturing plants, warehouses, logistics hubs, and industrial complexes"
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-800" />,
      title: "Infrastructure Development",
      description: "Highways, bridges, airports, metro rail, and large-scale transportation projects"
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "4-Hour Response Guarantee",
      description: "Senior management response to all enterprise inquiries within 4 hours"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Dedicated Project Manager",
      description: "Assigned project manager for all contracts above ₹10 crores"
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: "Emergency Mobilization",
      description: "Critical equipment and materials available within 24 hours"
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Performance SLAs",
      description: "Contractual service level agreements with performance guarantees"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-24" style={{ backgroundImage: "url('/Images/side-view-men-with-safety-vests-shaking-hands.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-slate-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Enterprise Partnership Inquiry
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              Partner with India's Premier
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Infrastructure Solutions Provider</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed">
              Connect with our enterprise solutions team to discuss your mega-project requirements. 
              Experience the strategic partnership that transforms project economics and delivery timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Contact Form & Info */}
      <section id="request-strategic-consultation" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Enhanced Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Request Strategic Consultation</h2>
              <p className="text-lg text-gray-600 mb-10">
                Submit your project details below and our senior management team will connect with you 
                within 4 hours to discuss customized solutions and strategic partnership opportunities.
              </p>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You for Your Inquiry!</h3>
                  <p className="text-green-700 mb-6">
                    Your enterprise partnership inquiry has been successfully submitted. Our senior management 
                    team will review your requirements and contact you within 4 hours.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="text-sm text-green-600 font-semibold">
                      For urgent requirements, call our 24/7 emergency hotline: +91 98765 43210
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                      <span className="text-red-700">{error}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="designation" className="block text-sm font-bold text-gray-700 mb-3">
                        Designation *
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="CEO, Project Director, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-3">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Enter company/organization name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Enter business email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Enter contact number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-bold text-gray-700 mb-3">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-bold text-gray-700 mb-3">
                      Detailed Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Please provide detailed information about your project requirements, specific materials needed, equipment requirements, delivery timelines, and any special considerations..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-5 rounded-xl font-bold text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:scale-105 disabled:opacity-50"
                  >
                    {loading ? (
                      <LoadingSpinner color="white" />
                    ) : (
                      <>
                        <Send className="mr-3 h-6 w-6" />
                        Submit Enterprise Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Enhanced Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Executive Contact Information</h2>
              <p className="text-lg text-gray-600 mb-10">
                Direct access to our senior management team for strategic partnerships and 
                large-scale project discussions.
              </p>

              <div className="space-y-10 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-xl p-4 mr-6">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-800 font-semibold text-lg">{detail}</p>
                        ))}
                        <p className="text-gray-600 mt-2">{info.description}</p>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-3 inline-block">
                          {info.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Specializations */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Enterprise Project Specializations</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized solutions for every category of large-scale infrastructure development, 
              backed by proven expertise and strategic partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-50 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          <div className="my-12 border-t-2 border-blue-100 w-full mx-auto"></div>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Enterprise Service Guarantees</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our commitment to reliability, responsiveness, and partnership for every enterprise client.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-50 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {guarantee.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-xl">{guarantee.title}</h4>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;