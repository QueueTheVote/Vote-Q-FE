import React, {useState, useContext} from 'react';
import {AppContext} from '../app/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function HomeForm() {
  const dispatch = useContext(AppContext)[1];
  const [address, changeAddress] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!address) return;
    dispatch({
      type: "submitAddress",
      payload: address
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-12 d-flex justify-content-center">
          <input className="form-control form-control-md mr-1" type="text" placeholder="Enter address or zip code"
            aria-label="Search" onChange={(e) => changeAddress(e.target.value)}/>
          <i role="button" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></i>
        </div>
      </div>
    </form>
  )
};

export default HomeForm;