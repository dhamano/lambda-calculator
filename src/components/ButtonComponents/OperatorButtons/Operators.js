import React, { useState } from "react";

import OperatorButton from './OperatorButton';

import { operators } from '../../../data';

const Operators = props => {
  const [ operatorBtns ] = useState(operators);

  return (
    <div>
    { operatorBtns.map( (btnValue, i) => <OperatorButton btnChar={btnValue.char}  onClickHandler={props.onClickHandler} evalExpression={props.evalExpression} btnValue={btnValue.value} key={i} /> ) }
    </div>
  );
};

export default Operators;