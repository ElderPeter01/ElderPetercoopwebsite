import React, { useState } from 'react';
import { PiggyBank, CreditCard, TrendingUp, Plus, Eye, Calendar, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoanApplicationModal from '../components/Modals/LoanApplicationModal';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);

  // Mock data - replace with actual API calls
  const mockData = {
    savings: {
      total: 125000,
      thisMonth: 15000,
      transactions: [
        { id: '1', date: '2024-01-15', amount: 15000, type: 'deposit', description: 'Monthly Savings' },
        { id: '2', date: '2024-01-10', amount: 5000, type: 'deposit', description: 'Additional Deposit' },
        { id: '3', date: '2024-01-05', amount: 2000, type: 'withdrawal', description: 'Emergency Withdrawal' },
      ]
    },
    contributions: {
      total: 48000,
      thisMonth: 4000,
      status: 'paid',
      history: [
        { id: '1', month: 'January 2024', amount: 4000, status: 'paid', date: '2024-01-01' },
        { id: '2', month: 'December 2023', amount: 4000, status: 'paid', date: '2023-12-01' },
        { id: '3', month: 'November 2023', amount: 4000, status: 'paid', date: '2023-11-01' },
      ]
    },
    loans: [
      { id: '1', amount: 50000, purpose: 'Business Investment', status: 'approved', applicationDate: '2024-01-10', monthlyRepayment: 5500 },
      { id: '2', amount: 25000, purpose: 'Education', status: 'pending', applicationDate: '2024-01-20' },
    ]
  };

  const bankAccounts = [
    { name: 'Savings/Loan Repayment', bank: 'Ecobank', accountNumber: '4053006269', purpose: 'savings' },
    { name: 'Guest House, Coop Complex', bank: 'Ecobank', accountNumber: '4050009805', purpose: 'accommodation' },
    { name: 'Land Payments', bank: 'GTBank', accountNumber: '0053196476', purpose: 'land' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'declined': return 'text-red-600 bg-red-100';
      case 'paid': return 'text-green-600 bg-green-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-600 mt-2">
            Member ID: {user?.membershipNumber} | {user?.memberType === 'staff' ? 'Staff Member' : 'Casual Member'}
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Savings</p>
                <p className="text-2xl font-bold text-primary-600">{formatCurrency(mockData.savings.total)}</p>
                <p className="text-sm text-green-600">+{formatCurrency(mockData.savings.thisMonth)} this month</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <PiggyBank className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Contribution</p>
                <p className="text-2xl font-bold text-secondary-600">{formatCurrency(mockData.contributions.thisMonth)}</p>
                <p className={`text-sm px-2 py-1 rounded-full inline-block ${getStatusColor(mockData.contributions.status)}`}>
                  {mockData.contributions.status.charAt(0).toUpperCase() + mockData.contributions.status.slice(1)}
                </p>
              </div>
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-secondary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Loans</p>
                <p className="text-2xl font-bold text-primary-600">{mockData.loans.length}</p>
                <p className="text-sm text-gray-600">
                  {mockData.loans.filter(loan => loan.status === 'approved').length} approved
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <CreditCard className="text-primary-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {mockData.savings.transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'deposit' ? (
                        <Plus className={`text-green-600`} size={20} />
                      ) : (
                        <DollarSign className={`text-red-600`} size={20} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Applications */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Loan Applications</h2>
              <button
                onClick={() => setIsLoanModalOpen(true)}
                className="btn-primary text-sm"
              >
                Apply for Loan
              </button>
            </div>
            <div className="space-y-4">
              {mockData.loans.map((loan) => (
                <div key={loan.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{loan.purpose}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(loan.status)}`}>
                      {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-primary-600 mb-1">
                    {formatCurrency(loan.amount)}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Applied: {loan.applicationDate}
                  </p>
                  {loan.monthlyRepayment && (
                    <p className="text-sm text-gray-600">
                      Monthly Repayment: {formatCurrency(loan.monthlyRepayment)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bank Account Details */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Account Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bankAccounts.map((account, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">{account.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">Bank: {account.bank}</p>
                  <p className="text-lg font-mono font-semibold text-primary-600">
                    {account.accountNumber}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loan Application Modal */}
      <LoanApplicationModal
        isOpen={isLoanModalOpen}
        onClose={() => setIsLoanModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;