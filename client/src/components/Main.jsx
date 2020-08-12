import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";

export default function Main() {
  return (
    <main>
      <Route path="/login" render={(props) => <Login {...props} />} />
    </main>
  );
}
