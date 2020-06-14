import React, { useEffect, useContext } from "react";
import { AppContext } from "../app/App";
import CenterList from "./CenterList";
import CivicDataService from "../../api/CivicDataService";

function CenterContainer() {
  const { state, dispatch } = useContext(AppContext);

  // this useEffect is just to check the value, you can totally remove it
  useEffect(() => {
    if(state.votingCenters.length==0){
      CivicDataService.getAll().then((response) => {
        dispatch({
          type: "updateCenterLocations",
          payload: response,
        });
      });
    }
    }, [state.address,dispatch]);

  return (
    <div className="row d-flex justify-content-center mt-2">
      <div className="col-10">
      <header className="my-4">
        <h3>Your Voting Centers</h3>
      </header>
        <CenterList />
      </div>
    </div>
  );
}

export default CenterContainer;
