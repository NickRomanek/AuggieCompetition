import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';
import { Footer } from './components/Footer';
import { Version } from './components/Version';

// Version configuration
export const APP_VERSION = 'v1.0.0';
export const VERSION_DATE = '2024-03-19';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time => time + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12 flex-grow">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <Timer time={time} />
          <Controls 
            isRunning={isRunning}
            onPlayPause={handlePlayPause}
            onReset={handleReset}
          />
          <Version />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;