import { createContext, useState } from "react";
import Content from "./Content";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        Toggle theme
      </button>
      <Content theme={theme} />
    </>
  );
}

export default App;
