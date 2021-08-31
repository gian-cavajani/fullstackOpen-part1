import React, { useState } from "react";

const StatLine = ({ text, num }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{num}</td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  let all = clicks.good + clicks.neutral + clicks.bad;
  let average = ((clicks.good - clicks.bad) / all).toFixed(2);
  let positive = ((clicks.good * 100) / all).toFixed(1);
  if (all === 0) {
    return <p>no feedback given</p>;
  }
  return (
    <>
      <table>
        <tbody>
          <StatLine text="good: " num={clicks.good} />
          <StatLine text="neutral: " num={clicks.neutral} />
          <StatLine text="bad: " num={clicks.bad} />
          <StatLine text="all: " num={all} />
          <StatLine text="average: " num={average} />
          <StatLine text="positive: " num={`${positive} %`} />
        </tbody>
      </table>
    </>
  );
};
const Button = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [allClicks, setAll] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    const newClick = {
      ...allClicks,
      good: allClicks.good + 1,
    };
    setAll(newClick);
  };
  const handleNeutral = () => {
    const newClick = {
      ...allClicks,
      neutral: allClicks.neutral + 1,
    };
    setAll(newClick);
  };
  const handleBad = () => {
    const newClick = {
      ...allClicks,
      bad: allClicks.bad + 1,
    };
    setAll(newClick);
  };

  return (
    <div>
      <h1>give us feedback :D</h1>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <h2>statistics:</h2>
      <Statistics clicks={allClicks} />
    </div>
  );
};

export default App;
