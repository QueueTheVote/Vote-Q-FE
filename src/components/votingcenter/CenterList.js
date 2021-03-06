import React, { useContext } from "react";
import CenterListItem from "./CenterListItem";
import { AppContext } from "../app/App";

function CenterList() {
  const { state } = useContext(AppContext);

  const renderCenterList = () => {
    return state.votingCenters.map((location) => (
      <CenterListItem
        id={location.id}
        address={location.address}
        pollingHours={location.pollingHours}
        queuePopulation={location.currentQueue.size}
        queue = {location.currentQueue}
        typeOfVote="Election Day"
        name={location.name}
        key={location.name}
      />
    ));
  };

  return <div className="row justify-content-center">{renderCenterList()}</div>;
}

export default CenterList;
