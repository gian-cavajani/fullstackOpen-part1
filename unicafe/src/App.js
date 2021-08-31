import React, { useState } from "react";

const Statistics = ({ clicks }) => {
  let all = clicks.good + clicks.neutral + clicks.bad;
  let average = ((clicks.good - clicks.bad) / all).toFixed(2);
  let positive = ((clicks.good * 100) / all).toFixed(1);
  return (
    <div>
      <p>good: {clicks.good}</p>
      <p>neutral: {clicks.neutral}</p>
      <p>bad: {clicks.bad}</p>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive} %</p>
    </div>
  );
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>statistics:</h2>
      <Statistics clicks={allClicks} />
    </div>
  );
};

export default App;
