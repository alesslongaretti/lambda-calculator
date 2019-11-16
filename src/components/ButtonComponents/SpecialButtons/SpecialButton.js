import React from "react";

const SpecialButton = pro => {
  return (
    <button
    className= "special_button"
    onClick = { () => pro.setSpecialButton(pro.button)}
    > 
    </button>
   
  );
};

export default SpecialButton;
