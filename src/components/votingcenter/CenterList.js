import React, { Component, useState, useEffect } from "react";
import CivicDataService from "../../api/CivicDataService";
import CenterListItem from "./CenterListItem";

function CenterList() {
  const [address, setAddress] = useState([]);
  const [pollingCenterList, setPolingCenterList] = useState([]);
  const [election, setElection] = useState({});

  useEffect(() => {
    retrieveCenterList();
  }, []);

  const retrieveCenterList = () => {
    CivicDataService.getAll()
      .then((response) => {
        setElection(response.election);
        setPolingCenterList(response.pollingLocations);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const renderCenterList = () => {
    return pollingCenterList.map((location) => (
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
