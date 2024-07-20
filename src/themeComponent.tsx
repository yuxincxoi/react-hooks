import React, { useContext } from "react";
import { ThemeContext } from "./themeProvider";

const ThemeComponent = () => {
  // useContext를 사용하여 ThemeContext에서 theme과 setTheme 가져오기
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        테마 변경
      </button>
    </div>
  );
};

export default ThemeComponent;
