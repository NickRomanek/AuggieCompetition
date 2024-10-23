import React from 'react';
import { APP_VERSION, VERSION_DATE } from '../App';
import { Info } from 'lucide-react';

export function Version() {
  return (
    <div className="mt-8 pt-4 border-t border-gray-200">
      <div className="flex items-center justify-center text-sm text-gray-500 gap-2">
        <Info className="w-4 h-4" />
        <span>AirPro Stopwatch {APP_VERSION}</span>
        <span className="text-gray-300">|</span>
        <span>Released: {VERSION_DATE}</span>
      </div>
    </div>
  );
}