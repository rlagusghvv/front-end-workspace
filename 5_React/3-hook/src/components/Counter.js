import { useEffect, useState, useRef } from "react";
import Btn from "./Btn";

let count = 0;

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);
  const setAdd = () => {
    setCount(count + 10);
  };
  const setMinus = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  // 마운트
  useEffect(() => {
    console.log("mount!");
  }, []);

  // 업데이트
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("update!");
    }
  }, [count]);

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);

  return (
    <>
      <h1>Hello, React!</h1>
      <h1>Total Clicks : {count}</h1>
      <Btn click={setAdd} text="+10" />
      <Btn click={setMinus} text="-10" />
      <Btn click={reset} text="reset" />
    </>
  );
};

export default Counter;
