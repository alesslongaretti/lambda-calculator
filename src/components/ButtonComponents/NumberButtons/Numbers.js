import React, {useState} from "react";

import {numbers} from "../../../data";

import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export default function Numbers() { 

  const [numberState, setNumberState] = useState(numbers);
  // const [selectedButton, setSelectedButton] = useState(numberState);

  // STEP 2 - add the imported data to state
  return (
    <div class="numbers-container">
      {numberState.map((button, key) => {
        return (
          <NumberButton
          key={key}
          button = {button}
          setNumberState ={setNumberState}
          />
        );

      })}
    </div>
  );
}
