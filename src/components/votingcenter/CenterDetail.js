import React, {useContext} from "react";
import QueueContainer from "../queue/QueueContainer";
import { AppContext } from "../app/App";

function CenterDetail() {
  const {state} = useContext(AppContext);

  return (
    <div>
      <h1>{state.selectedCenter.name}</h1>
      <QueueContainer/>
    </div>
  )
}

export default CenterDetail;
