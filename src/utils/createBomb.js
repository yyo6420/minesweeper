export const creatBombs = () => {
  const bombList = new Set();

  while (bombList.size < 10) {
    bombList.add(Math.floor(Math.random() * 120));
  }
  return bombList;
};
