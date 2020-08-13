import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Main(props) {
  const { setCurrentUser } = props;
  return (
    <main>
      <Route path='/login' render={(props) =>
        (<Login {...props}
          setCurrentUser={setCurrentUser}
        />
        )} />
       <Route path='/register' render={(props) =>
        (<Register {...props}
          setCurrentUser={setCurrentUser}
        />
        )} />
    </main>
  );
}
