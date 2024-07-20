import React, { useContext } from "react";
import { ThemeContext } from "./themeProvider";

const ThemeComponent = () => {
  // useContext를 사용하여 ThemeContext에서 theme과 setTheme 가져오기
  const { theme, setTheme } = useContext(ThemeContext);
};

export default ThemeComponent;
