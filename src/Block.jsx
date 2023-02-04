import React, {useState} from "react";
import Token from "./Token";

function Block(props) {

    return (
      <div
        className={props.color}
        style={{ color: "props.num % 2 === 0 ? red : blue" }}
      >
        <p>{props.num}</p>
        {props.token === true ? <Token /> : null}
      </div>
    );
}

export default Block;