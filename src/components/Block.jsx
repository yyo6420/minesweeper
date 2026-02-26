import { useEffect, useState } from "react";
import NotBomb from "./NotBomb";
import Bomb from "./Bomb";
function Block({
  index,
  counter,
  setCounter,
  bombList,
  setIswon,
  isWon,
  timer,
}) {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    if (isWon) return;
    if (timer === 0) return;
    setPressed(true);
  };

  useEffect(() => {
    if (pressed && bombList.includes(index)) {
      setCounter((prev) => prev + 1);
      setIswon(counter + 1 === bombList.length);
    }
  }, [pressed]);

  if (pressed && bombList.includes(index)) return <Bomb />;
  if (pressed) return <NotBomb />;
  return <div onClick={handleClick} className="block default"></div>;
}

export default Block;
