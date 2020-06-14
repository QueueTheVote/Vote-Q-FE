import React, {useContext} from "react";
import QueueContainer from "../queue/QueueContainer";
import { AppContext } from "../app/App";

function CenterDetail() {
  const {state} = useContext(AppContext);
  const {name, queuePopulation, address, pollingHours} = state.selectedCenter;
  const {street1, city, centerState, zip} = address;

  return (
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-11 center-detail">
        <div className="header p-4">
          <h1>{name}</h1>
          <h6>{street1} {city}, {centerState} {zip}</h6>
          <hr/>
          <h6>Start: {pollingHours.start}</h6>
          <h6>Finish: {pollingHours.finish}</h6>
        </div>
        <div className="card p-0">
          <div className="card-header row d-flex m-0 py-4 px-0">
            <div className="col-6 text-right pl-0">
              <img alt="person walking" src="../assets/images/people.svg"/>
            </div>
            <div className="col-6 p-0">
              <h6>Queue Length</h6>
              <h2>{queuePopulation} People</h2>
            </div>
          </div>
          <QueueContainer/>
        </div>
      </div>
    </div>
  )
}

export default CenterDetail;
