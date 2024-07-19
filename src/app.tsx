import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <p>click: {count}번</p>
    </div>
  );
};

export default App;
