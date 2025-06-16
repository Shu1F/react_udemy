import { useReducer, useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {
    switch (action) {
      case "+":
        return ++prev;
      case "-":
        return --prev;
      default:
        throw new Error("不適切なactionです。");
    }

    // if (action === "+") return ++prev;
    // else if (action === "-") return --prev;
  }, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };
  const rCountUp = () => {
    dispatch("+");
  };

  const rCountDown = () => {
    dispatch("-");
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rCountUp}>+</button>
        <button onClick={rCountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
