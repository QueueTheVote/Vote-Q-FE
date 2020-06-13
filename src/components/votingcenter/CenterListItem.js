import React, { Component } from "react";

const CenterListItem = ({
  address,
  pollingHours,
  startDate,
  endDate,
  typeOfVote,
}) => {
  return (
    <article className="card text-center col-md-8 col-offset-4 ">
      <div className="card-header">{typeOfVote.toUpperCase()}</div>
      <div className="card-body">
        <h5 className="card-title">{address.locationName}</h5>
        <p className="card-text">
          {`${address.line1}`}<br/>
          {`${address.city}, ${address.state}, ${address.zip}`}
        </p>
        <a href="#" className="btn btn-primary">
          More Information
        </a>
      </div>
      <div className="card-footer text-muted">
        {pollingHours}
      </div>
    </article>
  );
};

export default CenterListItem;
