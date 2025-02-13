import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { MapSelector } from './MapSelector';
import { YearSlider } from './YearSlider';
import { Coordinates } from '../types';

interface GuessFormProps {
  onSubmit: (coords: Coordinates, year: number) => void;
  disabled: boolean;
}

export const GuessForm: React.FC<GuessFormProps> = ({ onSubmit, disabled }) => {
  const [selectedLocation, setSelectedLocation] = useState<Coordinates | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(1970);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLocation) {
      onSubmit(selectedLocation, selectedYear);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 md:space-y-6">
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-base md:text-lg font-medium text-gray-900">Select Location</h3>
        <MapSelector
          onLocationSelect={setSelectedLocation}
          selectedLocation={selectedLocation}
          disabled={disabled}
        />
      </div>

      <YearSlider
        value={selectedYear}
        onChange={setSelectedYear}
        disabled={disabled}
      />

      <button
        type="submit"
        disabled={disabled || !selectedLocation}
        className="w-full flex items-center justify-center px-4 py-2 md:py-3 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
      >
        Submit Guess <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
};