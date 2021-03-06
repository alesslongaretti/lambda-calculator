import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

export default function Operators ()  {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  // const [operatorButton, setOperatorButton] = useState(operatorState);


  return (
    
    <div className="operators-container">
      {
        operatorState.map((button,key) => {
          return (
            <OperatorButton 
            key={key}
            button={button}
            setOperatorState={setOperatorState}
            />

          );
        })/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
