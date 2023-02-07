import React from "react";

function Token(props) {

    return (
      <img
        className={
          props.type === "images/blue-piece.png"
            ? "blue-piece"
            : props.type === "images/red-piece.png"
            ? "red-piece"
            : props.type === "images/yellow-piece.png"
            ? "yellow-piece"
            : props.type === "images/green-piece.png"
            ? "green-piece" : null
        }
        src={props.type}
        alt={props.type}
      />
    );
}

export default Token;