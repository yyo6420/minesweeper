import { useState } from "react";
import { creatBombs } from "../utils/createBomb";
import Block from "./Block";

function Board({ counter, setCounter, timer, setTimer, isWon, setIswon }) {
  let bombs = creatBombs();
  const [blocks, setBlocks] = useState(new Array(120).fill(""));
  const [bombList, setBombList] = useState([...bombs]);
  const [gameId, setGameId] = useState(0);

  const playAgain = () => {
    setIswon(false);
    setTimer(60);
    setBlocks(new Array(120).fill(""));
    setCounter(0);
    setBombList([...creatBombs()]);
    setGameId((prev) => prev + 1);
  };

  return (
    <>
      {isWon && (
        <div className="winBlock">
          <div className="winDiv">
            <h1 className="winTitleText">כל הכבוד!!🏆</h1>
            <button onClick={playAgain} className="winButton">
              שחק שוב
            </button>
          </div>
        </div>
      )}
      {timer === 0 && (
        <div className="winBlock">
          <div className="winDiv">
            <h1 className="winTitleText">נגמר הזמן 🙁</h1>
            <button onClick={playAgain} className="winButton">
              שחק שוב
            </button>
          </div>
        </div>
      )}

      <div className="gameBoard">
        {blocks.map((_, index) => (
          <Block
            timer={timer}
            isWon={isWon}
            setIswon={setIswon}
            key={`${gameId}-${index}`}
            bombList={bombList}
            index={index}
            setCounter={setCounter}
            counter={counter}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
