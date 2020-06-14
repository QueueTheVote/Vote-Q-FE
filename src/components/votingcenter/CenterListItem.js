import React, { useContext } from "react";
import { AppContext } from "../app/App";
import { useHistory } from "react-router-dom";

//Move to Add a Queue Location
import { postToQueue } from "../../api/CivicDataService";

const CenterListItem = (props) => {
  const {
    id,
    name,
    address,
    pollingHours,
    typeOfVote,
    queuePopulation,
    queue,
  } = props;

  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);

  // const queueUpdateAction = (queue) => {
  //   console.log(queue);
  //   let updatedQueue = state.votingCenters.map((votingCenter) => {
  //     if (votingCenter.id === queue.id) {
  //       votingCenter.currentQueue = queue;
  //       return votingCenter;
  //     }
  //     return votingCenter;
  //   });
  //   return updatedQueue;
  // };

  const handleClick = (props) => {
    // postToQueue(props.id).then((queue) => {
    //   let data = queueUpdateAction(queue);
    //   dispatch({
    //     type: "updateQueuePop",
    //     payload: data,
    //   });
    // });
    dispatch({
      type: "changeSelectedCenter",
      payload: props,
    });

    history.push(`/voting-centers/${id}`);
  };

  return (
    <article className="voting-centers col-md-5 mb-3 ml-1 mr-1">
      <div className="card padding-reset border-bg-vote">
        <div className="card-header bg-vote text-left text-white">
          {typeOfVote.toUpperCase()}
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {`${address.street1}`}
            <br />
            {`${address.city}, ${address.state}, ${address.zip}`}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => handleClick(props)}
          >
            Queue: {queuePopulation} People
          </button>
        </div>
        <div className="card-footer text-muted">
          <h6>Polling Hours:</h6>
          <p>{pollingHours.start}</p>
          <p>{pollingHours.finish}</p>
        </div>
      </div>
    </article>
  );
};

export default CenterListItem;
