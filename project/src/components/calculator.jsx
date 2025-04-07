import React, { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './operation';
import './calculator.css'

 export const ACTIONS ={
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return { 
        ...state,
        currentOperation: `${state.currentOperation || ""}${payload.digit}`
      };
      case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperation: state.currentOperation,
        currentOperation: null,
        operation: payload.operation
      };
  }
}

function Calculator() {
const [{currentOperation, previousOperation, operation}, dispatch] =
 useReducer(reducer, {
  
 });

  return (
    <div className="calculator-grid">
      <div className='outPut'>
        <div className='previous operand'></div>
        <div className='current-operand'></div>
      </div>
      <button className='span-two'>AC</button>
      <button >DE</button>
      <OperationButton operation ="/" dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation ="*" dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation ="+" dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation ="-" dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='span-two'>=</button>
    </div>
  );
}

export default Calculator;