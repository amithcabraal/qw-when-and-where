import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreBoardProps {
  score: number;
  totalPhotos: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, totalPhotos }) => {
  return (
    <div className="flex items-center space-x-2 text-base md:text-lg font-semibold">
      <Trophy className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
      <span>
        Score: {score}/{totalPhotos}
      </span>
    </div>
  );
};