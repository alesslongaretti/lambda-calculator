import React from "react";


const OperatorButton = prop => {
  return (
    <button 
    className="operator_number"
    onClick={() => prop.setOperatorButton(prop.button)}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton