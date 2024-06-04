# CSS (Cascading Style Sheet)

- 웹 페이지의 표현(디자인)을 나타내는 언어
- 특정 요소를 선택해서 원하는 "스타일"을 적용시킬 수 있음

```css
선택자(누구한테) {
  속성(어떤효과): 값(얼만큼);
}
```

## 스타일 적용 방법

### 내부 방식

1. 인라인 방식

```html
<태그 style="속성: 값; 속성: 값;"></태그>
```

2. 내부 스타일

```html
<head>
  <style>
    선택자 {
      속성: 값;
      속성: 값;
    }
  </style>
</head>
```

### 외부 방식

3. 링크 방식

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
```

```css
선택자 {
  속성: 값;
  속성: 값;
}
```

## 선택자 우선순위

1. 동일한 선택자를 사용하는 경우

- 나중에 작성한 스타일 적용

2. 다른 방식의 선택자 사용

- !important > 인라인 방식 > 아이디 선택자 > 클래스 선택자 > 태그 선택자 > 전체 선택자

## 크기를 지정하는 단위

- 절대 크기
  - **px** : 모니터의 픽셀 단위로 크기를 계산
- 상대 크기
  - %(퍼센트) : 부모 요소의 크기에 대한 상대적인 비율로 계산
  - em : 부모 요소에서 지정한 크기를 1em으로 계산
  - **rem** : 최상위 요소(`html`)에서 지정한 폰트의 크기를 1rem으로 계산

## 색상 표현 방법

### 색상 이름 표기법

- 영문으로 색상 이름을 표시하는 방법
- 모든 브라우저에서 표현할 수 있는 색상을 웹 안전 색상(Web Safe Colors)
- 216가지

### 16진수 표기법

- #기호 다음에 6자리 16진수로 표시하는 방법
- 6자리는 앞에서부터 두 자리씩 묶어서 Red, Green, Blue로 표시
- #000000(검은색) ~ #ffffff(흰색)

### rgb/rgba 표기법

- rgb 표기법은 16진수 표기법과 다르게 10진수로 Red, Green, Blue를 표시
- rgba 표기법은 rgb에 불투명도 값을 추가로 지정 (0은 완전 투명, 1은 완전 불투명)

```
rgb(red(0~255), green(0~255), blue(0~255));
rgba(red(0~255), green(0~255), blue(0~255), alpha(0~1));
```

### hsl/hsla 표기법

- hsl 표기법은 앞에서부터 색상(hue), 채도(saturation), 밝기(brightness)를 표시
- hsla 표기법은 hsl에 불투명도 값을 추가로 지정
- 색상(hue)은 색상환으로 표시 (0~360, 360-빨간색, 120-초록색, 240-파란색)
- 채도(saturation)는 %로 표시 (0%는 회색톤, 100%는 순색)
- 밝기(brightness)는 %로 표시 (0%는 가장 어둡고, 100%는 가장 밝다)

# Flex(Flexible Box, Flexbox)

- CSS 레이아웃 모델로 화면 크기에 따라 레이아웃의 배치나 크기를 조절할 때 편리하게 사용

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
</div>
```

## display: flex;

- Flex 컨테이너에 `display: flex;` 적용하면서 시작

```css
.container {
  display: flex;
}
```

## flex-direction

- 배치 방향 설정
- 아이템들이 배치되는 메인축의 방향을 결정하는 속성

```css
.container {
  flex-direction: row / column / row-reverse / column-reverse;
}
```

- row : 왼쪽부터 순차적으로 배치 (기본값)
- row-reverse : 오른쪽부터 배치
- column : 위에서부터 배치
- column-reverse : 아래에서부터 배치

## flex-wrap

- 아이템 줄바꿈을 어떻게 할지 결정하는 속성

```css
.container {
  flex-wrap: nowrap / wrap / wrap-reverse;
}
```

- nowrap : 기본값. 줄바꿈을 하지 않음
- wrap : 줄바꿈
- wrap-reverse : 역순으로 배치 후 줄바꿈

## flex-flow

- flex-direction과 flex-wrap을 한꺼번에 지정할 수 있는 속성

```css
.container {
  flex-flow: flex-direction flex-wrap;
}
```

## justify-content

- 메인축 방향으로 정렬

```css
.container {
  justify-content: flex-start / flex-end / center / space-between /
    space-around / space-evenly;
}
```

- flex-start : 기본값. 아이템들을 시작점으로 정렬
- flex-end : 아이템들을 끝점으로 정렬
- center : 아이템들을 가운데로 정렬
- space-between : 아이템들 사이에 균일한 간격으로 정렬
- space-around : 각 아이템의 좌우에 균일한 간격으로 정렬
- space-evenly : 아이템들의 사이와 양 끝에 균일한 간격으로 정렬

## align-items

- 수직축 방향으로 정렬

```css
.container {
  align-items: stretch / flex-start / flex-end / center / baseline;
}
```

- stretch : 기본값. 아이템들을 끝까지 늘림
- flex-start : 아이템들을 위쪽으로 정렬
- flex-end : 아이템들을 아래쪽으로 정렬
- center : 아이템들을 가운데 정렬
- baseline : 아이템들을 텍스트 베이스라인 기준으로 정렬

## align-content

- 여러 행 정렬
- `flex-wrap: wrap;` 이 설정된 상태에서, 아이템들의 행이 2줄 이상인 경우 수직축 방향 정렬을 결정하는 속성

```css
.container {
  align-content: stretch / flex-start / flex-end / center / space-between /
    space-around / space-evenly;
}
```

## flex-basis

- flex 아이템의 기본 크기 설정 (flex-direction이 row일 때는 너비, column일 때는 높이)

```css
.item {
  flex-basis: auto / 0 / 크기;
}
```

## flex-grow

- flex-basis의 값보다 커질 수 있는지를 결정하는 속성

```css
.item {
  flex-grow: 0 / 숫자;
}
```

## flex-shrink

- flex-grow와 쌍을 이루는 속성으로, flex-basis 값보다 작아질 수 있는지를 결정하는 속성

```css
.item {
  flex-shrink: 1 / 숫자;
}
```

## flex

- flex-grow, flex-shrink, flex-basis를 한번에 쓸 수 있는 속성

```css
.item {
  flex: 1 1 auto;
  /* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */

  flex: 1 500px;
  /* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; */

  flex: 1;
  /* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
}
```

## align-self

- 특정 아이템만 정렬을 따로 정렬하고자 할 때 사용하는 속성

```css
.item {
  align-self: flex-start / flex-end / center / baseline / stretch;
}
```

## order

- item들의 순서를 바꿀 수 있는 속성

```css
.item {
  order: 0 / 숫자;
}
```
