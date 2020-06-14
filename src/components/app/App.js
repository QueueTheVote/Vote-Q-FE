import CenterContainer from "../votingcenter/CenterContainer";
import CenterDetail from "../votingcenter/CenterDetail";
import { Link, Route, Redirect } from "react-router-dom";
import React, { createContext, useReducer } from "react";
import "../../styles/App.scss";
import Home from "../home/Home";

const initialState = {
  address: null,
  votingCenters: [],
  selectedCenter: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "submitAddress":
      return { ...state, address: action.payload };
    case "updateCenterLocations":
      return { ...state, votingCenters: action.payload };
    case "changeSelectedCenter":      
      return { ...state, selectedCenter: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <div className="img-top-right">
        <Link to="/"><img src="../assets/images/logo-purple.svg"/></Link>
      </div>
      <AppContext.Provider value={{ state, dispatch }}>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/voting-centers">
          <CenterContainer />
        </Route>
        <Route path="/voting-centers/:id">
          {state.selectedCenter ? <CenterDetail/> : <Redirect to="/" />}
        </Route>
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = createContext();
export default App;
