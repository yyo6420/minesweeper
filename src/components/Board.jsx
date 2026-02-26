import { useState } from "react";
import Block from "./Block";
import { creatBombs } from "../utils/createBomb";

function Board({ counter, setCounter }) {
  let bombs = creatBombs();
  const [isWon, setIswon] = useState(false);
  const [blocks, setBlocks] = useState(new Array(120).fill(""));
  const [bombList, setBombList] = useState([...bombs]);
  const [gameId, setGameId] = useState(0);

  const playAgain = () => {
    setIswon(false);
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
      <div className="gameBoard">
        {blocks.map((_, index) => (
          <Block
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
