import React, {useContext} from "react";
import QueueContainer from "../queue/QueueContainer";
import { AppContext } from "../app/App";

function CenterDetail() {
  const {state} = useContext(AppContext);
  const {name, queuePopulation, address, pollingHours,queue} = state.selectedCenter;
  
  const {street1, city, centerState, zip} = address;
  
  const queueUpdateAction = (queue) => {
    console.log(queue);
    let updatedQueue = state.votingCenters.map((votingCenter) => {
      if (votingCenter.id === queue.id) {
        votingCenter.currentQueue = queue;
        return votingCenter;
      }
      return votingCenter;
    });
    return updatedQueue;
  };

  return (
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-10 center-detail">
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
              <img src="../assets/images/people.svg"/>
            </div>
            <div className="col-6 p-0">
              <h6>Queue Length</h6>
              <h2>{queue.size} People</h2>
            </div>
          </div>
          <QueueContainer/>
        </div>
      </div>
    </div>
  )
}

export default CenterDetail;
