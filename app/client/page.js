"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  const [decrementLimitFlag, setDecrementLimitFlag] = useState(false);
  const [incrementLimitFlag, setIncrementLimitFlag] = useState(false);

  const handleDecrement = () => {
    setIncrementLimitFlag((incrementLimitFlag) => (incrementLimitFlag = false));
    if (count > 0) {
      setCount((count) => (count -= 1));
      setDecrementLimitFlag(
        (decrementLimitFlag) => (decrementLimitFlag = false)
      );
    } else {
      setDecrementLimitFlag(
        (decrementLimitFlag) => (decrementLimitFlag = true)
      );
    }
  };

  const handleIncrement = () => {
    setDecrementLimitFlag((decrementLimitFlag) => (decrementLimitFlag = false));
    if (count < 10) {
      setCount((count) => (count += 1));
      setIncrementLimitFlag(
        (incrementLimitFlag) => (incrementLimitFlag = false)
      );
    } else {
      setIncrementLimitFlag(
        (incrementLimitFlag) => (incrementLimitFlag = true)
      );
    }
  };

  return (
    <div className="text-7xl">
      <button
        onClick={handleDecrement}
        style={{ color: decrementLimitFlag ? "red" : "black" }}
        disabled={decrementLimitFlag}
      >
        -
      </button>
      {count}
      <button
        onClick={handleIncrement}
        style={{ color: incrementLimitFlag ? "red" : "black" }}
        disabled={incrementLimitFlag}
      >
        +
      </button>
      {decrementLimitFlag ? <div>decrement limit reached</div> : <></>}
      {incrementLimitFlag ? <div>increment limit reached</div> : <></>}
    </div>
  );
};

export default ClientPage;
