import Card from '../components/Card';

const About = () => {
  const philosophyPoints = [
    {
      title: 'Sustainable Growth',
      description: 'We focus on building long-term value through sustainable business models and strategic positioning.'
    },
    {
      title: 'Hands-On Partnership',
      description: 'Beyond capital, we provide active guidance, strategic support, and industry expertise to our portfolio companies.'
    },
    {
      title: 'Value Creation',
      description: 'Our approach emphasizes operational excellence, market expansion, and continuous improvement.'
    },
    {
      title: 'Long-Term Perspective',
      description: 'We align our interests with founders and management teams, building enduring partnerships for sustained success.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-deuce-purple to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            About Deuce Ventures
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Building Tomorrow's Success Stories Through Strategic Capital and Expertise
          </p>
        </div>
      </section>

      {/* JB Bowers Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-xl aspect-square">
                  <img
                    src="/jb-headshot.jpeg"
                    alt="JB Bowers - Managing Partner & Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-deuce-dark mb-2">
                    JB Bowers
                  </h3>
                  <p className="text-deuce-purple font-semibold mb-4">
                    Managing Partner & Founder
                  </p>
                  <a
                    href="https://www.linkedin.com/in/jb-bowers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-deuce-purple hover:text-purple-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-deuce-dark mb-6">
                  Biography
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    JB Bowers brings over a decade of investment experience and $3B+ in transactional
                    expertise to Deuce Ventures LLC. As the founder and managing partner, JB focuses
                    on identifying and nurturing high-potential ventures across technology, real estate,
                    and growth equity sectors.
                  </p>
                  <p className="leading-relaxed">
                    Prior to founding Deuce Ventures, JB served as a Director on MONTICELLOAM, LLC's
                    Multifamily Bridge Lending team, specializing in multifamily debt originations.
                    He previously held the position of Assistant Vice President at Voya Investment
                    Management, where he was responsible for permanent and bridge loan originations
                    across multiple US markets.
                  </p>
                  <p className="leading-relaxed">
                    Throughout his career, JB has developed deep expertise in sourcing, evaluation,
                    loan structuring, term sheet negotiations, underwriting, and closing complex
                    transactions across all commercial real estate property types.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="border-t pt-6">
                <h3 className="font-serif text-2xl font-bold text-deuce-dark mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <Card>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-deuce-purple rounded-lg flex items-center justify-center text-white font-bold">
                          MBA
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg text-deuce-dark">
                          Master of Business Administration
                        </h4>
                        <p className="text-deuce-purple">Georgia Tech, Scheller College of Business</p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-deuce-purple rounded-lg flex items-center justify-center text-white font-bold">
                          BS
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg text-deuce-dark">
                          Bachelor of Science in Finance & Real Estate
                        </h4>
                        <p className="text-deuce-purple">Florida State University (with Honors)</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-deuce-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deuce-dark mb-4">
              Investment Philosophy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach to investing is built on core principles that guide every partnership and decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {philosophyPoints.map((point, index) => (
              <Card key={index} hover={true}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-deuce-purple text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-xl font-bold text-deuce-dark mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
