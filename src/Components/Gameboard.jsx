import React, {useState} from "react";
import Block from "./Block";
import Scoreboard from "./Scoreboard";



function GameBoard(props) {

  const ladderStarts = [1, 4, 8, 28, 21, 50, 71, 92];
  const ladderEnds = [38, 14, 30, 76, 42, 67, 92, 99];
  const snakeStarts = [32, 36, 48, 62, 88, 95, 97];
  const snakeEnds = [10, 6, 26, 18, 24, 56, 78];

const [players, setPlayers] = useState([
  { name: "player1", tokenPosition: 0, id: 1, token: "images/blue-piece.png" },
  { name: "player2", tokenPosition: 0, id: 2, token: "images/red-piece.png" },
  { name: "player3", tokenPosition: 0, id: 3, token: "images/yellow-piece.png" },
  { name: "player4", tokenPosition: 0, id: 4, token: "images/green-piece.png" },
]);
const [currentPlayer, setCurrentPlayer] = useState(players[0]);
const [gameFinished, setGameFinished] = useState(false);
const [waiting, setWaiting] = useState(false);

  let topRow = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91];
  let secRow = [90, 89, 88, 87, 86, 85, 84, 83, 82, 81];
  let thirdRow = [80, 79, 78, 77, 76, 75, 74, 73, 72, 71];
  let fourthRow = [70, 69, 68, 67, 66, 65, 64, 63, 62, 61];
  let fifthRow = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51];
  let sixthRow = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41];
  let seventhRow = [40, 39, 38, 37, 36, 35, 34, 33, 32, 31];
  let eigthRow = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21];
  let ninthRow = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
  let tenthRow = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Function - Takes the new token position value and updates the objects in the state array.
  function setValues(newValue) {
    const nextPlayers = players.map((player) => {
        if (player.id === currentPlayer.id) {
          return {
            ...player,
            tokenPosition: newValue,
          };
        } else {
          return player;
        }
      });
      setPlayers(nextPlayers);
    }


  function dieRoll() {
    let result = Math.floor(Math.random() * 6) + 1;
    let newValue = currentPlayer.tokenPosition + result;
    // Check if tile is a ladder.
    if (ladderStarts.includes(newValue)) {
      console.log("Landed on " + newValue + ". It's a ladder! Up we go!");
              setValues(newValue);
              setWaiting(true);
        sleep(2000).then(() => {
          console.log("Now we are at position: " + ladderEnds[ladderStarts.indexOf(newValue)]);
          setValues(ladderEnds[ladderStarts.indexOf(newValue)]);
          setWaiting(false);
        })
    }
    // Check if tile is a snake
    if (snakeStarts.includes(newValue)) {
      console.log("Landed on " + newValue + ". It's a Snake! Down we go :(");
              setValues(newValue);
        sleep(2000).then(() => {
          console.log("Now we are at position: " + snakeEnds[snakeStarts.indexOf(newValue)]);
          setValues(snakeEnds[snakeStarts.indexOf(newValue)]);
        })
    }
    // Set the current players position to new result.
    if (newValue >= 100) {
      alert("Game over - winner is " + currentPlayer.name);
      setGameFinished(true);
    } else {
      setValues(newValue);
    }
  }

  function handleClick() {
    if (waiting !== true) {
    // Roll the Die and work out new result
    dieRoll();
    // Change current player to next in line
    // Note that the id of the current player matches the index of the next player.
    if (currentPlayer.id === players.length) {
      setCurrentPlayer(players[0]);
    } else {
      setCurrentPlayer(players[currentPlayer.id]);
    }}
    else {
      console.log("Please wait");
    }
  }

  return (
    <div>
      <Scoreboard
        playerName={currentPlayer.name}
        playerPosition={currentPlayer.tokenPosition}
        token={currentPlayer.token}
        gameFinished={gameFinished}
      />
      <div className="game-board">
        {topRow.map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {secRow.reverse().map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {thirdRow.map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {fourthRow.reverse().map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {fifthRow.map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {sixthRow.reverse().map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {seventhRow.map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {eigthRow.reverse().map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {ninthRow.map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {tenthRow.reverse().map((num) => (
          <Block
            p1Token={players[0].tokenPosition === num ? players[0].token : null}
            p2Token={players[1].tokenPosition === num ? players[1].token : null}
            p3Token={players[2].tokenPosition === num ? players[2].token : null}
            p4Token={players[3].tokenPosition === num ? players[3].token : null}
            key={num}
            color={num % 2 === 0 ? "blue-box" : "red-box"}
            num={num}
            snakeStart={snakeStarts.includes(num) ? true : false}
            snakeEnd={snakeEnds.includes(num) ? true : false}
            ladderStart={ladderStarts.includes(num) ? true : false}
            ladderEnd={ladderEnds.includes(num) ? true : false}
          />
        ))}
        {gameFinished !== true ? 
        <button onClick={handleClick}>
          {currentPlayer.name}! Roll the Die!
        </button>
        : <button onClick={null}>Game over</button>}
      </div>
    </div>
  );
}

export default GameBoard;