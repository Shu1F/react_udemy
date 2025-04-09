// 非同期処理(Promise)

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    reject();
  }, 2000);
})
  .then(() => {
    console.log(a);
  })
  .catch((c) => {
    console.log("catchが実行");
  });
