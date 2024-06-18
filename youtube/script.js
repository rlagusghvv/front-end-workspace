// 스크롤 이벤트에 따라 스타일 변화를 주는 코드!

const bar = document.querySelector(".progress-bar");
window.addEventListener("scroll", function () {
  // maxScrollValue = 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 높이(현재 창)
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
  bar.style.width = parseInt((window.scrollY / maxScrollValue) * 100) + "%";
});
