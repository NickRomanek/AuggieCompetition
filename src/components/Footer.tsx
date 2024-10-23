import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#2A3990] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} AirPro Diagnostics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}