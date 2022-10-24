const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTEPAD":
      return {
        ...state,
        notepad: action.payload,
      };
    case "SET_NOTEPADTEXT":
      return {
        ...state,
        notepadText: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
