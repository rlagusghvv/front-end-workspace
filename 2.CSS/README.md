# CSS (Cascaing Style Sheet)

- 웹 페이지의 표현(디자인)을 나타내는 언어
- 특정 요소를 선택해서 원하는 "스타일"을 적용시킬 수 있음

'''css
선택자(누구한테 스타일을 줄껀지?) {
속성(어떤 효과를 줄껀지?): 값(얼만큼 줄껀지?);
}
'''

## 스타일 적용 방법

### 내부 방식

1. 인라인 방식

ex)
'''html
<태그 style="속성: 값; 속성:값;"></태그>
'''

2. 내부 스타일

'''html

<head>
<style>
    선택자 {
        속성: 값;
        속성: 값;
    }
</style>
</head>
'''

### 외부 방식

3. 링크 방식

'''html

<head>
<link rel="stylesheet" type="text/css" href="style.css" />

- type 속성은 필수는 아니지만, 명시적으로 지정하면 브라우저가 리소스를 처리하는 데 도움이 됩니다. 최신 HTML5 표준에서는 브라우저가 MIME 타입을 자동으로 감지할 수 있으므로, type 속성을 생략해도 대부분의 경우 정상적으로 작동합니다. 하지만 호환성을 위해 사용하는 것이 좋습니다.

</head>
'''

'''css
선택자{
속성: 값;
속성: 값;
}

'''

## 선택자 우선순위

1. 동일한 선택자를 사용하는 경우

- 가장 나중에 작성된 스타일이 적용! (코드 나열 기준)

2. 다른 방식의 선택자를 사용하는 경우

- (!important) > inline > id > class > tag > 전체 선택자
- 정밀하게 스타일을 넣을 수 있도록 이러한 우선순위를 적용.

## 크기를 지정하는 단위

- 절대 크기
- **px(픽셀)** : 모니터의 픽셀 단위로 크기를 계산

- 상대 크기
- **%(퍼센트)** : 부모 요소의 크기에 대한 상대적인 비율로 계산
- **em** : 부모 요소에서 지정한 크기를 1em(기본 16px)으로 계산
- **rem** : 최상위 요소('html')에서 지정한 폰트의 크기를 1rem(기본 16px)으로 계산
- em보다 rem이 중요! (em은 부모의 크기에 따라서 상대적으로 계산되기 때문에 부모 요소의 크기에 따라 단위가 달라져 사용하기 어려움)

## 색상 표현 방법

### 생상 이름 표기법

- 영문으로 색상 이름을 표시하는 방법
- 모든 브라우저에서 표현할 수 있는 색상을 웹 안전 색상(Web Safe Colors)로 구성
- 216가지 색상

#### 16진수 표기법

- #기호 다음에 6자리 16진수로 표시하는 방법
- 6자리는 앞에서부터 두 자리씩 묶어서 Red, Green, Blue로 표시
- #000000(검정색) ~ #ffffff(흰색)

### rgb/rgba 표기법

- rgb 표기법은 16진수 표기법과 다르게 10진수로 Red, Green, Blue를 표시
- rgba 표기법은 투명도 조절이 가능해서 사용! (0은 완전 투명, 1은 완전 불투명)

'''
rgb(Red(0~255),Green(0~255),Blue(0~255));

rgba(Red(0~255),Green(0~255),Blue(0~255),alpha<투명도>(0~1));
'''

### hsl/hsla 표기법

- hsl 표기법은 앞에서부터 색상(hue), 채도(saturation), 밝기(brifgtness)를 표시
- hsla 표기법은 rgba와 동일하게 hsl에 불투명도가 더해지는 표기법
- 색상(hue)은 색상환으로 표시 (0~360, 360-빨간색, 120-초록색, 240-파란색)
- 채도(saturation)는 %로 표시 (0%는 회색톤, 100%는 순색)
- 밝기(brightness)는 %로 표시 (0%가 가장 어둡고, 100%는 가장 밝다)

justify-content: flex-start / flex-end / center / space-between / space-around / space-evenly;

- flex-start : 기본값. 아이템들을 시작점으로 정렬
- flex-end : 아이템들을 끝점으로 정렬
- center : 아이템들을 가운데로 정렬
- space-between : 아이템들 사이에 균일한 간격으로 정렬
- space-evenly : 아이템들의 사이와 양 끝에 균일한 간격으로 정렬

## align-items

- 수직축 방향으로 정렬

'''css
.container {
align-times : stretch / flex-start / flex-end / center / baseline;
}
'''

- stretch : 기본값. 아이템들을 끝까지 늘림
- flex-start : 아이템들을 위쪽으로 정렬
- flex-end : 아이템들을 아래쪽으로 정렬
- center : 아이템들을 가운데 정렬
- baseline : 아이템들을 텍스트 베이스라인 기준으로 정렬

## align-content

- 여러 행 정렬
- flex-wrap: wrap; 이 설정된 상태에서, 아이템들의 행이 2줄 이상인 경우 수직축 방향 정렬을 결정하는 속성

'''css
.container {
alighn-content : stretch / flex-start / flex-end / center / space-between / space-around / space-evenly;
}
'''

## flex-basis

- flex 아이템의 기본 크기 설정 (flex-direction이 row일 때는 너비, column일 떄는 높이)

'''css
.item {
flex-basis: auto(기본값) / 0 / 크기;
}
'''

## flex-grow

- flex-basis의 값보다 커질 수 있는지를 결정하는 속성

'''css
.item {
flex-grow: 0(기본값) / 숫자;
}
'''

## flex-shrink

- flex-grow와 쌍을 이루는 속성
- flex-basis의 값보다 작아질 수 있는지를 결절하는 속성

'''css
.item {
flex-shrink: 0(기본값) / 숫자;
}
'''

## flex

- flex-grow, flex-shrink, flex-basis를 한번에 쓸 수 있는 속성

'''css
.item{
flex: 1 1 auto;
/_ flex-grow : 1; flex-shrink: 1; flex-basis: auto; _/

flex: 1 500px;
/_ flex-grow : 1; flex-shrink: 1; flex-basis: 500px; _/

flex: 1;
/_ flex-grow : 1; flex-shrink: 1; flex-basis: 0%; _/
}
'''
