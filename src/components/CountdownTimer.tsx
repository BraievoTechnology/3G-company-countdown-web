import  { useEffect, useState } from 'react';
interface CountdownTimerProps {
  days: number;
}
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days
}) => {
  const [targetDate] = useState(() => {
    const target = new Date();
    target.setDate(target.getDate() + days);
    return target;
  });
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60) % 24),
      minutes: Math.floor(difference / (1000 * 60) % 60),
      seconds: Math.floor(difference / 1000 % 60)
    };
  };
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      // Clear interval when countdown reaches zero
      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
      }
    }, 1000);
    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [targetDate]); // Only re-run effect if targetDate changes
  const timeUnits = [{
    value: timeLeft.days,
    label: 'DAYS'
  }, {
    value: timeLeft.hours,
    label: 'HOURS'
  }, {
    value: timeLeft.minutes,
    label: 'MINUTES'
  }, {
    value: timeLeft.seconds,
    label: 'SECONDS'
  }];
  return <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
      {timeUnits.map((unit, index) => <div key={index} className="flex flex-col items-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
            {unit.value < 10 ? `0${unit.value}` : unit.value}
          </div>
          <div className="text-sm md:text-base text-gray-300 mt-2">
            {unit.label}
          </div>
        </div>)}
    </div>;
};
export default CountdownTimer;