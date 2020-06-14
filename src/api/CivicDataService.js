export const getAll = async () => {
  let url = 'https://secret-island-31781.herokuapp.com/centers?electionId=4977&street1=101%20Baker%20St&city=Colorado%20Springs&state=CO'
  const response =  await fetch(url);
  const json = await response.json();
  return json;
};

export default {
  getAll,
};
