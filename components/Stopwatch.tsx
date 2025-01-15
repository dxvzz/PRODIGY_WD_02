'use client'

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Flag } from 'lucide-react';
import { Display } from './Display';
import { LapTimes } from './LapTimes';

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLapTimes([]);
  };

  const handleLap = () => {
    setLapTimes((prevLapTimes) => [...prevLapTimes, time]);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardContent className="p-6">
        <Display time={time} />
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button 
            onClick={handleStartPause} 
            className="w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
            variant={isRunning ? "destructive" : "default"}
          >
            {isRunning ? <Pause className="mr-2" /> : <Play className="mr-2" />}
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button 
            onClick={handleReset} 
            variant="outline"
            className="w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <RotateCcw className="mr-2" />
            Reset
          </Button>
          <Button 
            onClick={handleLap} 
            disabled={!isRunning}
            className="w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
            variant="secondary"
          >
            <Flag className="mr-2" />
            Lap
          </Button>
        </div>
        <LapTimes lapTimes={lapTimes} />
      </CardContent>
    </Card>
  );
}

