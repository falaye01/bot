import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  Wallet, 
  Smartphone, 
  Database, 
  Zap, 
  History, 
  ChevronRight,
  Plus,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Copy,
  CheckCircle2,
  Lock,
  Globe
} from 'lucide-react';
import { cn } from '../utils';
import DashboardLayout from '../components/DashboardLayout';
import SpendingChart from '../components/SpendingChart';
import PurchaseModal from '../components/PurchaseModal';

const Dashboard = () => {
  const { user } = useAuth();
  const [isCopied, setIsSubmitting] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const quickStats = [
    { label: 'Total Spent', value: '₦12,450.00', icon: ArrowUpRight, color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'Total Funded', value: '₦35,000.00', icon: ArrowDownLeft, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Saved Accounts', value: '12', icon: CreditCard, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Balance Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-primary-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary-200"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
              <Wallet className="h-48 w-48" />
            </div>
            
            <div className="relative space-y-10">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-primary-300 font-bold text-sm uppercase tracking-widest flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Secure Wallet
                  </p>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight">{user?.balance}</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-primary-900 p-5 rounded-2xl shadow-xl shadow-primary-950/20"
                >
                  <Plus className="h-7 w-7" />
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-800/40 backdrop-blur-md p-4 rounded-2xl border border-primary-700/50">
                   <p className="text-[10px] font-black text-primary-400 uppercase tracking-wider mb-1">Virtual Account</p>
                   <div className="flex items-center justify-between">
                      <span className="font-bold text-sm tracking-widest">9023485712</span>
                      <button onClick={() => handleCopy('9023485712')} className="text-primary-400 hover:text-white transition-colors">
                        {isCopied ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      </button>
                   </div>
                   <p className="text-[10px] font-bold text-primary-500 mt-1">Wema Bank (Subhostbot)</p>
                </div>
                <div className="bg-primary-800/40 backdrop-blur-md p-4 rounded-2xl border border-primary-700/50">
                   <p className="text-[10px] font-black text-primary-400 uppercase tracking-wider mb-1">Referral Code</p>
                   <div className="flex items-center justify-between">
                      <span className="font-bold text-sm tracking-widest">SUBH-249</span>
                      <button onClick={() => handleCopy('SUBH-249')} className="text-primary-400 hover:text-white transition-colors">
                         <Copy className="h-4 w-4" />
                      </button>
                   </div>
                   <p className="text-[10px] font-bold text-primary-500 mt-1">Share to earn ₦500</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {quickStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className={cn("p-4 rounded-2xl", stat.bg, stat.color)}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-xl font-black text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5 text-gray-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mid Section: Charts and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Analytical Spending Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Spending Analytics</h3>
                <p className="text-sm text-gray-400 font-medium">Your activity over the last 7 days</p>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-xl">
                 <button className="px-4 py-1.5 bg-white text-primary-600 rounded-lg text-xs font-bold shadow-sm">Week</button>
                 <button className="px-4 py-1.5 text-gray-400 text-xs font-bold hover:text-gray-600 transition-colors">Month</button>
              </div>
            </div>
            <SpendingChart />
          </motion.div>

          {/* Quick Action Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              { name: 'Data', icon: Database, color: 'bg-blue-500' },
              { name: 'Airtime', icon: Smartphone, color: 'bg-yellow-500' },
              { name: 'Power', icon: Zap, color: 'bg-orange-500' },
              { name: 'TV', icon: CreditCard, color: 'bg-purple-500' },
              { name: 'Global', icon: Globe, color: 'bg-green-500' },
              { name: 'Support', icon: MessageSquare, color: 'bg-primary-600' },
            ].map((action, i) => (
              <motion.button
                key={action.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (i * 0.05) }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setActiveModal(action.name)}
                className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-100 transition-all text-center space-y-3 group"
              >
                <div className={`${action.color} w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg shadow-gray-200 group-hover:rotate-12 transition-transform`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <span className="block font-black text-sm text-gray-900 tracking-tight">{action.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom Section: Transactions and API Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Transactions */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent Activity</h3>
              <button className="text-primary-600 font-bold text-sm hover:underline flex items-center">
                Full History <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { type: 'Data Bundle', network: 'MTN', amount: '-₦1,500', date: 'Today, 10:45 AM', status: 'Success' },
                { type: 'Airtime', network: 'Airtel', amount: '-₦500', date: 'Yesterday, 08:20 PM', status: 'Success' },
                { type: 'Wallet Funding', network: 'Bank Transfer', amount: '+₦10,000', date: 'Yesterday, 02:15 PM', status: 'Success' },
                { type: 'Cable TV', network: 'DSTV', amount: '-₦9,500', date: 'Oct 12, 11:30 AM', status: 'Failed' },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-[1.5rem] hover:bg-gray-50 transition-all group cursor-pointer border border-transparent hover:border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "p-3 rounded-xl",
                      tx.status === 'Success' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    )}>
                      {tx.amount.startsWith('+') ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 leading-none">{tx.type} <span className="text-gray-400 font-bold text-xs ml-1">({tx.network})</span></p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1.5">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn("font-black text-lg tracking-tight", tx.amount.startsWith('+') ? 'text-green-500' : 'text-gray-900')}>{tx.amount}</p>
                    <div className="flex items-center justify-end space-x-1 mt-1">
                       <div className={cn("h-1.5 w-1.5 rounded-full", tx.status === 'Success' ? "bg-green-500" : "bg-red-500")}></div>
                       <p className={cn("text-[10px] font-black uppercase tracking-widest", tx.status === 'Success' ? "text-green-500" : "text-red-500")}>{tx.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* API Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 text-white relative overflow-hidden"
          >
             <div className="relative space-y-6">
                <div className="flex items-center space-x-3 text-primary-400">
                   <Lock className="h-5 w-5" />
                   <span className="text-xs font-black uppercase tracking-widest">Developer Access</span>
                </div>
                <h4 className="text-2xl font-black tracking-tight leading-tight">Integrate Subhostbot API into your platform</h4>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  Start automating your VTU business today with our ultra-fast REST API.
                </p>
                <div className="space-y-3 pt-2">
                   <button className="w-full bg-primary-600 hover:bg-primary-700 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center space-x-2">
                      <span>View API Docs</span>
                      <ArrowUpRight className="h-4 w-4" />
                   </button>
                   <button className="w-full bg-white/10 hover:bg-white/20 py-4 rounded-2xl font-black text-sm transition-all">
                      Generate API Key
                   </button>
                </div>
             </div>
             <div className="absolute -bottom-12 -right-12 h-40 w-40 bg-primary-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Purchase Flow Modal */}
      <PurchaseModal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        service={activeModal} 
      />
    </DashboardLayout>

  );
};

export default Dashboard;
