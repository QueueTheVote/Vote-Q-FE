import React from 'react';
import checkListData from './CheckListData';

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
    <div>
      <h2>Your Voting Checklist:</h2>
      {generateCheckboxes(checkListData)}
    </div>
  );
}

export default CheckList;