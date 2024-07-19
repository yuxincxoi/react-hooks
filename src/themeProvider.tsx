import React, { createContext, useState, ReactNode, FC } from "react";

// Theme 타입 정의
type Theme = "light" | "dark";

// Context 데이터 구조 정의
interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// 기본값 설정
const defaultThemeContext: ThemeContextProps = {
  theme: "light",
  setTheme: () => {},
};

// 테마 정보를 담을 Context 상자 만들기
const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

// ThemeProviderProps 인터페이스 정의
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // 기본 테마를 'light'로 설정
  const [theme, setTheme] = useState<Theme>("light");

  // 상자의 value에 정보를 넣어서 컴포넌트 트리의 하위 컴포넌트들이 사용할 수 있도록 한다.
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
