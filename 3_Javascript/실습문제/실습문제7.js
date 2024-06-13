const img = document.querySelectorAll("img");
console.log(img);

const click = document.querySelector("#click");
click.addEventListener("click", function () {
  let i = 0;
  let j = 0;
  let k = 0;
  for (i = Math.floor(Math.random() * 2); i == j && j == k; i * 1) {
    for (j = Math.floor(Math.random() * 2); i == j && j == k; j * 1) {
      for (k = Math.floor(Math.random() * 2); i == j && j == k; k * 1) {
        {
          console.log(img[i]);
          console.log(img[j]);
          console.log(img[k]);
          break;
        }
      }
    }
  }
});

const restart = document.querySelector("#restart");

restart.addEventListener("click", function () {
  location.reload();
});
