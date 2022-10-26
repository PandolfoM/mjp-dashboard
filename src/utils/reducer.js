const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTEPAD":
      return {
        ...state,
        notepad: action.payload,
      };
    case "SET_CONFIG":
      return {
        ...state,
        config: action.payload,
      };
    case "SET_NOTEPADTEXT":
      return {
        ...state,
        notepadText: action.payload,
      };
    case "TOGGLE_SAVE":
      return {
        ...state,
        save: action.payload,
      };
    case "TOGGLE_CONFIGSAVE":
      return {
        ...state,
        configSave: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
