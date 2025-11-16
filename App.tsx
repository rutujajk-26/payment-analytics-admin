import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import DashboardPlaceholder from './components/DashboardPlaceholder';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLoginSuccess = useCallback((email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setUserEmail('');
    setIsLoggedIn(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {isLoggedIn ? (
        <div className="py-6">
          <DashboardPlaceholder userEmail={userEmail} onLogout={handleLogout} />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </div>
  );
}

export default App;
