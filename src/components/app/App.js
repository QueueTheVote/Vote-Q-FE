import React, {createContext, useReducer} from 'react';
import '../../styles/App.scss';
import  Home from '../home/Home';
import CenterContainer from '../votingcenter/CenterContainer'

const initialState = {
  address: null
}

const reducer = (state, action) => {
  switch(action.type){
    case "submitAddress":
      return {...state,  address: action.payload}
    default:
      return state;
  }
}
        
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <AppContext.Provider value={[state, dispatch]}>
        <Home/>
        <CenterContainer/>
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = createContext()
export default App;
