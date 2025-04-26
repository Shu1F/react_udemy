const Example = () => {
  const clickHundler = () => {
    alert("ボタンがクリックされました");
  };
  const clickHundler2 = () => {
    console.log("ボタンがクリックされました");
  };
  return (
    <>
      <button onClick={clickHundler}>クリックしてね</button>
      <button onClick={clickHundler2}>クリックしてね</button>
    </>
  );
};

export default Example;
