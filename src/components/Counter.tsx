import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>Test</div>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
