import Board from "./components/Board";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="page">
      <h1 className="pageTitle">מצא את כל המוקשים</h1>
      <div>
        <Board setCounter={setCounter} />
      </div>
      <h2 className="counterText">
        מספר מוקשים שהתגלו: <span className="counter">{counter}</span>
      </h2>
    </div>
  );
}

export default App;
