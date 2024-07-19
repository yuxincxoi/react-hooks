import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 마운트 됨");
  }, []);

  return (
    // 컴포넌트가 마운트 될 때 한번만 실행
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <p>click: {count}번</p>
    </div>
  );
};

export default App;
