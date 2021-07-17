import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Router } from "react-router-dom";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import Detail from "../pages/Detail";
import Register from "../pages/Register";
import Header from "../components/Header";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/posts/:id" exact component={Detail} />
        <Route path="/register" exact component={Register} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
