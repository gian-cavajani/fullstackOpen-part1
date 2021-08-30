import React from "react";

const Header = (props) => {
  console.log("header props", props);
  return <h1>{props.course}</h1>;
};
const Parts = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  console.log("content", props);
  return (
    <div>
      <Parts part={props.part1} exercise={props.exercises1} />
      <Parts part={props.part2} exercise={props.exercises2} />
      <Parts part={props.part3} exercise={props.exercises3} />
    </div>
  );
};
const Total = (props) => {
  console.log("Total", props);
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
