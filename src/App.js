import { createContext, useState } from "react";
import Content from "./Content";
import "./App.css";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        Toggle theme
      </button>
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
