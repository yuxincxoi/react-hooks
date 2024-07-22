import React, { useReducer } from "react";

// 상태와 액션 타입 정의
interface State {
  count: number;
  text: string;
}
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET_TEXT"; text: string };

// count 초기값 설정
const initialCount: State = { count: 0, text: "" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // count 속성만 업데이트하고, 나머지 state 속성은 그대로 유지
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;
