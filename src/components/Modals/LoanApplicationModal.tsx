import React, { useState } from 'react';
import { X, DollarSign, FileText, User, Phone, Mail } from 'lucide-react';

interface LoanApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoanApplicationModal: React.FC<LoanApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    duration: '12',
    guarantor1Name: '',
    guarantor1Phone: '',
    guarantor1Email: '',
    guarantor2Name: '',
    guarantor2Phone: '',
    guarantor2Email: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid loan amount';
    }

    if (!formData.purpose.trim()) {
      newErrors.purpose = 'Please specify the purpose of the loan';
    }

    if (!formData.guarantor1Name.trim()) {
      newErrors.guarantor1Name = 'First guarantor name is required';
    }

    if (!formData.guarantor1Phone.trim()) {
      newErrors.guarantor1Phone = 'First guarantor phone is required';
    }

    if (!formData.guarantor1Email.trim()) {
      newErrors.guarantor1Email = 'First guarantor email is required';
    }

    if (!formData.guarantor2Name.trim()) {
      newErrors.guarantor2Name = 'Second guarantor name is required';
    }

    if (!formData.guarantor2Phone.trim()) {
      newErrors.guarantor2Phone = 'Second guarantor phone is required';
    }

    if (!formData.guarantor2Email.trim()) {
      newErrors.guarantor2Email = 'Second guarantor email is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form and close modal
      setFormData({
        amount: '',
        purpose: '',
        duration: '12',
        guarantor1Name: '',
        guarantor1Phone: '',
        guarantor1Email: '',
        guarantor2Name: '',
        guarantor2Phone: '',
        guarantor2Email: '',
      });
      onClose();
      
      // Show success message (you might want to use a toast notification)
      alert('Loan application submitted successfully!');
    } catch (error) {
      setErrors({ general: 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Apply for Loan</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Loan Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <DollarSign className="mr-2" size={20} />
              Loan Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount (₦)
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1000"
                  step="1000"
                  className={`input-field ${errors.amount ? 'border-red-300' : ''}`}
                  placeholder="50000"
                  value={formData.amount}
                  onChange={handleChange}
                />
                {errors.amount && (
                  <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
                )}
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (Months)
                </label>
                <select
                  id="duration"
                  name="duration"
                  className="input-field"
                  value={formData.duration}
                  onChange={handleChange}
                >
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                  <option value="18">18 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                Purpose of Loan
              </label>
              <textarea
                id="purpose"
                name="purpose"
                rows={3}
                className={`input-field ${errors.purpose ? 'border-red-300' : ''}`}
                placeholder="Please describe the purpose of this loan..."
                value={formData.purpose}
                onChange={handleChange}
              />
              {errors.purpose && (
                <p className="mt-1 text-sm text-red-600">{errors.purpose}</p>
              )}
            </div>
          </div>

          {/* First Guarantor */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="mr-2" size={20} />
              First Guarantor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="guarantor1Name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="guarantor1Name"
                  name="guarantor1Name"
                  type="text"
                  className={`input-field ${errors.guarantor1Name ? 'border-red-300' : ''}`}
                  placeholder="John Doe"
                  value={formData.guarantor1Name}
                  onChange={handleChange}
                />
                {errors.guarantor1Name && (
                  <p className="mt-1 text-sm text-red-600">{errors.guarantor1Name}</p>
                )}
              </div>

              <div>
                <label htmlFor="guarantor1Phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="guarantor1Phone"
                  name="guarantor1Phone"
                  type="tel"
                  className={`input-field ${errors.guarantor1Phone ? 'border-red-300' : ''}`}
                  placeholder="+234 806 546 7675"
                  value={formData.guarantor1Phone}
                  onChange={handleChange}
                />
                {errors.guarantor1Phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.guarantor1Phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="guarantor1Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="guarantor1Email"
                  name="guarantor1Email"
                  type="email"
                  className={`input-field ${errors.guarantor1Email ? 'border-red-300' : ''}`}
                  placeholder="john@example.com"
                  value={formData.guarantor1Email}
                  onChange={handleChange}
                />
                {errors.guarantor1Email && (
                  <p className="mt-1 text-sm text-red-600">{errors.guarantor1Email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Second Guarantor */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="mr-2" size={20} />
              Second Guarantor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="guarantor2Name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="guarantor2Name"
                  name="guarantor2Name"
                  type="text"
                  className={`input-field ${errors.guarantor2Name ? 'border-red-300' : ''}`}
                  placeholder="Jane Smith"
                  value={formData.guarantor2Name}
                  onChange={handleChange}
                />
                {errors.guarantor2Name && (
                  <p className="mt-1 text-sm text-red-600">{errors.guarantor2Name}</p>
                )}
              </div>

              <div>
                <label htmlFor="guarantor2Phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="guarantor2Phone"
                  name="guarantor2Phone"
                  type="tel"
                  className={`input-field ${errors.guarantor2Phone ? 'border-red-300' : ''}`}
                  placeholder="+234 806 546 7675"
                  value={formData.guarantor2Phone}
                  onChange={handleChange}
                />
                {errors.guarantor2Phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.guarantor2Phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="guarantor2Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="guarantor2Email"
                  name="guarantor2Email"
                  type="email"
                  className={`input-field ${errors.guarantor2Email ? 'border-red-300' : ''}`}
                  placeholder="jane@example.com"
                  value={formData.guarantor2Email}
                  onChange={handleChange}
                />
                {errors.guarantor2Email && (
                  <p className="mt-1 text-sm text-red-600">{errors.guarantor2Email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplicationModal;