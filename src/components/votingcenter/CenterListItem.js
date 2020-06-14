import React from "react";

const CenterListItem = ({
  address,
  pollingHours,
  name,
  typeOfVote,
  queuePopulation,
}) => {
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
        <a href="#" className="btn btn-primary">
          Queue: {queuePopulation} People
        </a>
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
