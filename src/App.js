import React, {useState} from "react";
import GameBoard from "./Components/Gameboard";
import Scoreboard from "./Components/Scoreboard";


function App() {

  const [gameStarted, setGameStarted] = useState(true);

  function handleClick(){
    setGameStarted(true);
  }

   return (
     <div className="App">
       {gameStarted === true ? (
         <div>
           <h1>Snakes and Ladders</h1>
           <div>
             <GameBoard/>
           </div>
         </div>
       ) : (
         <div>
           <h5>Hello</h5>
           <button onClick={handleClick}>Press to start</button>
         </div>
       )}
     </div>
   );
}

export default App;
