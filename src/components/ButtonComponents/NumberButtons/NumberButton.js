import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = props => {
  return (
    <button 
    className="buttons" id="numbers"
    onClick={() => props.setSelectedButton(props.button)}
    >{`${props.button}`}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
