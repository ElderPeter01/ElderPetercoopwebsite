import React from 'react';
import { Users, Target, Eye, Award, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const leadership = [
    { name: 'Dr. Sarah Johnson', position: 'President', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Prof. Michael Adebayo', position: 'Vice President', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Mrs. Grace Okafor', position: 'Secretary', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Mr. David Ogundimu', position: 'Treasurer', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Mrs. Funmi Adesanya', position: 'Manager', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Mr. Tunde Bakare', position: 'Admin Officer', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We operate with complete transparency and maintain the highest levels of trust with our members.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our decisions are always made with the best interests of our university community in mind.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Growth',
      description: 'We help our members achieve their financial goals through smart savings and investment opportunities.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all our services and continuously improve our offerings.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Cooperative</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Building a stronger financial future for the Crawford University community through 
            cooperative principles and innovative financial services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="text-primary-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accessible, affordable, and innovative financial services that empower 
                members of the Crawford University community to achieve their financial goals, 
                build wealth, and contribute to the economic development of our institution and society.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="text-secondary-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading cooperative society in Nigerian universities, recognized for 
                excellence in financial services, member satisfaction, and contribution to the 
                socio-economic development of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our commitment to our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our cooperative society towards excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-primary-600 font-medium">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Founded in 2019</h3>
                    <p className="text-gray-600">
                      Established by a group of dedicated Crawford University staff and faculty 
                      members with a vision to create financial opportunities for the community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Growth</h3>
                    <p className="text-gray-600">
                      Within our first year, we grew to over 100 members and disbursed our first 
                      loans, helping members achieve their financial goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Innovation</h3>
                    <p className="text-gray-600">
                      Launched our digital platform in 2024, making it easier for members to 
                      access services and manage their finances online.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">₦50M+</div>
                <div className="text-gray-600">Total Savings</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">₦25M+</div>
                <div className="text-gray-600">Loans Disbursed</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">98%</div>
                <div className="text-gray-600">Member Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;