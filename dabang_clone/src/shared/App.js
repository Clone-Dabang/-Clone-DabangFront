import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <ConnectedRouter history={history}>
      아아아
    </ConnectedRouter>
  );
}

export default App;