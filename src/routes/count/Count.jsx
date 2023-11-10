import React, { useState } from "react";
import useCount from "../../custom-hooks/useCount";
import { Link } from "react-router-dom";
import './count.css';

const Count = () => {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(event) {
    console.log(event.target.value);
    setNewCount(event.target.value);
  }
  function handleOnClick() {
    setValue(+newCount);
    setNewCount("");
  }
  return (
    <div className="count-wrapper">
      <h1 className="counter-header">{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input value={newCount} type='number' onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set Count</button>
      <Link to='/'>Back to Homepage</Link>
    </div>
  );
};

export default Count;
