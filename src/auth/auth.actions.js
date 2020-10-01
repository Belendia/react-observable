export const LOGIN_ATTEMPTED = "[LOGIN PAGE] LOGIN_ATTEMPTED";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const attemptLogin = (payload) => {
  return {
    type: LOGIN_ATTEMPTED,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESSFUL,
    payload,
  };
};

export const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILED,
    payload,
  };
};
