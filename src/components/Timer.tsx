import React from 'react';

interface TimerProps {
  time: number;
}

export function Timer({ time }: TimerProps) {
  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center mb-8">
      <div className="font-mono text-6xl font-bold text-gray-900 tracking-wider">
        {formatTime()}
      </div>
    </div>
  );
}