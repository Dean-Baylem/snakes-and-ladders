import React, {useState} from "react";
import Block from "./Block";

function App() {

  const [tokenPosition, setTokenPosition] = useState(0);

  let topRow = [100,99,98,97,96,95,94,93,92,91]
  let secRow = [90, 89, 88, 87, 86, 85, 84, 83, 82, 81]
  let thirdRow = [80, 79, 78, 77, 76, 75, 74, 73, 72, 71]
  let fourthRow = [70, 69, 68, 67, 66, 65, 64, 63, 62, 61]
  let fifthRow = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51]
  let sixthRow = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41];
  let seventhRow = [40, 39, 38, 37, 36, 35, 34, 33, 32, 31];
  let eigthRow = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21];
  let ninthRow = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
  let tenthRow = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));


  // function rollDie() {
  //   let result = Math.floor(Math.random() * 6) + 1;
  //   setTokenPosition(prevValue => {
  //     if (prevValue + result === 4) {
  //     } else {
  //       return prevValue + result;
  //     }
  //   })
  // }

  function rollDie() {
    let result = Math.floor(Math.random() * 6) +1;
    let newValue = tokenPosition + result;
    if (newValue === 4) {
            console.log("Hello");
            setTokenPosition(4);
      sleep(1000).then(() => {
        console.log("Hello again");
        setTokenPosition(14);
      })
      } else {
      }
    }


  return (
    <div className="App">
      <h1>Snakes and Ladders</h1>
      <div className="game-board">
        {topRow.map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {secRow.reverse().map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {thirdRow.map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {fourthRow.reverse().map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {fifthRow.map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {sixthRow.reverse().map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {seventhRow.map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {eigthRow.reverse().map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {ninthRow.map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        {tenthRow.reverse().map((num) => (
          <Block token={tokenPosition === num ? true : false} color={num % 2 === 0 ? "blue-box" : "red-box"} num={num} />
        ))}
        <button onClick={rollDie}>Roll Die!</button>
      </div>
    </div>
  );
}

export default App;
