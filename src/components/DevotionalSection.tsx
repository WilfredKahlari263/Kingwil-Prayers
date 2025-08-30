import React, { useState, useEffect } from 'react';
import { januaryDevotionals, DevotionalEntry } from '@/data/devotional-january';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DevotionalSection: React.FC = () => {
  const [currentDevotional, setCurrentDevotional] = useState<DevotionalEntry>(januaryDevotionals[0]);
  const [devotionalIndex, setDevotionalIndex] = useState(0);

  useEffect(() => {
    // Set today's devotional based on current date
    const today = new Date();
    const dayOfMonth = today.getDate();
    const index = Math.min(dayOfMonth - 1, januaryDevotionals.length - 1);
    setDevotionalIndex(index);
    setCurrentDevotional(januaryDevotionals[index]);
  }, []);

  const nextDevotional = () => {
    const nextIndex = (devotionalIndex + 1) % januaryDevotionals.length;
    setDevotionalIndex(nextIndex);
    setCurrentDevotional(januaryDevotionals[nextIndex]);
  };

  const prevDevotional = () => {
    const prevIndex = devotionalIndex === 0 ? januaryDevotionals.length - 1 : devotionalIndex - 1;
    setDevotionalIndex(prevIndex);
    setCurrentDevotional(januaryDevotionals[prevIndex]);
  };

  return (
    <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-purple-800">Daily Devotional</CardTitle>
        <p className="text-purple-600">{currentDevotional.date}</p>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-3 text-purple-900">{currentDevotional.title}</h3>
        <p className="text-sm font-medium mb-3 text-purple-700 italic">{currentDevotional.verse}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">{currentDevotional.content}</p>
        <div className="flex gap-2">
          <Button onClick={prevDevotional} variant="outline" size="sm">Previous</Button>
          <Button onClick={nextDevotional} variant="outline" size="sm">Next</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DevotionalSection;