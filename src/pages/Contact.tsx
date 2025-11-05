import { useState } from 'react';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setFormStatus('success');
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-deuce-purple to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Let's explore how we can work together to create value and drive growth.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-deuce-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-deuce-dark mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <Card>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-deuce-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-deuce-dark mb-1">Email</h3>
                      <a href="mailto:jb@deuceventures.com" className="text-deuce-purple hover:underline">
                        jb@deuceventures.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-deuce-purple" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-deuce-dark mb-1">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/jb-bowers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deuce-purple hover:underline"
                      >
                        Connect with JB Bowers
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-deuce-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-deuce-dark mb-1">Location</h3>
                      <p className="text-gray-600">Tampa, Florida</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* For Entrepreneurs */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-deuce-dark mb-4">
                  For Entrepreneurs
                </h3>
                <Card className="bg-white">
                  <h4 className="font-semibold text-deuce-dark mb-3">Pitch Deck Submission Guidelines</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-deuce-purple mr-2">•</span>
                      <span>Include a concise executive summary (1-2 pages)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-deuce-purple mr-2">•</span>
                      <span>Clearly articulate your unique value proposition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-deuce-purple mr-2">•</span>
                      <span>Provide financial projections and key metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-deuce-purple mr-2">•</span>
                      <span>Highlight team experience and achievements</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Response Timeline:</strong> We review all submissions within 2 weeks and respond to opportunities that align with our criteria.
                  </p>
                </Card>
              </div>

              {/* For Limited Partners */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-deuce-dark mb-4">
                  For Limited Partners
                </h3>
                <Card className="bg-white">
                  <p className="text-gray-600 mb-3">
                    Interested in learning more about investment opportunities with Deuce Ventures?
                  </p>
                  <p className="text-gray-600 text-sm">
                    Please reach out directly to discuss partnership opportunities, fund information, and investment terms.
                  </p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white">
                <h2 className="font-serif text-2xl font-bold text-deuce-dark mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-deuce-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deuce-purple focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-deuce-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deuce-purple focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-deuce-dark mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deuce-purple focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-deuce-dark mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deuce-purple focus:border-transparent transition-all"
                    >
                      <option value="">Select an inquiry type</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="portfolio">Portfolio Company Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-deuce-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deuce-purple focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-deuce-purple text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {formStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
