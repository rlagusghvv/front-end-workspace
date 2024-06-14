let regId = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
let idp = document.querySelector("li:nth-of-type(1) p");
const idptext = idp.innerHTML;
console.log(idptext);

id.addEventListener("input", function () {
  if (regId.test(id.value)) {
    idp.innerHTML = `ok`;
    idp.style.color = "green";
  } else if (id.value == "") {
    idp.innerHTML = idptext;
    idp.style.color = "black";
  } else {
    idp.innerHTML = idptext;
    idp.style.color = "red";
  }
});

let regpw = /^[a-zA-Z0-9!-~]{8,15}$/;
let pwp = document.querySelector("li:nth-of-type(2) p");
const pwptext = pwp.innerHTML;
console.log(pwptext);

pw.addEventListener("input", function () {
  if (regpw.test(pw.value)) {
    pwp.innerHTML = `ok`;
    pwp.style.color = "green";
  } else if (pw.value == "") {
    pwp.innerHTML = pwptext;
    pwp.style.color = "black";
  } else {
    pwp.innerHTML = pwptext;
    pwp.style.color = "red";
  }
});

let pwcp = document.querySelector("li:nth-of-type(3) p");
const pwcptext = pwcp.innerHTML;
console.log(pwcptext);

pwc.addEventListener("input", function () {
  if (pwc.value === pw.value) {
    pwcp.innerHTML = `ok`;
    pwcp.style.color = "green";
  } else {
    pwcp.innerHTML = pwcptext;
    pwcp.style.color = "red";
  }
});

let regName = /^[가-힣]{2,}$/;
let namep = document.querySelector("li:nth-of-type(4) p");
const nameptext = namep.innerHTML;
console.log(nameptext);

name1.addEventListener("input", function () {
  if (regName.test(name1.value)) {
    namep.innerHTML = `ok`;
    namep.style.color = "green";
  } else if (name1.value == "") {
    namep.innerHTML = nameptext;
    namep.style.color = "black";
  } else {
    namep.innerHTML = nameptext;
    namep.style.color = "red";
  }
});

let regEmail = /^\w+@\w+\.(c[o][m]]|[o][\.][k][r]])]$/;
let emailp = document.querySelector("li:nth-of-type(5) p");
const emailptext = emailp.innerHTML;
console.log(emailptext);

email.addEventListener("input", function () {
  if (regEmail.test(email.value)) {
    emailp.innerHTML = `ok`;
    emailp.style.color = "green";
  } else if (email.value == "") {
    emailp.innerHTML = emailptext;
    emailp.style.color = "black";
  } else {
    emailp.innerHTML = emailptext;
    emailp.style.color = "red";
  }
});

const button1 = document.querySelector("button:nth-of-type(1)");
console.log(button1.innerHTML);

button1.addEventListener("click", function () {
  alert("회원가입 완료");
});
const button2 = document.querySelector("button:nth-of-type(2)");
console.log(button2.innerHTML);

button2.addEventListener("click", function () {
  location.reload();
});
