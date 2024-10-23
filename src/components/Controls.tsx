import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface ControlsProps {
  isRunning: boolean;
  onPlayPause: () => void;
  onReset: () => void;
}

export function Controls({ isRunning, onPlayPause, onReset }: ControlsProps) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={onReset}
        className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <RotateCcw className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={onPlayPause}
        className="p-4 rounded-full bg-[#2A3990] hover:bg-[#232f75] transition-colors"
      >
        {isRunning ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}