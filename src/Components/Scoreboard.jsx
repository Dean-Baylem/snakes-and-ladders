import React, {useState} from "react";

function Scoreboard(props) {

    const [playerRolled, setPlayerRolled] = useState("");

    return (
      <div>
        <div>
          <h5>
            Current Player: {props.playerName} | Current Position:{" "}
            {props.playerPosition} | Token:{" "}
            <img
              src={props.token}
              alt={props.token}
              style={{position: "relative", height: "20px", top: "5px"}}
            ></img>
          </h5>
        </div>
      </div>
    );
}

export default Scoreboard;