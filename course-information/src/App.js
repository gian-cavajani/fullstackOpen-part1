import React, { useState } from "react";
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ text, click }) => <button onClick={click}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0); //every time the usestate hook is used, causes the app component(in this case) to be rerendered
  const increaseOne = () => setCounter(counter + 1);
  const minusOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  return (
    <div>
      <Display counter={counter} />
      <Button text="plus" click={increaseOne} />
      <Button text="minus" click={minusOne} />
      <Button text="reset" click={setToZero} />
    </div>
  );
};

export default App;
