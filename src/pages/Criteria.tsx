import Card from '../components/Card';
import Button from '../components/Button';

const Criteria = () => {
  const sectors = [
    {
      name: 'Technology',
      icon: '💻',
      areas: ['Enterprise Software', 'AI/ML', 'Cybersecurity', 'FinTech', 'Cloud Infrastructure']
    },
    {
      name: 'Real Estate',
      icon: '🏢',
      areas: ['Multifamily', 'Industrial', 'Mixed-Use', 'Opportunistic Strategies', 'Value-Add']
    },
    {
      name: 'Growth Equity',
      icon: '📈',
      areas: ['Consumer Brands', 'Healthcare', 'Clean Energy', 'Supply Chain', 'Digital Media']
    }
  ];

  const whatWeLookFor = [
    {
      title: 'Strong Unit Economics',
      description: 'Proven business models with healthy margins and clear path to sustainable profitability.'
    },
    {
      title: 'Clear Path to Profitability',
      description: 'Realistic financial projections with well-defined milestones and capital efficiency.'
    },
    {
      title: 'Defensible Market Position',
      description: 'Sustainable competitive advantages through technology, network effects, or market positioning.'
    },
    {
      title: 'Scalable Business Model',
      description: 'Ability to grow revenue significantly without proportional increase in costs.'
    },
    {
      title: 'Exceptional Founding Teams',
      description: 'Experienced, passionate leaders with relevant domain expertise and execution track record.'
    },
    {
      title: 'Large Market Opportunity',
      description: 'Addressable markets with significant growth potential and favorable macro trends.'
    }
  ];

  const partnershipApproach = [
    {
      title: 'Board Participation',
      description: 'Active board involvement to provide strategic guidance and governance oversight.'
    },
    {
      title: 'Strategic Advisory',
      description: 'Hands-on support with business development, go-to-market strategy, and operational excellence.'
    },
    {
      title: 'Network Access',
      description: 'Introductions to key customers, partners, talent, and other investors in our network.'
    },
    {
      title: 'Follow-On Investment',
      description: 'Committed capital reserves to support portfolio companies through subsequent funding rounds.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-deuce-purple to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Investment Criteria
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Our investment thesis and the types of opportunities we pursue.
          </p>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-6 text-center">
            Investment Thesis
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              Deuce Ventures focuses on <strong>scalable businesses with strong fundamentals</strong> that
              are positioned to become category leaders in their respective markets. We seek opportunities
              where our capital and expertise can accelerate growth and create lasting value.
            </p>
            <p className="text-lg leading-relaxed">
              We have a strong preference for <strong>experienced management teams</strong> who demonstrate
              deep domain expertise, strategic vision, and proven execution capabilities. The best investments
              are built on strong partnerships between capital providers and operators.
            </p>
            <p className="text-lg leading-relaxed">
              Our emphasis on <strong>market disruption potential</strong> means we gravitate toward companies
              that are reimagining traditional industries through technology, innovation, or novel business models
              that create sustainable competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Focus */}
      <section className="py-20 bg-deuce-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-12 text-center">
            Sector Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} hover={true}>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{sector.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-deuce-dark">
                    {sector.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {sector.areas.map((area, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-deuce-purple mr-2">•</span>
                      <span className="text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Parameters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-12 text-center">
            Investment Parameters
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <div className="mb-4">
                <div className="text-4xl font-bold text-deuce-purple">$250K - $5M</div>
              </div>
              <h3 className="font-semibold text-lg text-deuce-dark mb-2">Check Size</h3>
              <p className="text-gray-600 text-sm">
                Initial investment range with capacity for follow-on rounds
              </p>
            </Card>
            <Card className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-deuce-purple">Seed - Series B</div>
              </div>
              <h3 className="font-semibold text-lg text-deuce-dark mb-2">Investment Stage</h3>
              <p className="text-gray-600 text-sm">
                Technology investments; Value-add for real estate
              </p>
            </Card>
            <Card className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-deuce-purple">US + Select Intl.</div>
              </div>
              <h3 className="font-semibold text-lg text-deuce-dark mb-2">Geography</h3>
              <p className="text-gray-600 text-sm">
                Primarily US-focused with selective international opportunities
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-deuce-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-12 text-center">
            What We Look For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeLookFor.map((item, index) => (
              <Card key={index} hover={true}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-deuce-purple text-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-deuce-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-12 text-center">
            Our Partnership Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnershipApproach.map((item, index) => (
              <Card key={index} hover={true}>
                <h3 className="font-serif text-xl font-bold text-deuce-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deuce-purple to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Opportunity?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            If your company aligns with our investment criteria, we'd love to learn more about your vision.
          </p>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Criteria;
