import React from 'react';

const TransactionsDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Transactions Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          View and manage all payment transactions, track status, and monitor transaction flow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">Total Transactions</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">45,678</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">This month</div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Successful</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">44,123</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">96.6%</div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <div className="text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-1">Pending</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1,234</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">2.7%</div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Failed</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">321</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">0.7%</div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3">Transaction ID</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'TXN-001234', amount: '$1,234.56', status: 'Success', date: '2024-01-15 10:30' },
                  { id: 'TXN-001235', amount: '$567.89', status: 'Success', date: '2024-01-15 10:28' },
                  { id: 'TXN-001236', amount: '$2,345.67', status: 'Pending', date: '2024-01-15 10:25' },
                  { id: 'TXN-001237', amount: '$890.12', status: 'Success', date: '2024-01-15 10:22' },
                  { id: 'TXN-001238', amount: '$1,456.78', status: 'Success', date: '2024-01-15 10:20' },
                ].map((txn) => (
                  <tr key={txn.id} className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{txn.id}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{txn.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        txn.status === 'Success' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsDashboard;

