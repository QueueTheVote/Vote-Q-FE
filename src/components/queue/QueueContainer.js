import React from "react";
import QueueForm from "./QueueForm"
import CheckList from "../checklist/CheckList";

function QueueContainer() {
  
  return (
    <>
      <div className="card-body">
        <CheckList/>
      </div>
      <div className="card-footer">
        <QueueForm/>
      </div>
    </>
  )
}

export default QueueContainer;
