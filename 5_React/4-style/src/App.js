import "./assets/App.css";
import module from "./assets/App.module.css";
import "./assets/App.scss";
import styled from "styled-components";

// Styled Components
const StyledDiv = styled.div`
  background-color: darkcyan;
  color: white;
  text-align: center;
  h1 {
    font-size: 24px;
    padding: 20px;
  }

  &:hover {
    background-color: white;
  }
`;

const App = () => {
  return (
    <>
      {/* 인라인 스타일 */}
      <div
        style={{ backgroundColor: "blue", color: "white", textAlign: "center" }}
      >
        <h1>Inline Style</h1>
      </div>

      {/* CSS 파일 분리 */}
      <div className="css-style">
        <h1>CSS File Style</h1>
      </div>

      {/* CSS 모듈 */}
      <div className={module.moduleStyle}>
        <h1>CSS Module Style</h1>
      </div>

      {/* SCSS */}
      <div className="scss-style">
        <h1>SCSS Style</h1>
      </div>

      {/* Styled Components */}
      <StyledDiv>
        <h1>Styled Components</h1>
      </StyledDiv>
    </>
  );
};

export default App;
