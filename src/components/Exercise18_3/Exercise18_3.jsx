import React, { useState } from "react";

function Exercise18_3() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSeconds = ({ target: { value } }) => {
    setSeconds(value);
    setMinutes(value / 60);
    setHours(value / 3600);
  };
  const handleMinutes = ({ target: { value } }) => {
    setSeconds(value * 60);
    setMinutes(value);
    setHours(value / 60);
  };
  const handleHours = ({ target: { value } }) => {
    setSeconds(value * 3600);
    setMinutes(value * 60);
    setHours(value);
  };

  return (
    <div>
      <div>
        <label htmlFor="seconds">Seconds</label>
        <input
          type="number"
          id="seconds"
          onChange={handleSeconds}
          value={seconds}
        />
      </div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          id="minutes"
          onChange={handleMinutes}
          value={minutes}
        />
      </div>
      <div>
        <label htmlFor="hours">Hour</label>
        <input type="number" id="hours" onChange={handleHours} value={hours} />
      </div>
    </div>
  );
}

export default Exercise18_3;
