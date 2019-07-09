import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button onClick={props.btnValue === "=" ? props.evalExpression : props.onClickHandler}  className="btn-calculator-operator" value={props.btnValue}>{props.btnChar}</button>
    </>
  );
};

export default OperatorButton;