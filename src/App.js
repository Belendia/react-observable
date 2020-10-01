import React, { useState, useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { attemptLogin } from "./auth/auth.actions";

function App() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    console.log(formState);
    setFormState(() => ({
      ...formState,
      [name]: value,
    }));
  };

  //redux
  const { token } = useSelector((state) => ({
    token: state.authReducer.token,
  }));

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch(
      attemptLogin({
        username: formState.username,
        password: formState.password,
      })
    );
  };

  return (
    <div className="App">
      <form onSubmit={login} method="post">
        <input
          type="text"
          name="username"
          value={formState.username || ""}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formState.password || ""}
          onChange={handleChange}
        />
        <input type="submit" value={"Log In"} />
      </form>
    </div>
  );
}

export default App;
