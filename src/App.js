import { useReducer, useRef } from "react";
import Todo from "./Todo";
const initState = {
  jobs: [],
  job: "",
};
const SET_JOB = "set";
const ADD_JOB = "add";
const REMOVE_JOB = "remove";

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      return (newState = {
        ...state,
        job: action.payload,
      });
    case ADD_JOB:
      return (newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      });
    case REMOVE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("Invalid action");
  }
};
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const removeJob = (payload) => {
  return {
    type: REMOVE_JOB,
    payload,
  };
};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  return <Todo />;
}

export default App;
