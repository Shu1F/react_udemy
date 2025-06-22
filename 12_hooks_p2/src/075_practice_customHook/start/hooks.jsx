import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return { count, countUp };
};

export default useCount;
