import React from 'react';

const OperationsDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Operations Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Monitor and manage system operations, performance metrics, and operational status.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">Active Operations</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1,234</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">+12% from last week</div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Success Rate</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">98.5%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">+0.3% improvement</div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Avg Response Time</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">142ms</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">-5ms faster</div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Operations</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Operation #{1000 + item}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Processing payment transaction</div>
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">Completed</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsDashboard;

