import { useRef } from "react";
import "./App.css";
import { useStore } from "./store";
import { addContext, removeContext, setContext } from "./store/actions";
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const ref = useRef();
  const handleSubmit = () => {
    dispatch(addContext(todoInput));
    dispatch(setContext(""));
    ref.current.focus();
  };
  return (
    <div>
      <input
        ref={ref}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(setContext(e.target.value))}
      />
      <button onClick={() => handleSubmit()}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(removeContext(index))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
