import { useEffect } from "react";

function Timer({ timer, setTimer, isWon }) {
  useEffect(() => {
    if (timer === 0) return;

    const intervalId = setInterval(() => {
      if (isWon) {
        setTimer((prev) => prev);
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return <h2 className="timer">{timer}</h2>;
}

export default Timer;
