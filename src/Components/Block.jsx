import React, {useState} from "react";
import Token from "../Token";

function Block(props) {

    return (
      <div
        className={props.color}
        style={{ color: "props.num % 2 === 0 ? red : blue" }}
      >
        <p>{props.num}</p>
        {props.snakeStart && <p className="snakeStart">S</p>}
        {props.snakeEnd && <p className="snakeEnd">E</p>}
        {props.ladderStart && <p className="ladderStart">S</p>}
        {props.ladderEnd && <p className="ladderEnd">E</p>}
        {props.p1Token && <Token type={props.p1Token} num={props.num} />}
        {props.p2Token && <Token type={props.p2Token} num={props.num} />}
        {props.p3Token && <Token type={props.p3Token} num={props.num} />}
        {props.p4Token && <Token type={props.p4Token} num={props.num} />}
      </div>
    );
}

export default Block;