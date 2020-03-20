import React from "react";

// import { tsPropertySignature } from "@babel/types";

const NumberButton = props => {
  let button;
    button = <button 
    className="buttons" id="numbers"
    onClick={() => props.setState(props.number)}
    >{props.number}
    </button>;

  return (
    <>
    {button}
    </>
  );

};

export default NumberButton;
