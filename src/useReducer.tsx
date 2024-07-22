import React from "react";

// 상태와 액션 타입 정의
interface State {
  count: number;
  text: string;
}

// count 초기값 설정
const initialCount: State = { count: 0, text: "" };

const reducer = (state: State, action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // count 속성만 업데이트하고, 나머지 state 속성은 그대로 유지
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};