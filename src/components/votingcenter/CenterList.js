import React, { useContext } from "react";
import CenterListItem from "./CenterListItem";
import { AppContext } from "../app/App";

function CenterList() {
  const { state } = useContext(AppContext);

  const renderCenterList = () => {
    return state.votingCenters.map((location, index) => (
      <CenterListItem
        id={index}
        address={location.address}
        pollingHours={location.pollingHours}
        queuePopulation = {location.currentQueue.capacity}
        typeOfVote="Election Day"
        name = {location.name}
        key={location.name}
      />
    ));
  };

  return <div className="row justify-content-center">{renderCenterList()}</div>;
}

export default CenterList;
