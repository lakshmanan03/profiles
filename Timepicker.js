import React, { useState } from 'react';

const TimePicker = () => {
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [isPM, setIsPM] = useState(false);

  const handleHourChange = (event) => {
    let newHour = parseInt(event.target.value);
    if (newHour === 12) {
      newHour = 0; // 12AM
    }
    if (isPM) {
      newHour += 12; // Convert to 24-hour format if PM
    }
    setHours(newHour);
  };

  const handleMinuteChange = (event) => {
    const newMinute = parseInt(event.target.value);
    setMinutes(newMinute);
  };

  const handleAMPMChange = (event) => {
    const newIsPM = event.target.value === 'PM';
    setIsPM(newIsPM);
    // Adjust hours if switching between AM and PM
    if (newIsPM && hours < 12) {
      setHours(hours + 12);
    } else if (!newIsPM && hours >= 12) {
      setHours(hours - 12);
    }
  };

  return (
    <div>
      <select value={hours} onChange={handleHourChange}>
        {[...Array(12).keys()].map((hour) => (
          <option key={hour + 1} value={hour + 1}>
            {hour + 1}
          </option>
        ))}
      </select>
      :
      <select value={minutes} onChange={handleMinuteChange}>
        {[...Array(60).keys()].map((minute) => (
          <option key={minute} value={minute}>
            {minute < 10 ? `0${minute}` : minute}
          </option>
        ))}
      </select>
      <select value={isPM ? 'PM' : 'AM'} onChange={handleAMPMChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TimePicker;
