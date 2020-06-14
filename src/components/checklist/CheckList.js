import React from 'react';
import checkListData from './CheckListData';
import './CheckList.scss'

const CheckList = () => {

  const generateCheckboxes = (data) => {
    return data.map((val, idx) => {
      return (
      <div>
        <input key={idx} id={val} type="checkbox" 
        value={val} />
        <label key={idx + "-label"}htmlFor="checkListItem">{val}</label>
      </div>
      )
    })
  }

  return ( 
    <div className="">
      <fieldset>
        <legend>
        <h2>Your Voting Checklist:</h2>
        </legend>
        <div className="checkboxes">
          {generateCheckboxes(checkListData)}
        </div>
      </fieldset>
      <a href="https://ballotpedia.org/Voting_in_Colorado"><strong>Acceptable Forms of ID in Colorado</strong></a>
    </div>
  );
}

export default CheckList;