import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // count가 변경될 때마다 실행
  useEffect(() => {
    console.log("count가 변경됨");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <p>click: {count}번</p>
    </div>
  );
};

export default App;
