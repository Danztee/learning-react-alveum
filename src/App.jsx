import "./App.css";
import Login from "./Login";
import Register from "./Register";
import React from "react";

function App() {
  const state = false;

  return <>{state ? <Login /> : <Register />}</>;
}

export default App;
