import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export default function Specials () {
  const [specialState, setSpecialState] = useState(specials);
  // const [specialButton, setSpecialButton] = useState(specialState);

  // STEP 2 - add the imported data to state

  return (
    <div className ="specials-container">
      {specialState.map((button, key) => {

        return(
        <SpecialButton
        key={key}
        button= {button}
        setState= {setSpecialState}
        />
      );
       })}
    </div>

  );
};

