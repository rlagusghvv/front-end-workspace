import { useState } from "react";

let count = 0;

const App = () => {
  const [count, setCount] = useState(0);
  const setAdd = () => {
    setCount(count + 10);
  };
  const setMinus = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <h1>Total Clicks : {count}</h1>
      <button onClick={setAdd}>+10</button>
      <button onClick={setMinus}>-10 </button>
      <button onClick={reset}>reset </button>
    </div>
  );
};

export default App;
