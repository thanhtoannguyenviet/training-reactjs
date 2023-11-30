function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("Prev sate:", prevState);
    console.log("Action:", action);
    const newState = reducer(prevState, action);
    console.log("Next State:", newState);
    console.groupEnd();
    return newState;
  };
}
