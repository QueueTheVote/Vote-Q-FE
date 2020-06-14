import "../../styles/App.scss";
import CenterContainer from "../votingcenter/CenterContainer";
import { Route, Redirect } from "react-router-dom";
import React, { createContext, useReducer } from "react";
import "../../styles/App.scss";
import Home from "../home/Home";
import NavigationBar from "../navbar/NavigationBar";

const initialState = {
  address: null,
  votingCenters: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "submitAddress":
      return { ...state, address: action.payload };
    case "updateCenterLocations":
      return { ...state, votingCenters: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/voting-centers">
          {state.address ? <CenterContainer /> : <Redirect to="/" />}
        </Route>
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = createContext();
export default App;
