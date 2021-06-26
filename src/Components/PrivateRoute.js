import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../App";
import Login from "./Login/Login";

function PrivateRoute({ children }) {
  const [loggedInUser, setLoggedInUser] = useContent(UserContext);
  return (
    <Route path="/login">
      {loggedInUser ? <Redirect to="/admin" /> : <Login />}
    </Route>
  );
}

export default PrivateRoute;
