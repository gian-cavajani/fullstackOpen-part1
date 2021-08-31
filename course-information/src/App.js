import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };
  //function that returns functions

  // ESTTA FUNCTION DE ABAJO ES LO MISMO QUE LA DE ARRIBA
  // const setToValue = (newValue) => {
  //   const value = () => {
  //     setValue(newValue);
  //   };
  //   return value;
  // };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      {/* <button onClick={() => setValue(1000)}>thousand</button> , HACEN LO MISMO, Y ESTA NO PRECISA LA FUNCTION CALL A LA FUNCTION DENTRO DE LA FUNCTION */}
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  );
};

export default App;
