import React from "react";

const CenterListItem = ({
  address,
  pollingHours,
  startDate,
  endDate,
  typeOfVote,
}) => {
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
        <a href="#" className="btn btn-primary">
          Queue: XX MINUTES
        </a>
      </div>
      <div className="card-footer text-muted">
        <p>Polling Hours:</p>
        {pollingHours}
      </div>
    </article>
  );
};

export default CenterListItem;
