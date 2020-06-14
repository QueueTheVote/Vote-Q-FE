const USER_ID = 1;

export const getAll = async () => {
  let url = 'https://secret-island-31781.herokuapp.com/centers?electionId=4977&street1=101%20Baker%20St&city=Colorado%20Springs&state=CO'
  const response =  await fetch(url);
  const json = await response.json();
  return json;
};

export const postToQueue = async (queueId) => {
  const BASE_QUEUE_URL  = 'https://secret-island-31781.herokuapp.com/center/queue/';
  let url = BASE_QUEUE_URL + queueId + `/join?userVoterId=${USER_ID}&voterIds=${USER_ID}`
  const response =  await fetch(url,{
    method:'POST'
  });
  const json = await response.json();
  return json;
};

export default {
  getAll,
  postToQueue,
};
