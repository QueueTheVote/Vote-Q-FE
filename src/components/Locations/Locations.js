import React, { Component, useState, useEffect } from "react";
import CivicDataService from "../../api/CivicDataService";
import Location from "./Location";

function Locations() {
  const [address, setAddress] = useState([]);
  const [pollingLocations, setPolingLocation] = useState([]);
  const [election, setElection] = useState({});

  useEffect(() => {
    retrieveLocations();
  }, []);

  const retrieveLocations = () => {
    CivicDataService.getAll()
      .then((response) => {
        setElection(response.election);
        setPolingLocation(response.pollingLocations);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const renderLocations = () => {
    return pollingLocations.map((location)=>
      <Location location={location} key={location.address.locationName}/>
    )
  };

  return (
    <div>
      {renderLocations()}
    </div>
  );
}

export default Locations;
