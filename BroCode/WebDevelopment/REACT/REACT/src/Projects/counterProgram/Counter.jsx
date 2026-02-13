import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div className="counter-container">
      <div
        className={
          "counter-display " +
          (value > 0
            ? "positive"
            : value < 0
            ? "negative"
            : "neutral")
        }
      >
        {value}
      </div>

      <div className="counter-buttons">
        <button className="btn btn-decrement" onClick={() => setValue(v => v - 1)}>
          −
        </button>

        <button className="btn btn-reset" onClick={() => setValue(0)} disabled={value === 0}>
          Reset
        </button>

        <button className="btn btn-increment" onClick={() => setValue(v => v + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
