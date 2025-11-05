import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  // Helper function to generate initials from company name
  const getCompanyInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return words.slice(0, 2).map(word => word[0]).join('').toUpperCase();
  };

  // Helper function to generate a color based on company name
  const getCompanyColor = (name: string) => {
    const colors = [
      'bg-gradient-to-br from-blue-500 to-blue-600',
      'bg-gradient-to-br from-purple-500 to-purple-600',
      'bg-gradient-to-br from-green-500 to-green-600',
      'bg-gradient-to-br from-orange-500 to-orange-600',
      'bg-gradient-to-br from-pink-500 to-pink-600',
      'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'bg-gradient-to-br from-teal-500 to-teal-600',
      'bg-gradient-to-br from-red-500 to-red-600',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const portfolioHighlights = [
    {
      name: 'TechVenture Alpha',
      category: 'Enterprise SaaS',
      description: 'Leading-edge enterprise software platform transforming business operations with AI-powered automation.',
      year: '2023'
    },
    {
      name: 'Sunshine Multifamily Partners',
      category: 'Real Estate',
      description: 'Premier multifamily investment vehicle focused on high-growth Southeast markets.',
      year: '2022'
    },
    {
      name: 'Green Energy Partners',
      category: 'Growth Equity',
      description: 'Renewable energy portfolio driving sustainable infrastructure development.',
      year: '2021'
    },
    {
      name: 'DataFlow Systems',
      category: 'Technology',
      description: 'Advanced AI/ML platform enabling data-driven decision making at enterprise scale.',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deuce-purple to-purple-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.jpg"
              alt="Deuce Ventures Logo"
              className="h-32 w-32 object-contain rounded-full shadow-2xl"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in">
            Strategic Capital for Tomorrow's Leaders
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100 leading-relaxed">
            Deuce Ventures LLC partners with visionary entrepreneurs and innovative companies
            across technology, real estate, and growth equity sectors to create sustainable value
            and drive meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/portfolio" variant="secondary">
              View Portfolio
            </Button>
            <Button to="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-6">
                Expertise-Driven Investment
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With over a decade of investment experience and $3B+ in transactional expertise,
                Deuce Ventures brings deep domain knowledge and strategic guidance to every partnership.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our focus spans three key sectors: cutting-edge technology solutions, strategic
                real estate ventures, and high-potential growth equity opportunities.
              </p>
              <Button to="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center">
                <div className="text-3xl font-bold text-deuce-purple mb-2">20+</div>
                <div className="text-sm text-gray-600">Investments</div>
              </Card>
              <Card className="text-center">
                <div className="text-3xl font-bold text-deuce-purple mb-2">$3B+</div>
                <div className="text-sm text-gray-600">Transaction Volume</div>
              </Card>
              <Card className="text-center">
                <div className="text-3xl font-bold text-deuce-purple mb-2">3</div>
                <div className="text-sm text-gray-600">Focus Sectors</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-deuce-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of our strategic investments across technology, real estate, and growth equity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {portfolioHighlights.map((company, index) => (
              <Card key={index} hover={true}>
                {/* Logo and Year */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-lg ${getCompanyColor(company.name)} flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold text-base">
                      {getCompanyInitials(company.name)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{company.year}</span>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-deuce-purple bg-purple-100 px-3 py-1 rounded-full">
                    {company.category}
                  </span>
                </div>

                {/* Company Info */}
                <h3 className="font-serif text-xl font-bold text-deuce-dark mb-2">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button to="/portfolio" variant="primary">
              View All Investments
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deuce-purple to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Whether you're an entrepreneur seeking strategic capital or a limited partner
            interested in investment opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="mailto:jb@deuceventures.com"
              variant="secondary"
            >
              Email Us
            </Button>
            <Button
              href="https://www.linkedin.com/in/jb-bowers/"
              variant="outline"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
