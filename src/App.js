import Content from "./Content";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function App() {
  const context = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={() => {
          context.toggleTheme();
        }}
      >
        Toggle theme
      </button>
      <Content />
    </>
  );
}

export default App;
