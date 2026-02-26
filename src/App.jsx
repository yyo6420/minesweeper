import Board from "./components/Board";
import "./styles/App.css";
import { useState } from "react";
import Timer from "./components/Timer";
function App() {
  const [isWon, setIswon] = useState(false);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(60);
  return (
    <div className="page">
      <div className="titleAndTimerDiv">
        <h1 className="pageTitle">מצא את כל המוקשים</h1>
        <Timer timer={timer} setTimer={setTimer} isWon={isWon} />
      </div>
      <div>
        <Board
          setIswon={setIswon}
          isWon={isWon}
          counter={counter}
          timer={timer}
          setTimer={setTimer}
          setCounter={setCounter}
        />
      </div>
      <h2 className="counterText">
        מספר מוקשים שהתגלו: <span className="counter">{counter}</span>
      </h2>
    </div>
  );
}

export default App;
