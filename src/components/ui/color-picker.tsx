
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const colorOptions = [
  '#8075FF', // Primary Purple
  '#A992FF', // Secondary Purple
  '#D6BCFA', // Light Purple
  '#1A1F2C', // Dark Purple
  '#F2FCE2', // Soft Green
  '#FEF7CD', // Soft Yellow
  '#FEC6A1', // Soft Orange
  '#E5DEFF', // Soft Purple
  '#FFDEE2', // Soft Pink
  '#FDE1D3', // Soft Peach
  '#D3E4FD', // Soft Blue
  '#F1F0FB', // Soft Gray
  '#8B5CF6', // Vivid Purple
  '#D946EF', // Magenta Pink
  '#F97316', // Bright Orange
  '#0EA5E9', // Ocean Blue
  '#FFFFFF', // White
  '#000000', // Black
];

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState<string>(value || colorOptions[0]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onChange(color);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md border border-input shadow-sm",
            className
          )}
          style={{ backgroundColor: selectedColor }}
          aria-label="Select color"
        />
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3">
        <div className="grid grid-cols-6 gap-2">
          {colorOptions.map((color) => (
            <button
              key={color}
              className={cn(
                "h-6 w-6 rounded-md border border-input shadow-sm transition-all hover:scale-110",
                selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
              )}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
