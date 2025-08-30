import React from 'react';
import { Prayer } from '@/data/prayers';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  prayers: Prayer[];
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, onTabChange, prayers }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        {prayers.map((prayer) => (
          <button
            key={prayer.id}
            onClick={() => onTabChange(prayer.id)}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
              activeTab === prayer.id
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {prayer.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;