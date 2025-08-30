import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const dailyTopics = [
  "Gratitude and Thanksgiving",
  "Guidance and Wisdom", 
  "Family and Relationships",
  "Health and Healing",
  "Provision and Blessing",
  "Peace and Comfort",
  "Strength and Courage",
  "Forgiveness and Grace",
  "Purpose and Direction",
  "Protection and Safety",
  "Joy and Hope",
  "Faith and Trust"
];

const InteractivePrayerGuide: React.FC = () => {
  const [currentTopic, setCurrentTopic] = useState(dailyTopics[0]);
  const [personalPrayer, setPersonalPrayer] = useState('');
  const [showPersonalPrayer, setShowPersonalPrayer] = useState(false);

  const nextPrayer = () => {
    const currentIndex = dailyTopics.indexOf(currentTopic);
    const nextIndex = (currentIndex + 1) % dailyTopics.length;
    setCurrentTopic(dailyTopics[nextIndex]);
  };

  const togglePersonalPrayer = () => {
    setShowPersonalPrayer(!showPersonalPrayer);
  };

  return (
    <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-green-800">Interactive Prayer Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-green-900">Today's Prayer Focus:</h3>
          <p className="text-xl text-green-700 font-medium">{currentTopic}</p>
        </div>
        
        <div className="flex gap-2 mb-4">
          <Button onClick={nextPrayer} className="bg-green-600 hover:bg-green-700">
            Next Prayer Topic
          </Button>
          <Button onClick={togglePersonalPrayer} variant="outline">
            My Prayer
          </Button>
        </div>

        {showPersonalPrayer && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-green-800">Add Your Personal Prayer Request:</h4>
            <Textarea
              placeholder="Write your personal prayer request here..."
              value={personalPrayer}
              onChange={(e) => setPersonalPrayer(e.target.value)}
              className="min-h-[100px] mb-2"
            />
            <p className="text-sm text-gray-600">Your prayers are between you and God. This is a private space for reflection.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractivePrayerGuide;