import React, {useState} from "react";
import Token from "../Token";

function Block(props) {

    return (
      <div
        className={props.color}
        style={{ color: "props.num % 2 === 0 ? red : blue" }}
      >
        <p>{props.num}</p>
        {props.token !== null ? <Token type={props.token} num={props.num}/> : null}
      </div>
    );
}

export default Block;