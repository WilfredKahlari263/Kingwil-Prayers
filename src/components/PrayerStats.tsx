import React from 'react';

const PrayerStats: React.FC = () => {
  const stats = [
    { number: '7', label: 'Prayer Categories' },
    { number: '∞', label: 'Blessings Available' },
    { number: '24/7', label: 'Divine Access' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mx-4 mb-8 text-white">
      <div className="grid grid-cols-3 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
            <div className="text-sm md:text-base opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerStats;