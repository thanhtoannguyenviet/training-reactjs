import { useReducer, useRef } from "react";
import { setJob, addJob, removeJob } from "./actions";
import reducer from "./reducer";
const initState = {
  job: "",
  jobs: [],
};
function Todo() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>TO DO:</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo ..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={() => handleSubmit()}> Add</button>
      <ul>
        {jobs &&
          jobs.map((job, index) => (
            <li key={index}>
              {job}{" "}
              <button onClick={() => dispatch(removeJob(index))}> X </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
