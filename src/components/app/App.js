import CenterContainer from "../votingcenter/CenterContainer";
import CenterDetail from "../votingcenter/CenterDetail";
import { Route, Redirect } from "react-router-dom";
import React, { createContext, useReducer } from "react";
import "../../styles/App.scss";
import Home from "../home/Home";
import NavigationBar from "../navbar/NavigationBar";
import QueueConfirmation from '../queue/QueueConfirmation';

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
      <AppContext.Provider value={{ state, dispatch }}>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/voting-centers">
          {state.address ? <CenterContainer /> : <Redirect to="/" />}
        </Route>
        <Route path="/voting-centers/:id">
          {state.selectedCenter ? <CenterDetail/> : <Redirect to="/" />}
        </Route>
        <Route path="/confirmation">
          {true  ? <QueueConfirmation votingCenter={'Union Station'}
          distance={'20'} address={'1701 Wynkoop St, Denver, CO 80211'}
          queueNum={'15'} eta={'25'} confirmationID={'GF14L7'}
          /> : <Redirect to="/" />}
        </Route>
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = createContext();
export default App;
