import { useState } from 'react';
import Card from '../components/Card';

interface PortfolioCompany {
  name: string;
  year: string;
  sector: string;
  description: string;
  status: 'Active' | 'Exited';
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technology' | 'real-estate' | 'growth-equity'>('all');

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

  const stats = [
    { label: 'Total Investments', value: '20+' },
    { label: 'Focus Sectors', value: '3' },
    { label: 'Active Portfolio Companies', value: '15' },
    { label: 'Successful Exits', value: '5' }
  ];

  const technologyInvestments: PortfolioCompany[] = [
    {
      name: 'TechVenture Alpha',
      year: '2023',
      sector: 'Enterprise SaaS',
      description: 'Cloud-based enterprise software platform revolutionizing workflow automation and business intelligence.',
      status: 'Active'
    },
    {
      name: 'DataFlow Systems',
      year: '2023',
      sector: 'AI/ML Platform',
      description: 'Advanced artificial intelligence and machine learning platform for predictive analytics and data processing.',
      status: 'Active'
    },
    {
      name: 'CloudNext Solutions',
      year: '2022',
      sector: 'Cloud Infrastructure',
      description: 'Next-generation cloud infrastructure solutions enabling seamless scalability and performance optimization.',
      status: 'Active'
    },
    {
      name: 'SecureNet Technologies',
      year: '2022',
      sector: 'Cybersecurity',
      description: 'Enterprise cybersecurity platform providing comprehensive threat detection and response capabilities.',
      status: 'Active'
    },
    {
      name: 'FinTech Innovations',
      year: '2021',
      sector: 'Payment Processing',
      description: 'Modern payment processing infrastructure for digital commerce and embedded finance solutions.',
      status: 'Active'
    },
    {
      name: 'HealthTech Partners',
      year: '2021',
      sector: 'Digital Health',
      description: 'Digital health platform transforming patient care delivery through telehealth and remote monitoring.',
      status: 'Exited'
    },
    {
      name: 'EdgeCompute Inc.',
      year: '2020',
      sector: 'Edge Computing',
      description: 'Distributed edge computing platform enabling low-latency processing for IoT and real-time applications.',
      status: 'Active'
    }
  ];

  const realEstateInvestments: PortfolioCompany[] = [
    {
      name: 'Sunshine Multifamily Partners',
      year: '2023',
      sector: 'Multifamily',
      description: 'Premier multifamily investment vehicle focused on Class A and B properties in high-growth Southeast markets.',
      status: 'Active'
    },
    {
      name: 'Urban Development Group',
      year: '2022',
      sector: 'Mixed-Use',
      description: 'Strategic mixed-use development projects in urban infill locations with strong demographic tailwinds.',
      status: 'Active'
    },
    {
      name: 'Industrial Properties LLC',
      year: '2022',
      sector: 'Industrial/Logistics',
      description: 'Modern warehouse and logistics facilities positioned for e-commerce and last-mile delivery growth.',
      status: 'Active'
    },
    {
      name: 'Retail Renaissance Fund',
      year: '2021',
      sector: 'Retail Adaptive Reuse',
      description: 'Adaptive reuse projects transforming underperforming retail properties into mixed-use communities.',
      status: 'Active'
    },
    {
      name: 'Student Housing Ventures',
      year: '2021',
      sector: 'Student Housing',
      description: 'Purpose-built student housing communities near major universities with strong enrollment trends.',
      status: 'Active'
    },
    {
      name: 'Senior Living Communities',
      year: '2020',
      sector: 'Senior Housing',
      description: 'Age-restricted senior living communities offering independent and assisted living options.',
      status: 'Exited'
    },
    {
      name: 'Opportunity Zone Fund I',
      year: '2020',
      sector: 'Opportunity Zones',
      description: 'Diversified real estate fund targeting qualified opportunity zones with significant redevelopment potential.',
      status: 'Active'
    }
  ];

  const growthEquityInvestments: PortfolioCompany[] = [
    {
      name: 'Consumer Brands Collective',
      year: '2023',
      sector: 'Consumer Goods',
      description: 'Portfolio of emerging consumer packaged goods brands with strong direct-to-consumer channels.',
      status: 'Active'
    },
    {
      name: 'Green Energy Partners',
      year: '2022',
      sector: 'Renewable Energy',
      description: 'Renewable energy infrastructure investments spanning solar, wind, and energy storage solutions.',
      status: 'Active'
    },
    {
      name: 'Logistics Solutions Group',
      year: '2022',
      sector: 'Supply Chain',
      description: 'Technology-enabled logistics and supply chain optimization platform for mid-market enterprises.',
      status: 'Active'
    },
    {
      name: 'Education Technology Fund',
      year: '2021',
      sector: 'EdTech',
      description: 'Educational technology solutions providing personalized learning experiences for K-12 and higher education.',
      status: 'Exited'
    },
    {
      name: 'Wellness Brands International',
      year: '2021',
      sector: 'Health & Wellness',
      description: 'Global wellness brands focused on nutrition, fitness, and holistic health products.',
      status: 'Active'
    },
    {
      name: 'Media Ventures Group',
      year: '2020',
      sector: 'Digital Media',
      description: 'Digital media and content production company with focus on streaming and social platforms.',
      status: 'Exited'
    }
  ];

  const getAllCompanies = () => {
    return [...technologyInvestments, ...realEstateInvestments, ...growthEquityInvestments];
  };

  const getFilteredCompanies = () => {
    switch (activeTab) {
      case 'technology':
        return technologyInvestments;
      case 'real-estate':
        return realEstateInvestments;
      case 'growth-equity':
        return growthEquityInvestments;
      default:
        return getAllCompanies();
    }
  };

  const tabs = [
    { id: 'all', label: 'All Investments', count: getAllCompanies().length },
    { id: 'technology', label: 'Technology', count: technologyInvestments.length },
    { id: 'real-estate', label: 'Real Estate', count: realEstateInvestments.length },
    { id: 'growth-equity', label: 'Growth Equity', count: growthEquityInvestments.length }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-deuce-purple to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Investment Portfolio
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            A diversified portfolio of high-potential ventures across technology, real estate, and growth equity.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-deuce-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-deuce-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-deuce-purple text-white shadow-lg'
                    : 'bg-white text-deuce-dark hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredCompanies().map((company, index) => (
              <Card key={index} hover={true}>
                {/* Logo and Status Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-lg ${getCompanyColor(company.name)} flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold text-lg">
                      {getCompanyInitials(company.name)}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      company.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {company.status}
                  </span>
                </div>

                {/* Sector Badge */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-deuce-purple bg-purple-100 px-3 py-1 rounded-full">
                    {company.sector}
                  </span>
                </div>

                {/* Company Info */}
                <h3 className="font-serif text-xl font-bold text-deuce-dark mb-2">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Invested {company.year}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
