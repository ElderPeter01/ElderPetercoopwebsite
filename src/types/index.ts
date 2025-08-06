export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  membershipNumber: string;
  memberType: 'casual' | 'staff';
  role: UserRole;
  dateJoined: string;
  isActive: boolean;
  profilePicture?: string;
}

export type UserRole = 
  | 'casual_member'
  | 'staff_member'
  | 'president'
  | 'vice_president'
  | 'secretary'
  | 'treasurer'
  | 'manager'
  | 'admin_officer'
  | 'account_manager';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  memberType: 'casual' | 'staff';
}

export interface Savings {
  id: string;
  userId: string;
  amount: number;
  date: string;
  description: string;
  type: 'deposit' | 'withdrawal';
}

export interface Contribution {
  id: string;
  userId: string;
  amount: number;
  date: string;
  month: string;
  year: number;
  status: 'paid' | 'pending' | 'overdue';
}

export interface LoanApplication {
  id: string;
  userId: string;
  amount: number;
  purpose: string;
  duration: number; // in months
  guarantor1Name: string;
  guarantor1Phone: string;
  guarantor1Email: string;
  guarantor2Name: string;
  guarantor2Phone: string;
  guarantor2Email: string;
  status: 'pending' | 'approved' | 'declined' | 'disbursed';
  applicationDate: string;
  approvedDate?: string;
  approvedBy?: string;
  monthlyRepayment?: number;
  totalRepayment?: number;
}

export interface BankAccount {
  name: string;
  bank: string;
  accountNumber: string;
  purpose: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}