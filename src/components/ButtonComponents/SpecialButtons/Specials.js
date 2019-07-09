import React, { useState } from "react";

import SpecialButton from './SpecialButton';

import { specials } from '../../../data';

const Specials = props => {
  const [ specialBtns ] = useState(specials);

  return (
    <div>
      { specialBtns.map( (btnValue, i) => <SpecialButton btnValue={btnValue} clearDisplayHandler={props.clearDisplayHandler}  onClickHandler={props.onClickHandler} key={i} /> ) }
    </div>
  );
};

export default Specials;