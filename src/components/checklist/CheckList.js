import React from 'react';
import checkListData from './CheckListData';
import '../../styles/CheckList.scss'

const CheckList = () => {

  const generateCheckboxes = (data) => {
    return data.map((val, idx) => {
      return (
      <div key={idx}>
        <input id={val} type="checkbox" value={val} />
        <label key={idx + "-label"} htmlFor="checkListItem">{val}</label>
      </div>
      )
    })
  }

  return ( 
    <div>
      <fieldset className="row">
        <legend>
        <h4>Your Voting Checklist</h4>
        </legend>
        <div className="checkboxes col-12 d-flex justify-content-center">
          <div>
            {generateCheckboxes(checkListData)}
          </div>
        </div>
      </fieldset>
      <p><small>Click below to see a list of acceptable ID in Colorado.</small></p>
      <a href="https://ballotpedia.org/Voting_in_Colorado" target="/blank" className="btn btn-primary">Click Here</a>
    </div>
  );
}

export default CheckList;