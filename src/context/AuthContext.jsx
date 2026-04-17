import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user on load
    const savedUser = localStorage.getItem('subhost_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login - in a real app this would call an API
    const mockUser = {
      id: '1',
      name: 'Subhost User',
      email: email,
      balance: '₦25,000.00',
      avatar: null,
    };
    setUser(mockUser);
    localStorage.setItem('subhost_user', JSON.stringify(mockUser));
    return true;
  };

  const signup = (userData) => {
    // Mock signup
    const mockUser = {
      id: '1',
      ...userData,
      balance: '₦0.00',
      avatar: null,
    };
    setUser(mockUser);
    localStorage.setItem('subhost_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('subhost_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
