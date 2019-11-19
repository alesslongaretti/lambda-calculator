import React from "react";


const OperatorButton = (props) => {
  return (
    <button 
    className="buttons" id="operators" value="{`${props.button.value}`}"
    // onClick={() => props.setOperatorButton(props.button)}
    >{`${props.button.char}`}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;