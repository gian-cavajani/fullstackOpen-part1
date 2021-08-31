import React, { useState } from "react";

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeft = () => {
    const newClicks = {
      ...clicks, //es importante que este primero el object destructuring, y luego la prop a modificar en la function.
      left: clicks.left + 1,
      // right: clicks.right,
    };
    setClicks(newClicks);
  };
  const handleRight = () => {
    const newClicks = {
      // left: clicks.left,
      ...clicks, //pasa todo el objeto clicks a la variable newClicks, si se especifica una prop del objeto esta no se pasa.
      right: clicks.right + 1, //it is forbidden to use, clicks.right++ in react
    };
    setClicks(newClicks);
  };
  //in this case it would be easier to declare 2 usestate hooks, but sometimes how its done now(with complex state) is preferable.
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeft}>left</button>
      <button onClick={handleRight}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;
