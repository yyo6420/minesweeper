import Board from "./components/Board";
import "./styles/App.css";
import { useState } from "react";

function App() {
  return (
    <div className="page">
      <h1 className="pageTitle">מצא את כל המוקשים</h1>
      <div>
        <Board />
      </div>
      <h2 className="counterText">
        מספר מוקשים שהתגלו:
      </h2>
    </div>
  );
}

export default App;
