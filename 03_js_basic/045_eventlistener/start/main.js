const h1Elment = document.querySelector("h1");
console.dir(h1Elment);
console.log(h1Elment.textContent);
h1Elment.textContent = "変更後のタイトル";

const btnEl = document.querySelector("button");
const helloFn = (e) => {
  console.log(e.target.textContent);
  console.log("Hello");
};

btnEl.addEventListener("click", helloFn);
