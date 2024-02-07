import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('LLL'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('LLL'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{currentTime}</div>;
};

export default Clock;