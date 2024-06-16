import { useState, useEffect } from 'react';
import "../App.css"

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <div className='Timer'>
      <h1>Time Left {formatTime(seconds)}</h1>
    </div>
  );
};

export default Timer;
