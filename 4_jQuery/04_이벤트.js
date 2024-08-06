// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행 ");
});

// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감!");
// });
// 마우스가 내려갈 떄(mouseleave)
// -> 배경 색상 : beige, 텍스트 : 마우스가 내려감!
// $("#area2").on("mouseleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 내려감!");
// });
/*
$("#area2").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감!");
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "beige").text("마우스가 내려감!");
  }
});

$("#area2").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
});
*/
$("#area2").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감!");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감!");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질 떄
    console.log(`keydown - e.key : ${e.key}, e.keycode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력될 때
    console.log(`keypress - e.key : ${e.key}, e.keycode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 뗴어질 때
    console.log(`keyup - e.key : ${e.key}, e.keycode : ${e.keyCode}`);
  },
});

// $("#textarea2").on("keyup", () => {
//   let textLength = $("#textarea2").val().length;

//   // 글자 수가 100을 초과하면 100글자까지만 남기고 나머지를 제거
//   if (textLength > 100) {
//     $("#textarea2").val($("#textarea2").val().substr(0, 100));
//     textLength = 100; // 텍스트 길이를 100으로 수정
//   }

//   $("#counter").text(textLength);
// });

$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let length = target.val().length;
  let maxLength = parseInt($("#maxLength").text());
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(length);
  }
  console.log(length);
});

$("#userId").keyup((e) => {
  let target = $(e.target);
  let length = target.val().length;
  let regExp = /^[a-z][0-9a-z]/;
  // /^[a-z][0-9a-z]{3,11}$/

  if (4 <= length && length <= 12 && regExp.test(target.val())) {
    $("#idCheck").text("정상사용 가능한 아이디입니다.").css("color", "green");
  } else if (length == 0) {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가한 아이디입니다.").css("color", "red");
  }
});

let num = 0;
// 3. trigger () 메서드
// $("#area3").click((event) => {
//   if (event) {
//     num++;
//     $("#counter2").text(num);
//   }
// });
$("#area3").click(() => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
});
