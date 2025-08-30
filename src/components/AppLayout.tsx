import React, { useState } from 'react';
import { prayers } from '@/data/prayers';
import PrayerCard from './PrayerCard';
import NavigationTabs from './NavigationTabs';
import QuoteSection from './QuoteSection';
import PrayerStats from './PrayerStats';
import DevotionalSection from './DevotionalSection';
import InteractivePrayerGuide from './InteractivePrayerGuide';

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('employment');
  const activePrayer = prayers.find(prayer => prayer.id === activeTab) || prayers[0];
  
  // Fix the navigation by passing prayer objects instead of just titles
  const handleTabChange = (prayerId: string) => {
    setActiveTab(prayerId);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.7), rgba(99, 102, 241, 0.7)), url('https://d64gsuwffb70l.cloudfront.net/68b2ee4fd8f525bc84aa877d_1756556921587_7a64e368.webp')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
              Kingwil Prayers
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
              Powerful, focused prayers for every area of your life
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 -mt-8 relative z-10">
        {/* Navigation */}
        <div className="mb-8">
          <NavigationTabs 
            activeTab={activeTab}
            onTabChange={handleTabChange}
            prayers={prayers}
          />
        </div>
        {/* Daily Devotional */}
        <DevotionalSection />

        {/* Interactive Prayer Guide */}
        <InteractivePrayerGuide />

        {/* Prayer Display */}
        <div className="mb-12">
          <PrayerCard 
            title={activePrayer.title}
            content={activePrayer.content}
            image={activePrayer.image}
          />
        </div>

        {/* Inspirational Quote */}
        <QuoteSection />

        {/* Prayer Stats */}
        <PrayerStats />

        {/* Footer */}
        <footer className="text-center text-slate-600 py-8">
          <p className="text-lg font-medium mb-2">May these prayers bring you peace and blessing</p>
          <p className="text-sm opacity-75">© 2024 Kingwil Prayers. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;