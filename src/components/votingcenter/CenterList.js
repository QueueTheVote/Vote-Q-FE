import React, { useContext, useState, useEffect } from "react";
import CenterListItem from "./CenterListItem";
import { AppContext } from "../app/App";

function CenterList({ address }) {
  const { state } = useContext(AppContext);

  const renderCenterList = () => {
    return state.votingCenters.map((location) => (
      <CenterListItem
        address={location.address}
        pollingHours={location.pollingHours}
        startDate={location.startDate}
        endDate={location.endDate}
        typeOfVote="Election Day"
        key={location.address.locationName}
      />
    ));
  };

  return <div className="row justify-content-center">{renderCenterList()}</div>;
}

export default CenterList;
