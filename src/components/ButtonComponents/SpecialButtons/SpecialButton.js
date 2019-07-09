import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button onClick={props.btnValue === "C" ? props.clearDisplayHandler : props.onClickHandler}  className="btn-calculator-special" value={props.btnValue}>{props.btnValue}</button>
    </>
  );
};

export default SpecialButton;