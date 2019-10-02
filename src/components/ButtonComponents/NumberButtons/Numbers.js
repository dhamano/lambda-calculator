import React, { useState } from "react";
import NumberButton from './NumberButton';

import { numbers } from '../../../data';

const Numbers = props => {
  const [ numberBtn ] = useState(numbers);
  return (
    <div>
      { numberBtn.map( (btnValue, i) => <NumberButton btnValue={btnValue}  onClickHandler={props.onClickHandler} key={i} /> ) }
    </div>
  );
};

export default Numbers;