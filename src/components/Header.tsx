import React from 'react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center space-y-4">
          <Logo />
          <h1 className="text-3xl md:text-4xl font-bold text-[#2A3990] text-center">
            Auggie Calibration Competition
          </h1>
        </div>
      </div>
    </header>
  );
}