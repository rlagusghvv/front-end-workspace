// 정규표현식
regId = /^[A-Za-z][a-zA-Z0-9]{3,11}$/;
regPw = /^[!-~]{8,15}$/;
regName = /^[가-힣]{2,}$/;
regEmain = /^[!-~]+@[!-~]+\.[!-~]+$/;

// p태그 받아오기
const idp = document.querySelector("p:nth-of-type(1)");
const idptext = idp.innerHTML;
const pwp = document.querySelector("p:nth-of-type(2)");
const pwptext = pwp.innerHTML;
const pwCp = document.querySelector("p:nth-of-type(3)");
const pwCptext = pwCp.innerHTML;
const namep = document.querySelector("p:nth-of-type(4)");
const nameptext = namep.innerHTML;
const emailp = document.querySelector("p:nth-of-type(5)");
const emailptext = emailp.innerHTML;

console.log(idp.innerHTML);
console.log(pwp.innerHTML);
console.log(pwCp.innerHTML);
console.log(namep.innerHTML);
console.log(emailp.innerHTML);

// eventlistner

id.addEventListener("input", function () {
  if (regId.test(id.value)) {
    idp.innerHTML = "OK";
    idp.style.color = "green";
  } else if (id.value == "") {
    idp.innerHTML = idptext;
    idp.style.color = "black";
  } else {
    idp.innerHTML = idptext;
    idp.style.color = "red";
  }
});

password.addEventListener("input", function () {
  if (regPw.test(password.value)) {
    pwp.innerHTML = "OK";
    pwp.style.color = "green";
  } else if (password.value == "") {
    pwp.innerHTML = pwptext;
    pwp.style.color = "black";
  } else {
    pwp.innerHTML = pwptext;
    pwp.style.color = "red";
  }
});

passwordC.addEventListener("input", function () {
  if (passwordC.value === password.value) {
    pwCp.innerHTML = "OK";
    pwCp.style.color = "green";
  } else if (passwordC.value === "") {
    pwCp.innerHTML = pwCptext;
    pwCp.style.color = "black";
  } else {
    pwCp.innerHTML = pwCptext;
    pwCp.style.color = "red";
  }
});

names.addEventListener("input", function () {
  if (regName.test(names.value)) {
    namep.innerHTML = "OK";
    namep.style.color = "green";
  } else if (names.value == "") {
    namep.innerHTML = nameptext;
    namep.style.color = "black";
  } else {
    namep.innerHTML = nameptext;
    namep.style.color = "red";
  }
});

email.addEventListener("input", function () {
  if (regEmain.test(email.value)) {
    emailp.innerHTML = "OK";
    emailp.style.color = "green";
  } else if (email.value == "") {
    emailp.innerHTML = emailptext;
    emailp.style.color = "black";
  } else {
    emailp.innerHTML = emailptext;
    emailp.style.color = "red";
  }
});

// 버튼 태그 불러오기
const button1 = document.querySelector("button:nth-of-type(1)");
const button2 = document.querySelector("button:nth-of-type(2)");

// 버튼 이벤트리스너

button1.addEventListener("click", function () {
  alert("회원가입 완료!");
});

button2.addEventListener("click", function () {
  location.reload();
});
