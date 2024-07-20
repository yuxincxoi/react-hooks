import React, { useContext, useState } from "react";
import { ThemeProvider } from "./themeProvider";
import ThemeComponent from "./themeComponent";

const App = () => {
  // ThemedComponent를 ThemeProvider로 감싸서 테마 정보를 전달
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
};

export default App;
