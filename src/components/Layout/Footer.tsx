import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Crawford University</h3>
                <p className="text-gray-300">Cooperative Society</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering our university community through cooperative financial services, 
              savings, loans, and investment opportunities for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Crawford University<br />
                  Igbesa, Ogun State<br />
                  Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+234 (0) 806-546-7675</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">crawfordcooperative@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Payment Details</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-primary-400 font-medium">Savings/Loan Repayment</p>
                <p className="text-gray-300">Ecobank: 4053006269</p>
              </div>
              <div>
                <p className="text-primary-400 font-medium">Guest House, Coop Complex</p>
                <p className="text-gray-300">Ecobank: 4050009805</p>
              </div>
              <div>
                <p className="text-primary-400 font-medium">Land Payments</p>
                <p className="text-gray-300">GTBank: 0053196476</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Crawford University Cooperative Society. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;