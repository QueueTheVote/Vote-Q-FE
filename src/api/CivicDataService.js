const LOCATIONS_URL = "https://www.googleapis.com/civicinfo/v2/voterinfo?";
const ELECTION_URL = "https://www.googleapis.com/civicinfo/v2/elections";
const KEY = "AIzaSyAuXmWWeWjIqdiPBPCpovTOPu-g5wVopog";
const address = {
  street: "8613 W Colorado",
  city: "Lakewood",
  state: "Colorado",
  zip: "80232",
};

// Sample URL address=8613%20W%20colorado%20lakewood%20colorado&key=AIzaSyAuXmWWeWjIqdiPBPCpovTOPu-g5wVopog
export const getAll = async() => {
  const url =
    LOCATIONS_URL +
    "address=" +
    address.street +
    address.city +
    address.state +
    "&key=" +
    KEY;
  const response = await fetch(url).then(data => data.json())
  return response;
};


export default {
  getAll,
};
