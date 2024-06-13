lefttimer();
setInterval(lefttimer, 1000);
// setInterval(() => {
//   lefttimer();
// }, 1000);

function lefttimer() {
  let now = new Date();
  let future = new Date("2025-01-01 00:00:00");
  console.log(now);
  console.log(future);

  let lefttime = (future - now) / 1000;
  console.log(lefttime);

  let leftday = Math.floor(lefttime / (24 * 60 * 60));
  console.log(leftday);
  let lefthour = Math.floor((lefttime / (60 * 60)) % 24);
  console.log(lefthour);
  let leftmin = Math.floor((lefttime / 60) % 60);
  console.log(leftmin);
  let leftsec = Math.floor(lefttime % 60);
  console.log(leftsec);

  leftdate.innerHTML = `<fieldset style=display:inline><h2>${leftday}일, ${lefthour}시간, ${leftmin}분, ${
    String(leftsec).padStart(2, 0) // .padStart(문자열 길이, 공백에 넣을 문자) 문자열의 길이를 지정하고, 해당 길이 만큼 출력될 수 있도록 공백에 넣을 문자를 지정하는 함수 - 문자열에서만 사용가능
  }초가 <br> 남은 2024년 입니다.</h2>`;
}
