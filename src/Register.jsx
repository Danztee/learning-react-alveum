import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <div>
        <p>Name</p>
        <input type="text" name="username" id="username" label="name" />
      </div>

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

export default Register;
