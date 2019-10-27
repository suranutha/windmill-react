import React from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";

const Main = () => {
  const authenticated = true;
  return authenticated ? <Home /> : <Signin />;
};

export default Main;
