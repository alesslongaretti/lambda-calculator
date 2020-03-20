import React, {useState} from "react";

import {numbers} from "../../../data";

import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export default function Numbers(props) { 

  const [numberState] = useState(numbers);

  // const [selectedButton, setSelectedButton] = useState(numberState);

  // STEP 2 - add the imported data to state
  return (

    <div className="numbers-container">
      {numberState.map((number, index) => {
        return (
          <NumberButton
          key={index}
          number={number}
          setState={props.numberButton}
          />
        );

      })}
    </div>
  );
}
