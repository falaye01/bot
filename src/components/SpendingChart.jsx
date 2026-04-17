import React from 'react';
import { motion } from 'framer-motion';

const SpendingChart = () => {
  // Mock data for the last 7 days
  const data = [45, 78, 32, 95, 54, 88, 65];
  const maxValue = Math.max(...data);
  const height = 120;
  const width = 300;
  
  return (
    <div className="w-full h-[150px] relative mt-6">
      <div className="flex items-end justify-between h-[120px] w-full px-2">
        {data.map((val, i) => (
          <div key={i} className="flex flex-col items-center flex-1 space-y-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(val / maxValue) * 100}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="w-4/5 max-w-[32px] bg-primary-100 rounded-lg relative group cursor-pointer hover:bg-primary-600 transition-colors"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ₦{val * 100}
              </div>
            </motion.div>
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendingChart;
