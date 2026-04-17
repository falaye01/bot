import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  Wallet, 
  Smartphone, 
  Database, 
  Zap, 
  History, 
  Settings, 
  LogOut, 
  ChevronRight,
  Plus,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  const actions = [
    { name: 'Buy Data', icon: <Database className="h-6 w-6" />, color: 'bg-blue-500' },
    { name: 'Airtime', icon: <Smartphone className="h-6 w-6" />, color: 'bg-yellow-500' },
    { name: 'Electricity', icon: <Zap className="h-6 w-6" />, color: 'bg-orange-500' },
    { name: 'Cable TV', icon: <CreditCard className="h-6 w-6" />, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-100 pt-12 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 -skew-x-12 translate-x-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                Welcome, <span className="text-primary-600">{user.name.split(' ')[0]}</span>!
              </h1>
              <p className="text-gray-500 font-medium">Here's what's happening with your account today.</p>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-400 hover:text-red-500 font-bold transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Dashboard Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Wallet Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary-200"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Wallet className="h-32 w-32" />
              </div>
              
              <div className="relative space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-primary-300 font-bold text-sm uppercase tracking-widest">Available Balance</p>
                    <h2 className="text-5xl font-black tracking-tight">{user.balance}</h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-primary-900 p-4 rounded-2xl shadow-xl shadow-primary-950/20"
                  >
                    <Plus className="h-6 w-6" />
                  </motion.button>
                </div>
                
                <div className="flex items-center space-x-6 pt-4 border-t border-primary-800">
                  <div className="flex items-center space-x-2 text-primary-200 text-sm font-bold">
                    <TrendingUp className="h-4 w-4" />
                    <span>+2.5% this month</span>
                  </div>
                  <div className="text-primary-400 font-medium text-sm">Last fund: 2 hours ago</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {actions.map((action, i) => (
                <motion.button
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-100 transition-all text-center space-y-4 group"
                >
                  <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <span className="block font-bold text-gray-900">{action.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Recent Transactions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent Transactions</h3>
                <button className="text-primary-600 font-bold text-sm hover:underline flex items-center">
                  View All <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-6">
                {[
                  { type: 'Data Bundle', network: 'MTN', amount: '-₦1,500', date: 'Today, 10:45 AM', status: 'Success' },
                  { type: 'Airtime', network: 'Airtel', amount: '-₦500', date: 'Yesterday, 08:20 PM', status: 'Success' },
                  { type: 'Wallet Funding', network: 'Bank Transfer', amount: '+₦10,000', date: 'Yesterday, 02:15 PM', status: 'Success' },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                        <History className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{tx.type} ({tx.network})</p>
                        <p className="text-xs text-gray-400 font-medium">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={cn("font-bold", tx.amount.startsWith('+') ? 'text-green-500' : 'text-gray-900')}>{tx.amount}</p>
                      <p className="text-[10px] font-black uppercase text-green-500 tracking-widest">{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Quick Settings</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all group">
                  <div className="flex items-center space-x-4">
                    <Settings className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
                    <span className="font-bold text-gray-700">Profile Settings</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-300" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all group">
                  <div className="flex items-center space-x-4">
                    <History className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
                    <span className="font-bold text-gray-700">API Documentation</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-300" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary-50 rounded-[2.5rem] p-8 border border-primary-100 space-y-6"
            >
              <h3 className="text-xl font-black text-primary-900 tracking-tight">Help & Support</h3>
              <p className="text-primary-700 text-sm font-medium leading-relaxed">
                Need help with a transaction? Our support team is available 24/7 on WhatsApp.
              </p>
              <button className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all">
                Contact Support
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
