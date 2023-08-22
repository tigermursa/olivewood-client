import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateRemainingTime = (targetDate) => {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;
    return timeDifference;
  };

  const targetDate = new Date(); // Current date
  targetDate.setMonth(targetDate.getMonth() + 5); // Add 5 months to the current date

  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1000); // Decrement by 1 second (1000 milliseconds)
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, [targetDate]);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="counter-container me-10">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-5">
        <div className="flex flex-col p-2 bg-red-500 rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{days}</span>
          days
        </div>
        <div className="flex flex-col p-2 bg-red-500 rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{hours}</span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-red-500 rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{minutes}</span>
          min
        </div>
        <div className="flex flex-col p-2 bg-red-500 rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{seconds}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
