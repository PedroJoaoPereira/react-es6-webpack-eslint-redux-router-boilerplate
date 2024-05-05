import { SET_MESSAGE, ERROR } from "Redux/Actions/global/types";

const initialState = {
  message: "",
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
