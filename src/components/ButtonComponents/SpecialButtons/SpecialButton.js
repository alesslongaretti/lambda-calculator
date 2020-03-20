import React from "react";

const SpecialButton = props => {
  return (
    <button
    className= "buttons" id="specials"
    onClick = { () => props.setSpecialState(props.button)}
    > {`${props.button}`}
    </button>
   
  );
};

export default SpecialButton;
