// window.addEventListener( // window - 가장 최상위 객체
//   "DOMContentLoaded", // body 내에 스크립트를 넣지 않고, head 부분에 넣은 경우 사용
//   // DOMContentLoaded : DOM 구조가 로드되고 실행!
//   function () {
//     const h1 = document.querySelector("h1");
//     h1.onmouseenter = function () {
//       h1.style.backgroundColor = "purple";
//     };
//     h1.onmouseleave = function () {
//       h1.style.backgroundColor = "pink";
//     };

//     // h1.addEventListener(이벤트명 ex "click, mouseenter ...", 이벤트가 발생했을 때 일어날 함수(listener))

//     h1.addEventListener("click", function () {
//       h1.style.backgroundColor = "skyblue";
//     });
//   }
// );
const h1 = document.querySelector("h1");
console.log(h1);
h1.onmouseenter = function () {
  h1.style.backgroundColor = "purple";
};
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};

// h1.addEventListener(이벤트명 ex "click, mouseenter ...", 이벤트가 발생했을 때 일어날 함수(listener))

h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
});

// const img = document.querySelectorAll("img");
// // for (let i = 0; i < img.length; i++) {
// // img[i].addEventListener("click", function (evnet) {
// for (const item of img) {
//   item.addEventListener("click", function (event) {
//     console.log(event.currentTarget);
//     // img[i].style.display = "none";
//     event.currentTarget.style.display = "none";
//     alert("item");
//     // container.remove("img"); 전체 삭제
//   });
// }

const container = document.querySelector(".container");

function removeHandler(e) {
  console.log(e.target); // 이미지 자체
  console.log(e.currentTarget); // 컨테이너
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler);
