import React, {useContext} from "react";
import { AppContext } from "../app/App";
import { useHistory } from "react-router-dom";

const CenterListItem = (props) => {
  const {
    id,
    address,
    pollingHours,
    startDate,
    endDate,
    typeOfVote,
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
        <h5 className="card-title">
          {address.locationName}
        </h5>
        <p className="card-text">
          {`${address.line1}`}
          <br />
          {`${address.city}, ${address.state}, ${address.zip}`}
        </p>
        <button className="btn btn-primary" onClick={() => handleClick(props)}>
          Queue: XX MINUTES
        </button>
      </div>
      <div className="card-footer text-muted">
        <p>Polling Hours:</p>
        {pollingHours}
      </div>
    </article>
  );
};

export default CenterListItem;
