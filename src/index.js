import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 12;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="Daisy" age={12 + 2} />
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); //<App /> content goes inside <div id="root"
