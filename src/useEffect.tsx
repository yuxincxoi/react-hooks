import React, { useEffect, useState } from "react";

// * timer 예제
const App = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    return () => {
      // clean-up 함수 : 언마운트시에 타이머 해제
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>{second}초</p>
    </div>
  );
};

// * count 예제
// const App = () => {
//   const [count, setCount] = useState(0);

//   // count가 변경될 때마다 실행
//   useEffect(() => {
//     console.log("count가 변경됨");
//   }, [count]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>click</button>
//       <p>click: {count}번</p>
//     </div>
//   );
// };

export default App;
