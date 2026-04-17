import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Smartphone, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const { confirmPassword, ...userData } = formData;
      const success = signup(userData);
      if (success) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary-100/50 border border-primary-50"
      >
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6 group">
            <div className="bg-primary-600 p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary-200">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">Subhostbot</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-500 font-medium">
            Join thousands of users using Subhostbot.
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center space-x-3 text-sm font-bold border border-red-100"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-600 transition-colors">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 font-medium focus:bg-white focus:border-primary-600 focus:ring-0 transition-all placeholder:text-gray-400"
                placeholder="Full Name"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-600 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 font-medium focus:bg-white focus:border-primary-600 focus:ring-0 transition-all placeholder:text-gray-400"
                placeholder="Email Address"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-600 transition-colors">
                <Smartphone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 font-medium focus:bg-white focus:border-primary-600 focus:ring-0 transition-all placeholder:text-gray-400"
                placeholder="Phone Number"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-600 transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 font-medium focus:bg-white focus:border-primary-600 focus:ring-0 transition-all placeholder:text-gray-400"
                placeholder="Password"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-600 transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 font-medium focus:bg-white focus:border-primary-600 focus:ring-0 transition-all placeholder:text-gray-400"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-primary-600" />
            <p className="text-xs text-gray-500 font-medium">
              By signing up, you agree to our <Link to="/terms" className="text-primary-600 font-bold underline">Terms</Link> and <Link to="/privacy-policy" className="text-primary-600 font-bold underline">Privacy Policy</Link>.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none shadow-xl shadow-primary-200 transition-all",
              isSubmitting && "opacity-70 cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="flex items-center">
                Create Account <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-primary-600 hover:text-primary-500">
              Log in now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
