import React, { useState } from 'react';
import Navigation from './Navigation';

type DashboardType = 'operations' | 'transactions' | 'analytics';

interface DashboardPlaceholderProps {
  userEmail: string;
  onLogout: () => void;
}

const DashboardPlaceholder: React.FC<DashboardPlaceholderProps> = ({ userEmail, onLogout }) => {
  const [activeDashboard, setActiveDashboard] = useState<DashboardType>('operations');

  return (
    <div className="w-full max-w-7xl p-6 sm:p-8 space-y-6 mx-4">
      <Navigation
        activeDashboard={activeDashboard}
        onDashboardChange={setActiveDashboard}
        onLogout={onLogout}
        userEmail={userEmail}
      />

      <div className="min-h-[600px] w-full rounded-lg overflow-hidden shadow">
        {activeDashboard === 'operations' && (
          <iframe
            src="/operations/index.html"
            className="w-full h-[600px] border-0"
            title="Operations Dashboard"
          ></iframe>
        )}

        {activeDashboard === 'transactions' && (
          <iframe
            src="/transaction/index.html"
            className="w-full h-[600px] border-0"
            title="Transactions Dashboard"
          ></iframe>
        )}

        {activeDashboard === 'analytics' && (
          <iframe
            src="/analytics/index.html"
            className="w-full h-[600px] border-0"
            title="Analytics Dashboard"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default DashboardPlaceholder;
