import React from 'react';

interface YearSliderProps {
  value: number;
  onChange: (year: number) => void;
  disabled: boolean;
}

export const YearSlider: React.FC<YearSliderProps> = ({ value, onChange, disabled }) => {
  return (
    <div className="w-full space-y-2">
      <label className="block text-sm md:text-base font-medium text-gray-700">
        Select Year: {value}
      </label>
      <input
        type="range"
        min="1900"
        max="2024"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        disabled={disabled}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs md:text-sm text-gray-500">
        <span>1900</span>
        <span>2024</span>
      </div>
    </div>
  );
};