import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, PiggyBank, CreditCard, Shield, TrendingUp, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crawford University
              <span className="block text-secondary-300">Cooperative Society</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Empowering our university community through cooperative financial services, 
              savings, loans, and investment opportunities for a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Join Our Society
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cooperative?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive financial services tailored to the needs of our university community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Savings Plans</h3>
              <p className="text-gray-600">
                Flexible savings options with competitive interest rates to help you achieve your financial goals.
              </p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Loans</h3>
              <p className="text-gray-600">
                Access affordable loans with minimal paperwork and quick approval processes.
              </p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Built by and for the Crawford University community with your interests at heart.
              </p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-gray-600">
                Your financial data is protected with bank-level security and encryption.
              </p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Investment Options</h3>
              <p className="text-gray-600">
                Grow your wealth through various investment opportunities and dividend returns.
              </p>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Member Benefits</h3>
              <p className="text-gray-600">
                Enjoy exclusive member benefits, discounts, and special financial products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">₦50M+</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">₦25M+</div>
              <div className="text-gray-600">Loans Disbursed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join thousands of Crawford University community members who trust us with their financial future.
          </p>
          <Link to="/register" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;