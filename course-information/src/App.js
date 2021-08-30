import React, { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseOne = () => {
    setCounter(counter + 1);
  };
  const setToZero = () => {
    setCounter(0);
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseOne}>plus</button>
      <button onClick={setToZero}>reset</button>
      {/* <button onClick={()=> console.log("clicked")}>plus</button> */}
    </div>
  );
};

export default App;
