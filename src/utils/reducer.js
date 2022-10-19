const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTEPAD":
      return {
        ...state,
        notepad: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
