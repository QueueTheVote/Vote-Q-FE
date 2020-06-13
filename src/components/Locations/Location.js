import React, { Component } from "react";
import  CivicDataService from "../../api/CivicDataService";

const Locations= ({location}) => {
  console.log(location)

  return(
  <article>
    <h2>{location.address.locationName}</h2>
  </article>


  ) 
}

export default Locations;
