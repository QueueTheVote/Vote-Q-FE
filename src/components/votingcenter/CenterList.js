import React, { useContext } from "react";
import CenterListItem from "./CenterListItem";
import { AppContext } from "../app/App";

function CenterList() {
  const { state } = useContext(AppContext);

  const renderCenterList = () => {
    return state.votingCenters.map((location, index) => (
      <CenterListItem
        id={index}
        name={location.address.locationName}
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
