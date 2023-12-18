import React from "react";
import { useState } from "react";

const Content = () => {

const [nameee, setNameee] = useState("Earn");

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    setNameee(names[int]);
  }

  //Click event is explained below with examples.

  const handleClick = () => {
    console.log("Button Clicked");
  };

  const handleClick2 = (name) => {
    console.log(`My name is ${name}`);
  };

  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  };

  const [count, setCount] = useState(99);

  function decrementFunction() {
    setCount(count - 1);
  }

  function incrementFunction() {
    setCount(count + 1);
  }

  function hello() {
    return console.log("Welcome back!");
  }

  const [name, setName] = useState(() => hello()); //In state hooks, we should not pass a function directly as a prop because the function will be called each and everytime when the page is refreshed which will make the page very slow and laggy. Instead, pass the function inside another anonymous function as shown in line 40 which will make the function to execute only when that particular line is being executed and the function wont be called everytime when the page is refreshed!

  return (
    <main>
      {/* <p onDoubleClick={() => handleClick2("Pazhani")}>
        Lets {handleNameChange()} money
      </p> */}

      <p>Lets {nameee} Money</p>

      <button onClick={handleNameChange}>Subscribe</button>

      <button onClick={handleClick}>Click</button>

      <button onClick={() => handleClick2("Aji")}> Subscribe </button>

      <button onClick={(e) => handleClick3(e)}>tick</button>

      <button onClick={decrementFunction}>-</button>
      <button>{count}</button>
      <button onClick={incrementFunction}>+</button>
    </main>
  );
};

export default Content;
