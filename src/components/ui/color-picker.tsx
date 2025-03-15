
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const defaultColors = [
  "#000000", // Black
  "#FFFFFF", // White
  "#9b87f5", // Primary Purple
  "#7E69AB", // Secondary Purple
  "#F97316", // Orange
  "#EF4444", // Red
  "#10B981", // Green
  "#3B82F6", // Blue
  "#8B5CF6", // Violet
  "#EC4899", // Pink
  "#D946EF", // Magenta
  "#F59E0B", // Amber
  "#6366F1", // Indigo
  "#14B8A6", // Teal
  "#0EA5E9", // Sky
  "#8E9196", // Neutral Gray
  "#D6BCFA", // Light Purple
  "#F2FCE2", // Soft Green
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value = "#000000",
  onChange,
  className,
}) => {
  const [color, setColor] = useState(value);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange?.(newColor);
  };

  const handlePresetClick = (presetColor: string) => {
    setColor(presetColor);
    onChange?.(presetColor);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "h-8 w-8 rounded-md border border-input",
            className
          )}
          style={{ backgroundColor: color }}
          type="button"
          aria-label="Pick a color"
        />
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3">
        <div className="flex flex-col gap-2">
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="h-8 w-full"
          />
          <div className="grid grid-cols-6 gap-1 mt-2">
            {defaultColors.map((presetColor) => (
              <button
                key={presetColor}
                className={cn(
                  "h-6 w-6 rounded-md border cursor-pointer",
                  color === presetColor && "ring-2 ring-primary ring-offset-1"
                )}
                style={{ backgroundColor: presetColor }}
                onClick={() => handlePresetClick(presetColor)}
                type="button"
                aria-label={`Select color ${presetColor}`}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
