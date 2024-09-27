# 리액트 훅 (React Hook)

- 함수로 만든 리액트 컴포넌트에서 클래스로 만든 리액트 컴포넌트의 기능을 이용하도록 도와주는 함수들이다.
- 이름 앞에 항상 use를 붙인다.
- useState, useEffect, useRef, useContext, ...
- https://legacy.reactjs.org/docs/hooks-reference.html 참고

## useState

```js
import { useState } from "react";

const [state 변수, set 함수] = useState(초기값);
```

- useState를 호출하면 2개의 요소가 담긴 배열을 반환한다.
  이때 첫번째 요소는 현재 상태의 값을 저장하고 있는 변수
  두번째 요소는 state 변수의 값을 변경하는 함수

## useEffect

### 라이프사이클(LifeCycle)

- 크게 마운트(Mount, 탄생), 업데이트(Update, 갱신), 언마운트(Unmount, 사망) 3단계로 구분한다.

- 마운트(Mount) : 컴포넌트를 페이지에 처음 렌더링할 때
- 업데이트(Update) : State나 Props의 값이 바뀌거나 부모 컴포넌트가 리렌더링해서 자신도 리렌더링될 때
- 언마운트(Unmount) : 더 이상 페이지에 컴포넌트를 렌더링하지 않을 떄

### 문법

```js
import { useEffect } from "react";
useEffect(콜백함수, [의존성 배열]);
```

- 의존성 배열 요소에 값이 변화되는 시점에 콜백 함수가 실행된다.

## useRef

```js
import { useRef } from "react";

const 변수 = useRef();
```

- DOM 요소들을 직접 조작할 수 있다. Reference의 줄임말로 참조라는 뜻이다.
