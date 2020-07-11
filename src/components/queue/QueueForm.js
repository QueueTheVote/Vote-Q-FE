import React, { useContext } from "react";
import { AppContext } from "../app/App";
import { postToQueue } from "../../api/CivicDataService";
import { Link } from "react-router-dom";

export default function QueueForm() {
  const { state, dispatch } = useContext(AppContext);
  
  const queueUpdateAction = (queue) => {
    let updatedQueue = state.votingCenters.map((votingCenter) => {
      if (votingCenter.id === queue.id) {
        votingCenter.currentQueue = queue;
        return votingCenter;
      }
      return votingCenter;
    });
    return updatedQueue;
  };

  const handleClick = () => {
    let id = state.selectedCenter.id;
    postToQueue(id).then((queue) => {
      let data = queueUpdateAction(queue);
      dispatch({
        type: "updateQueuePop",
        payload: data,
      });
      dispatch({
        type: "updateSelectedCenter",
        payload: queue,
      });
    });
  };

  return (
    <div>
      <Link to={`/voting-centers/${state.selectedCenter.id}/confirmation`}>
        <button className="btn btn-primary" onClick={() => handleClick()}>
          Join Queue!
        </button>
      </Link>
    </div>
  );
}
