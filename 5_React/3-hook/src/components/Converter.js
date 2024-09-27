import { useState, useRef } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [Minutes, changeMinutes] = useState("Minutes");
  const [Hours, changeHours] = useState("Hours");
  const [disabled, changeDisabled] = useState(true);
  const [text, changeText] = useState("Minutes => Hours");
  const MinutesRef = useRef();
  const reset = () => {
    changeMinutes("Minutes");
    changeHours("Hours");
    changeText("Minutes => Hours");
    changeDisabled(true);
  };
  const change = () => {
    if (disabled) {
      changeDisabled(false);
      changeText("Hours => Minutes");
    } else {
      changeDisabled(true);
      changeText("Minutes => Hours");
    }
    return;
  };
  const write = (e) => {
    if (!MinutesRef.current.disabled) {
      changeMinutes(e.target.value);
      changeHours(Math.floor(e.target.value / 60));
    } else {
      changeHours(e.target.value);
      changeMinutes(e.target.value * 60);
    }
  };
  //   const click = (e) => {
  //     e.target.value = "";
  //   };
  return (
    <>
      <h1>Time Converter</h1>
      <span>Minutes : </span>
      <input
        type="number"
        ref={MinutesRef}
        placeholder="Minutes"
        onChange={write}
        value={Minutes}
        disabled={!disabled}
      />
      <br />
      <br />
      <span>Hours : </span>
      <input
        type="number"
        // onClick={click}
        placeholder="Hours"
        onChange={write}
        value={Hours}
        disabled={disabled}
      />
      <br />
      <br />
      <Btn click={reset} text="Reset" />
      <Btn click={change} text={text} />
    </>
  );
};

export default Converter;

// 풀이
// import { useState, useEffect } from "react";
// import Btn from "./Btn";

// const Converter = () => {
//   const [text, setText] = useState("Minutes => Hours");
//   const [bool, setBool] = useState(false);
//   const [number, setNumber] = useState("");

//   const invert = () => {
//     setBool(!bool);
//     reset();
//   };

//   const change = (e) => {
//     setNumber(e.target.value);
//   };

//   const reset = () => {
//     setNumber("");
//   };

//   useEffect(() => {
//     if (bool) {
//       setText("Hours => Minutes");
//     } else {
//       setText("Minutes => Hours");
//     }
//   }, [bool]);
//   return (
//     <>
//       <h1>Time Converter</h1>
//       <p>
//         Minutes :{" "}
//         <input
//           type="number"
//           placeholder="Minutes"
//           disabled={bool}
//           onChange={change}
//           value={bool ? number * 60 : number}
//         />
//       </p>
//       <p>
//         Hours :{" "}
//         <input
//           type="number"
//           placeholder="Hours"
//           disabled={!bool}
//           value={bool ? number : Math.floor(number / 60)}
//           onChange={change}
//         />
//       </p>
//       <Btn click={reset} text="Reset" />
//       <Btn click={invert} text={text} />
//     </>
//   );
// };
// export default Converter;
