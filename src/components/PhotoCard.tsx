import React from 'react';
import { Image } from 'lucide-react';

interface PhotoCardProps {
  imageUrl: string;
  isRevealed: boolean;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl, isRevealed }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Sports moment"
          className={`w-full h-48 sm:h-64 md:h-[400px] object-cover transition-opacity duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-70'
          }`}
        />
      ) : (
        <div className="w-full h-48 sm:h-64 md:h-[400px] bg-gray-200 flex items-center justify-center">
          <Image className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};