import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(d0decrement());
  };

  return (
    <div>
      <button onClick={handleDecrement} data-testid="decrement-button">
        decrement
      </button>
    </div>
  );
};

export default Counter;
