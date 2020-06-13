import React from "react";
import "../../styles/App.scss";
import CenterContainer from "../votingcenter/CenterContainer";
import { Route } from "react-router-dom";

function App() {
  return <div className="App">
    <Route path='/'>
      <CenterContainer/>
    </Route>
  </div>;
}

export default App;
