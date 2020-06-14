import React, {useContext} from "react";
import { AppContext } from "../app/App";
import { useHistory } from "react-router-dom";

const CenterListItem = (props) => {
  const {
    id,
    name,
    address,
    pollingHours,
    typeOfVote,
    queuePopulation
  } = props;

  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const handleClick = (props) => {    
    dispatch({
      type: "changeSelectedCenter",
      payload: props
    });
    history.push(`/voting-centers/${id}`);
  }

  return (
    <article className="card padding-reset border-bg-vote col-md-5 mb-3 ml-1 mr-1">
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
        <button className="btn btn-primary" onClick={() => handleClick(props)}>
          Queue: {queuePopulation} People
        </button>
      </div>
      <div className="card-footer text-muted">
        <h6>Polling Hours:</h6>
        <p>{pollingHours.start}</p>
        <p>{pollingHours.finish}</p>
      </div>
    </article>
  );
};

export default CenterListItem;
