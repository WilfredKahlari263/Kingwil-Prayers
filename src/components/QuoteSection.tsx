import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mx-4 mb-8 shadow-lg">
      <div className="text-center">
        <div className="text-6xl text-blue-300 mb-4">"</div>
        <blockquote className="text-xl md:text-2xl text-slate-700 font-medium italic mb-6 leading-relaxed">
          "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."
        </blockquote>
        <cite className="text-blue-600 font-semibold text-lg">Matthew 7:7</cite>
      </div>
    </div>
  );
};

export default QuoteSection;