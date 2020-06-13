import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../app/App";
import CenterList from "./CenterList";
import CivicDataService from "../../api/CivicDataService";

function CenterContainer() {
  const { state, dispatch } = useContext(AppContext);

  // this useEffect is just to check the value, you can totally remove it
  useEffect(() => {
    console.log(state.address);
    CivicDataService.getAll().then((response) => {
      dispatch({
        type: "updateCenterLocations",
        payload: response.pollingLocations,
      });
    });
  }, [state.address]);

  return (
    <div>
      <CenterList />
    </div>
  );
}

export default CenterContainer;
