import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '../utils';

const PurchaseModal = ({ isOpen, onClose, service }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    number: '',
    amount: '',
    plan: '',
    network: 'MTN'
  });
  const [isLoading, setIsLoading] = useState(false);

  const networks = ['MTN', 'Airtel', 'GLO', '9mobile'];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleProcess = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setStep(4); // Success
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({ number: '', amount: '', plan: '', network: 'MTN' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-12">
            <button 
              onClick={resetAndClose}
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-xl transition-all"
            >
              <X className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">Buy {service}</h3>
                    <p className="text-gray-500 font-medium mt-2">Enter the details for your transaction.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Select Network</label>
                      <div className="grid grid-cols-4 gap-3">
                        {networks.map(n => (
                          <button
                            key={n}
                            onClick={() => setFormData({...formData, network: n})}
                            className={cn(
                              "py-3 rounded-xl font-bold text-xs transition-all border-2",
                              formData.network === n 
                                ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-200" 
                                : "bg-gray-50 text-gray-400 border-transparent hover:border-gray-200"
                            )}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. 08012345678"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-600 outline-none transition-all font-bold text-gray-900"
                        value={formData.number}
                        onChange={(e) => setFormData({...formData, number: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={!formData.number}
                      className="w-full bg-primary-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all disabled:opacity-50 disabled:shadow-none"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">Select Amount</h3>
                    <p className="text-gray-500 font-medium mt-2">Choose how much you want to recharge.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[100, 200, 500, 1000, 2000, 5000].map(amt => (
                      <button
                        key={amt}
                        onClick={() => { setFormData({...formData, amount: amt}); handleNext(); }}
                        className="p-6 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 border-2 border-transparent hover:border-primary-100 rounded-3xl transition-all group"
                      >
                        <p className="text-2xl font-black tracking-tight">₦{amt}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase mt-1 group-hover:text-primary-400">Select</p>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full text-gray-400 font-bold hover:text-gray-600 transition-colors"
                  >
                    Go Back
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">Confirm</h3>
                    <p className="text-gray-500 font-medium mt-2">Review your transaction details.</p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-3xl space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200/50">
                       <span className="text-gray-400 font-bold text-sm uppercase">Service</span>
                       <span className="text-gray-900 font-black">{service} ({formData.network})</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200/50">
                       <span className="text-gray-400 font-bold text-sm uppercase">Phone</span>
                       <span className="text-gray-900 font-black">{formData.number}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200/50">
                       <span className="text-gray-400 font-bold text-sm uppercase">Amount</span>
                       <span className="text-gray-900 font-black text-xl">₦{formData.amount}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                       <span className="text-gray-400 font-bold text-sm uppercase">Status</span>
                       <span className="text-green-500 font-black text-sm uppercase tracking-widest">Ready</span>
                    </div>
                  </div>

                  <button
                    onClick={handleProcess}
                    disabled={isLoading}
                    className="w-full bg-primary-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center justify-center space-x-3"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Pay ₦{formData.amount}</span>
                    )}
                  </button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8"
                >
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="bg-green-100 p-6 rounded-full"
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">Success!</h3>
                    <p className="text-gray-500 font-medium mt-2">Your ₦{formData.amount} {service} has been delivered.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl text-left text-sm font-bold text-gray-500 space-y-2">
                     <p>Transaction ID: <span className="text-gray-900">SUB-TX-9023485</span></p>
                     <p>Receipt sent to: <span className="text-gray-900">subhostbot@gmail.com</span></p>
                  </div>

                  <button
                    onClick={resetAndClose}
                    className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-gray-200 hover:bg-black transition-all"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PurchaseModal;
