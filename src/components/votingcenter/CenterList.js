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

  return (
    <section>
      <header>
        <h2>Voting Locations Nearby:</h2>
      </header>
      <div className="row justify-content-center">{renderCenterList()}</div>;
    </section>
  );
}

export default CenterList;
