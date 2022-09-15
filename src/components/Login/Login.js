import { LogoLight } from "../../images";
import React, { useState } from "react";
import Cookies from "js-cookie";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJwtToken,
  errorMsg,
} from "../../features/YoutubeSlice/LoginSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const jwtToken = Cookies.get("jwt_token");

  const error = useSelector(errorMsg);
  // const isloading = useSelector(isLoading);
  const dispatch = useDispatch();

  const onClickLogin = (e) => {
    e.preventDefault();
    const credentials = { username, password };
    dispatch(fetchJwtToken(credentials));
  };

  return (
    <div>
      {jwtToken !== undefined ? (
        <Navigate to="/" replace={true} />
      ) : (
        <div className="login-wrapper">
          <div className="login-inner-wrapper">
            <img src={LogoLight} alt="logo" />
            <form onSubmit={onClickLogin}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Log in</button>
              {error !== "" && <p>{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
