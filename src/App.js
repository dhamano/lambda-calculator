import React, { useState } from "react";
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';

function App() {
  const [ displayValue, setDisplayValue ] = useState("0");

  const onClickHandler = event => {
    parseInt(displayValue) === 0 ?
      setDisplayValue(event.target.value)
    :
      setDisplayValue(displayValue+event.target.value);
  }

  const clearDisplayHandler = () => {
    setDisplayValue(0);
  }

  const evalExpression = () => {
    setDisplayValue(eval(displayValue));
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayValue={displayValue} />
        <div className="number-section">
          <div className="left-side">
            <Specials onClickHandler={onClickHandler} clearDisplayHandler={clearDisplayHandler} />
            <Numbers onClickHandler={onClickHandler} />
          </div><div className="right-side">
            <Operators onClickHandler={onClickHandler} evalExpression={evalExpression} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
