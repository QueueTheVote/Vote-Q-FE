import CenterContainer from "../votingcenter/CenterContainer";
import { Route } from "react-router-dom";
import React, { createContext, useReducer } from "react";
import "../../styles/App.scss";
import Home from "../home/Home";

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
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/voting-centers">
          <CenterContainer />
        </Route>
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = createContext();
export default App;
