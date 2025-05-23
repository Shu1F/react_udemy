import { useState } from "react";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    margin: "auto",
    "border-radius": "9999px",
    border: "none",
    display: "block",
    width: 120,
    height: 60,
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: isSelected ? "pink" : "",
  };

  return (
    <>
      <button
        className={isSelected ? "btn selected" : "btn"}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
