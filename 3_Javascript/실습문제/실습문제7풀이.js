const images = document.querySelectorAll(".container img");
console.log(images);
let count = 0;
const span = document.querySelector("span");
const result = document.querySelector("#result");
function clickHandler() {
  const random = [
    Math.floor(Math.random() * 3 + 1),
    Math.floor(Math.random() * 3 + 1),
    Math.floor(Math.random() * 3 + 1),
  ];
  // 이미지들이 랜덤으로 계속 바뀌고 있음
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `/resources/css/짱구${random[i]}.jpg`);
  }
  // 클릭 버튼의 숫자가 증가하고 있음
  span.innerHTML = ` ${++count}`;

  // 조건 : 3개의 이미지가 동일하면
  if (random[0] === random[1] && random[1] === random[2]) {
    result.innerHTML = "Congratulation!! Press restart to play again~!!";
    click.setAttribute("disabled", "disabled");
  }
  // ==> 아래 결과 텍스트가 나오면서 버튼 클릭이 더 이상 안되게 구현
}

function restartHandler() {
  //   location.reload();
  // 처음으로 초기화됨
  // 이미지 처음에 셋팅했던 이미지로 변경
  for (i = 0; i < images.length; i++)
    images[i].setAttribute("src", `/resources/css/짱구${i + 1}.jpg`);

  // 숫자는 다시 0으로 셋팅하고 span 태그 값 비우기
  count = 0;
  span.innerHTML = "";

  // 아래 텍스트도 비우기
  result.innerHTML = "";

  // 버튼 disabled 삭제 -> 속성 삭제는 removeAttribute
  click.removeAttribute("disabled");
}

click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);
