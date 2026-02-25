import { useState } from "react";
import Block from "./Block";
import { creatBombs } from "../utils/createBomb";

function Board({ setCounter }) {
  const bombs = creatBombs();
  const [blocks, setBlocks] = useState(new Array(120).fill(""));
  const [bombList, setBombList] = useState([...bombs]);
  return (
    <div className="gameBoard">
      {blocks.map((_, index) => (
        <Block
          bombList={bombList}
          key={index}
          index={index}
          setCounter={setCounter}
        />
      ))}
    </div>
  );
}

export default Board;
