import React from 'react';
import { OperationsIcon, TransactionsIcon, AnalyticsIcon, LogoutIcon } from './Icons';

type DashboardType = 'operations' | 'transactions' | 'analytics';

interface NavigationProps {
  activeDashboard: DashboardType;
  onDashboardChange: (dashboard: DashboardType) => void;
  onLogout: () => void;
  userEmail: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeDashboard, onDashboardChange, onLogout, userEmail }) => {
  const navItems = [
    { id: 'operations' as DashboardType, label: 'Operations', icon: OperationsIcon },
    { id: 'transactions' as DashboardType, label: 'Transactions', icon: TransactionsIcon },
    { id: 'analytics' as DashboardType, label: 'Analytics', icon: AnalyticsIcon },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Logged in as <span className="font-medium text-indigo-600 dark:text-indigo-400">{userEmail}</span>
          </p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <LogoutIcon />
          Logout
        </button>
      </div>
      
      <nav className="flex flex-wrap gap-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeDashboard === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onDashboardChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md focus:ring-indigo-500'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
              }`}
            >
              <Icon />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;

