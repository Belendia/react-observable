import {
  LOGIN_ATTEMPTED,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
} from "./auth.actions";

const initialState = {
  username: undefined,
  isLoggedIn: false,
  token: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
      };
    case LOGIN_ATTEMPTED:
      return {
        ...state,
        username: action.payload.username,
      };
    case LOGIN_FAILED:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
