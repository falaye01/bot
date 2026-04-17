import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Smartphone, 
  Database, 
  Zap, 
  History, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  User, 
  ShieldCheck,
  CreditCard,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils';

const SidebarItem = ({ icon: Icon, label, href, active, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className={cn(
      "flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all group",
      active 
        ? "bg-primary-600 text-white shadow-lg shadow-primary-200" 
        : "text-gray-500 hover:bg-primary-50 hover:text-primary-600"
    )}
  >
    <Icon className={cn("h-5 w-5", active ? "text-white" : "group-hover:text-primary-600")} />
    <span className="font-bold">{label}</span>
  </Link>
);

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Database, label: 'Buy Data', href: '/dashboard/data' },
    { icon: Smartphone, label: 'Airtime', href: '/dashboard/airtime' },
    { icon: Zap, label: 'Bills', href: '/dashboard/bills' },
    { icon: History, label: 'Transactions', href: '/dashboard/history' },
    { icon: User, label: 'Profile', href: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 lg:relative lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center space-x-3 mb-12 px-2">
            <div className="bg-primary-600 p-2 rounded-xl">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">Subhostbot</span>
          </div>

          <nav className="flex-grow space-y-2">
            {menuItems.map((item) => (
              <SidebarItem 
                key={item.label} 
                {...item} 
                active={location.pathname === item.href}
                onClick={() => setIsSidebarOpen(false)}
              />
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-100 space-y-2">
             <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all font-bold"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 h-20 flex items-center justify-between px-4 sm:px-8 flex-shrink-0 z-30">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-500 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-gray-400 font-bold text-sm uppercase tracking-widest">
             <span>Dashboard</span>
             <X className="h-3 w-3 rotate-45" />
             <span className="text-gray-900">{menuItems.find(i => i.href === location.pathname)?.label || 'Overview'}</span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="relative p-2 text-gray-400 hover:text-primary-600 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            
            <div className="h-8 w-[1px] bg-gray-100 hidden sm:block"></div>
            
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-gray-900 leading-none">{user?.name}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Free Tier</p>
              </div>
              <div className="h-10 w-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-black group-hover:scale-105 transition-transform">
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
