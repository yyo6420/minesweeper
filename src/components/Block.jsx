import { useEffect, useState } from "react";
import NotBomb from "./NotBomb";
import Bomb from "./Bomb";
function Block({ index, setCounter, bombList }) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (pressed && bombList.includes(index)) {
      setCounter((prev) => prev + 1);
    }
  }, [pressed]);

  const handleClick = () => {
    setPressed(true);
  };

  if (pressed && bombList.includes(index)) {
    return <Bomb />;
  }

  return (
    <div onClick={handleClick} className="block default">
      {!pressed && index}
      {pressed && <NotBomb />}
    </div>
  );
}

export default Block;
