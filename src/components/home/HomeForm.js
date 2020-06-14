import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../app/App";

function HomeForm() {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const [address, changeAddress] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address) return;

    dispatch({
      type: "submitAddress",
      payload: address,
    });

    history.push('/voting-centers');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-12 d-flex justify-content-center">
          <input
            className="form-control form-control-md mr-1"
            type="text"
            placeholder="Enter address or zip code"
            aria-label="Search"
            onChange={(e) => changeAddress(e.target.value)}
          />
          <i role="button" onClick={handleSubmit}>
            <img className="search-icon ml-1" alt="search-icon" src="/assets/images/search.png"/>
          </i>
        </div>
      </div>
    </form>
  );
}

export default HomeForm;
