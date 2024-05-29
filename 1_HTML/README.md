# HTML

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램

- EX- Chrome, Fire Fox, Safari, Opera, Edge, Brave..
- 사용자가 사용하는 브라우저는 정해져 있지 않으며, 
  브라우저마다 화면이 다르게 출력될 수 있으니,
  브라우저마다 테스트를 하면서 수정
  => 크로스 브라우징 (모든 브라우저에서 호환될 수 있도록)

## 웹 페이지 개발 방법
  
  - 구조(Structure) : HTML
  - 표현(Presentation) : CSS
  - 동적(Behavior) : JavaScript

## HTML(Hyper Text Markup Language)


  - 웹 문서 / HTML 문서 / HTML 페이지 등으로 불림

## 웹 페이지 생성

  - 확장자는 (.html 또는 .htm)
  - 처음 보여지는 화면의 파일 이름은 "index.html"

## main page, sub page로 구성

  - main page : index.html
  - sub page : index.html 제외하고 임의 파일명.html


## 태그


```
<태그명 속성="값"> - 시작 태그 
</태그명> - 종료 태그
```

1. "<" 와 ">" 사이에 명령어(tag, element(요소))
2. 시작태그와 종료태그로 구성
3. 예외적으로 종료태그가 없는 태그들 (img, br, hr, meta, input)
4. 태그는 중첩해서 사용할 수 있음. 종료태그는 나중에 작성한 태그 먼저 작성
- ex)
<div>
   <span></span>
</div>

5. 가급적 모든 태그와 속성은 소문자로 작성한다.
- 속성이란? 태그에 추가적인 정보가 필요할때 사용

## 속성의 특징

1. 태그와 속성, 속성과 속성은 "공백"으로 구분을 한다.

ex)
```html
<a href="디렉토리">
</a>
```

2. 여러개의 속성을 사용할 수 있다.

ex) 한 태그에 여러 속성을 기입한 예

```html
<img src="#" width="300">
```

3. 하나의 속성에는 하나의 값만을 지정할 수 있다.

ex)
```html
<img src="#" width="300,200">
<!-- 작성 불가 -->
```

4. 속성값은 원래의 이름이 한글인 경우가 아니면 사용 불가능하다.

ex)
```html
<img src="#" width="삼백">
<!-- 작성 불가 -->
예외)
<meta name="keywords" content="영화, 한국영화, 외국영화">
<!-- 예외적인 경우 -->
```

## HTML 기본 문서 구조

```html
<!DOCTYPE html>
<html>
<head></head>
<body></body>
</html>
```

- !DOCTYPE html : 현재 문서가 HTML5 언어로 작성된 웹 문서이다.
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보 (실제 웹페이지에서 노출되지는 않음)
- body : 실제 웹 브라우저에 나타날 내용


## head에 많이 쓰이는 태그

1. title : HTML 문서의 제목
ex)
<title>넷플릭스</title>

2. meta : HTML 문서의 속성

## meta 태그

```html
<meta charset="UTF-8"> <!-- 인코딩 방법 지정(문자 세트 지정) --> 

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 반응형 웹사이트(모바일 기기 내 사용이 용이하도록) -->

<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- 익스플로러 브라우저 맞춤 설정 -->

<meta name="keywords" content="키워드1, 키워드2">
<meta name="description" content="문서 설명">
<meta name="author" content="문서 작성자">
<!-- 검색 엔진 (SEO) -->
```

## HTML 기본구조 만들기
.html 확장자 파일에서
! 기입하면 VSC에서 기본 구조 작성