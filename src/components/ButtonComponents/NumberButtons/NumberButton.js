import React from "react";

const NumberButton = props => {
  return (
    <>
      <button onClick={props.onClickHandler} className={`btn-calculator-number ${props.btnValue === "0" && 'zero'}`} value={props.btnValue}>{props.btnValue}</button>
    </>
  );
};

export default NumberButton;