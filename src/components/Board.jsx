import { useState } from "react";
import Block from "./Block";

function Board() {
  const [blocks, setBlocks] = useState(new Array(120).fill(""));
  return (
    <div className="gameBoard">
      {blocks.map((_, index) => (
        <Block />
      ))}
    </div>
  );
}

export default Board;
