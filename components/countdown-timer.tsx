"use client"

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ startDate }: { startDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="flex gap-8 justify-center items-center">
      <TimeBox value={timeLeft.days} label="天" />
      <TimeBox value={timeLeft.hours} label="时" />
      <TimeBox value={timeLeft.minutes} label="分" />
      <TimeBox value={timeLeft.seconds} label="秒" />
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
        <span className="text-3xl font-light tracking-tight">{value}</span>
      </div>
      <span className="text-sm mt-2 text-white/70 font-light">{label}</span>
    </div>
  );
}