import React, { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L")); //allClicks.push("L") would work but it could cause bugs, also it mutates the existing array,
    // , which i dont want, rather i'd prefer to make a new instance of the previous array.
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  console.log("data", allClicks);
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
      {/* it joins the array into a string with the elements separated with a blank-space */}
    </div>
  );
};

export default App;
