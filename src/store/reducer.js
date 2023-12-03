import { ADD_CONTEXT, REMOVE_CONTEXT, SET_CONTEXT } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_CONTEXT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_CONTEXT:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_CONTEXT:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      throw new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
