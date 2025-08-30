import React from 'react';

interface PrayerCardProps {
  title: string;
  content: string;
  image: string;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ title, content, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto transition-all duration-500 ease-in-out opacity-100 animate-fade-in border border-blue-100">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md flex-shrink-0 mx-auto md:mx-0">
          <img 
            src={image} 
            alt={`Prayer for ${title}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-playfair text-slate-800 mb-6 leading-tight">
            Prayer for {title}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-inter">
              {content}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-blue-100">
            <p className="text-blue-600 font-medium text-sm italic">
              "The prayer of a righteous person is powerful and effective." - James 5:16
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;