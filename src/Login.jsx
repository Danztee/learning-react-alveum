import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <div>
        <p>Username</p>
        <input type="text" name="username" id="username" label="Username" />
      </div>

      <div>
        <p>password</p>
        <input type="text" name="username" id="username" label="password" />
      </div>

      <button className="btn">Login</button>
    </div>
  );
};

export default Login;
