import React from "react";

function Token(props) {
    return (
      <img
        className="blue-piece"
        src={props.type}
        alt={props.type}
      />
    );
}

export default Token;