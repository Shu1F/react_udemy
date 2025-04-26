import { useState } from "react";
const Example = () => {
  let [btnCount, setBtnCount] = useState(0);
  let [btnCount2, setBtnCount2] = useState(10);
  let [btnCount3, setBtnCount3] = useState(100);
  return (
    <>
      <button
        onClick={() => {
          setBtnCount(btnCount + 1);
        }}
      >
        ボタンA
      </button>
      = ボタンを{btnCount}回押しました！
      <button
        onClick={() => {
          setBtnCount2(btnCount2 + 1);
        }}
      >
        ボタンB
      </button>
      = ボタンを{btnCount2}回押しました！
      <button
        onClick={() => {
          setBtnCount3(btnCount3 + 1);
        }}
      >
        ボタンC
      </button>
      = ボタンを{btnCount3}回押しました！
    </>
  );
};

export default Example;
