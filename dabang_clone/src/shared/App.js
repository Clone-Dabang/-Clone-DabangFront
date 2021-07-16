import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import Detail from "../pages/Detail";

function App() {
  const dispatch = useDispatch();

  return (
    <ConnectedRouter history={history}>
      <Route path="/posts/:id" exact component={Detail} />
      
    </ConnectedRouter>
  );
}

export default App;