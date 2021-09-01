import React, { useState } from "react";

const MostVoted = (props) => {
  const { p1, p2 } = props;
  if (p2 === 0) {
    return <p>you haven't vote yet</p>;
  }
  return (
    <div>
      <h2>Anecdote with most votes: </h2>
      <p>
        <em>
          <q>{p1}</q>
        </em>
      </p>
      <p>votes: {p2}</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0)); //creates an array with the number of 0s of the anecdote length
  const handleRandom = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };
  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };
  console.log("out", points);
  let ind = points.indexOf(Math.max(...points));
  console.log("ind", ind);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        <q>
          <em>{anecdotes[selected]}</em>
        </q>
      </p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleRandom}>random anecdote</button>
      <button onClick={handleVote}>vote</button>
      <MostVoted p1={anecdotes[ind]} p2={points[ind]} />
    </div>
  );
};

export default App;
