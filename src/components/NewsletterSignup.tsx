import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useApi } from '../hooks/useApi';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { loading, error, execute } = useApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await execute('/contact/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email, name })
    });

    if (result.success) {
      setSubscribed(true);
      setEmail('');
      setName('');
    }
  };

  if (subscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-green-800 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-600">Thank you for subscribing to our newsletter. You'll receive updates about our latest services and industry insights.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
      <div className="text-center mb-6">
        <Mail className="h-12 w-12 text-blue-800 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-gray-600">Get the latest updates on infrastructure solutions and industry insights.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        <div>
          <input
            type="text"
            placeholder="Your Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;