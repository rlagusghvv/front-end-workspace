# React

- 페이스북(메타)에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 만들기 위한 라이브러리
- 단일 페이지 애플리케이션(Single Page Application)

## 주요 특징

- **컴포넌트 기반 설계** : React 애플리케이션은 작고 재사용 가능한 컴포넌트로 구성된다.
  각 컴포넌트는 자체적으로 상태(state)와 생명주기(lifecycle)를 가질 수 있다.

- **가상 DOM(Vitual DOM)** : React는 가상 DOM을 사용하여 브라우저의 실제 DOM과 상호작용한다.

- **단방향 데이터 흐름** : React는 단방향 데이터 흐름을 채택하고 있어서, 데이터의 흐름이 컴포넌트 계층 구조에서 위에서 아래로 흐른다.(부모에서 자식으로)

-- **JSX** : React에서는 JSX 문법을 사용하여 컴포넌트 UI를 정의한다. JSX는 JavaScript 코드 안에 HTML과 유사한 문법을 사용할 수 있도록 해주며, 이를 바벨(Bable)과 같은 도구를 사용하여 일반 JavaScript 코드로 변환한다.

## Create React App

- Create React App은 React 애플리케이션을 쉽게 설정하고 시작할 수 있도록 도와주는 도구다.
- 사용하러면 Node.js와 npm (또는 yarn)이 설치되어 있어야 한다.

```
npx create-react-app 프로젝트명 or .
```

- 차이점
- 프로젝트명을 작성할 시 해당 프로젝트를 생성하면서 명령이 실행
- . 같은 경우는 해당 폴더 내에 바로 생성

### 애플리케이션 실행

```
npm (run) start
(yarn start)
```

### 애플리케이션 배포

```
npm (run) build
```

## JSX

### 기본 문법

```js
const MyComponent = () => {
  const name = "테스트";
  return (
    <React.Fragment>
      {/* 이 부분이 주석! */}
      <p>Hello, {name}</p>
    </React.Fragment>
  );
};
export default MyComponent;
```

- JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다.
- 리액트에서 제공하는 <React.Fragment> 태그를 사용해도 되고, 아니라면 빈태그인 <></>를 사용해도 된다.
- JSX 안에서 중괄호 {}를 사용하여 JavaScript 표현식을 포함할 수 있다.
