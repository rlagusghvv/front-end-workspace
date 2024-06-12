function btn1() {
  console.log(document.head);
  console.log(document.body);

  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]); // <div>Hello, World!</div>
  console.log(div[1]); // <div>Hello, JavaScript</div>
}

function btn2() {
  const id = document.getElementById("testId");
  console.log(id);
  const id2 = document.getElementById("testId2");
  console.log(id2);
}

function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const classdiv = document.getElementsByClassName("testClass");
  console.log(classdiv);
}

function btn4() {
  // 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div);
}

function btn5() {
  let div = document.querySelector(".testClass"); // querySelector : 하나만 가지고 옴 주로 id를 대상으로 사용
  console.log(div);

  div = document.querySelector("#testId2");
  console.log(div);

  div = document.querySelectorAll("div"); // querySelectorAll : 여러 객체를 가져올 수 있음, 배열로 리턴!
  console.log(div);
  console.log(div[0]);
}

function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>"; // "" 내 컨텐츠 그대로 변경
  div[1].innerHTML = "<span>안녕하시렵니까</span>"; // "" 내 태그 등을 반영해서 html 코드 형태로 변경
  console.log(div[1].innerHTML); // html 코드 가져오기
}

function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribute("data-test", "테스트"); // 새로운 속성과 속성값 생성
  console.log(div);
  div.setAttribute("data-test", "테스트2"); // 기존 속성의 값 변경
  console.log(div);
  console.log(div.getAttribute("data-test")); // 속성 값 가져오기
}

function btn8() {
  const div = document.querySelector("#testId2");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}

const div = document.querySelector("#testId2");
function btn9() {
  div.classList.add("black");
}

function btn10() {
  div.classList.remove("black");
}

function btn11() {
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}

function btn12() {
  div.classList.toggle("black"); // btn11의 기능을 담아서 만든 함수 toggle
}

function btn13() {
  // <p> Lorem Ipsum </p>
  const div = document.querySelector("#testId3");
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";

  // div에 p태그 추가

  div.appendChild(p);
}

function btn14() {
  const div = document.querySelector("#testId3"); // p.parentNode
  const p = document.querySelector("p");

  //   div.removeChild(p);
  p.parentNode.removeChild(p);
}
