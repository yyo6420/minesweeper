import { useState } from "react";
import Block from "./Block";
import { creatBombs } from "../utils/createBomb";

function Board({ counter, setCounter }) {
  let bombs = creatBombs();
  const [isWon, setIswon] = useState(false);
  const [blocks, setBlocks] = useState(new Array(120).fill(""));
  const [bombList, setBombList] = useState([...bombs]);
  console.log(bombList);

  // const playAgain = () => {
  //   setIswon(false);
  //   bombs = creatBombs();
  //   setBlocks(new Array(120).fill(""));
  //   setBombList([...bombs]);
  //   setCounter(0);
  // };
  return (
    <>
      {isWon && (
        <div className="winBlock">
          <div className="winDiv">
            <h1 className="winTitleText">כל הכבוד!!🏆</h1>
            <button className="winButton">שחק שוב</button>
          </div>
        </div>
      )}
      <div className="gameBoard">
        {blocks.map((_, index) => (
          <Block
            isWon={isWon}
            setIswon={setIswon}
            key={index}
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
