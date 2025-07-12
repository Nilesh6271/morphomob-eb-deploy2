import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useApi } from '../hooks/useApi';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, serviceType = '' }) => {
  const [formData, setFormData] = useState({
    serviceType,
    projectDetails: '',
    quantity: '',
    timeline: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  });

  const [submitted, setSubmitted] = useState(false);
  const { loading, error, execute } = useApi();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('contactInfo.')) {
      const field = name.replace('contactInfo.', '');
      setFormData(prev => ({
        ...prev,
        contactInfo: {
          ...prev.contactInfo,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await execute('/quotes/request', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (result.success) {
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setFormData({
      serviceType: '',
      projectDetails: '',
      quantity: '',
      timeline: '',
      contactInfo: {
        name: '',
        email: '',
        phone: '',
        company: ''
      }
    });
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-800 to-blue-700 text-white p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Request Quote</h2>
            <button
              onClick={resetAndClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your quote request. Our team will review your requirements and 
                get back to you within 2-4 business hours with a detailed proposal.
              </p>
              <button
                onClick={resetAndClose}
                className="bg-gradient-to-r from-blue-800 to-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="serviceType" className="block text-sm font-bold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select service type</option>
                  <option value="Ready Mix Concrete">Ready Mix Concrete</option>
                  <option value="TMT Steel Bars">TMT Steel Bars</option>
                  <option value="Tower Crane Rental">Tower Crane Rental</option>
                  <option value="Mobile Crane Rental">Mobile Crane Rental</option>
                  <option value="Excavator Rental">Excavator Rental</option>
                  <option value="Aggregates Supply">Aggregates Supply</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactInfo.name" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contactInfo.name"
                    name="contactInfo.name"
                    value={formData.contactInfo.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contactInfo.company" className="block text-sm font-bold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="contactInfo.company"
                    name="contactInfo.company"
                    value={formData.contactInfo.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactInfo.email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contactInfo.email"
                    name="contactInfo.email"
                    value={formData.contactInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contactInfo.phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="contactInfo.phone"
                    name="contactInfo.phone"
                    value={formData.contactInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-bold text-gray-700 mb-2">
                    Quantity (if applicable)
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 100 cubic meters, 50 tons"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 mb-2">
                    Required Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate (Within 1 week)">Immediate (Within 1 week)</option>
                    <option value="Short-term (1-4 weeks)">Short-term (1-4 weeks)</option>
                    <option value="Medium-term (1-3 months)">Medium-term (1-3 months)</option>
                    <option value="Long-term (3+ months)">Long-term (3+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-bold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Please provide detailed information about your project, specific requirements, location, and any special considerations..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="mr-3 h-6 w-6" />
                    Submit Quote Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;