'use client'
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    role: null,
    loading: true,
  });

  useEffect(() => {
    // Check if the user is already authenticated
    const checkAuth = async () => {
      try {
        const response = await axios.get('/check-auth.php');
        if (response.data.isAuthenticated) {
          setAuthState({
            isAuthenticated: true,
            role: response.data.role,
            loading: false,
          });
        } else {
          setAuthState({ isAuthenticated: false, role: null, loading: false });
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        setAuthState({ isAuthenticated: false, role: null, loading: false });
      }
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('/login.php', { username, password });
      if (response.data.status === 'success') {
        setAuthState({ isAuthenticated: true, role: response.data.role });
      }
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      return { status: 'error', message: 'An error occurred' };
    }
  };

  const logout = async () => {
    try {
      await axios.post('/logout.php');
      setAuthState({ isAuthenticated: false, role: null });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
