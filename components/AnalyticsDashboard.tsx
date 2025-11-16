import React from 'react';

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Analytics Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Comprehensive analytics and insights into payment trends, revenue, and performance metrics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">$2,456,789</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">This Month</span>
                <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">$456,123</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Growth</span>
                <span className="text-lg font-semibold text-green-600 dark:text-green-400">+18.5%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Avg Transaction Value</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">$234.56</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Peak Hour</span>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">2:00 PM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                <span className="text-lg font-semibold text-green-600 dark:text-green-400">87.3%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Top Payment Method</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Credit Card</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">68% of transactions</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Most Active Region</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">North America</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">45% of total volume</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Customer Satisfaction</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">4.8/5.0</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Based on 12,345 reviews</div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trend Analysis</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Weekly Growth Trend</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">↑ 12.5%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue Trend</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">↑ 18.2%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-green-600 dark:bg-green-400 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Transaction Volume</span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">↑ 8.7%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

