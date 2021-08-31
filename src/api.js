const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const apiEndPoint = 'Zl4d7IVkemOTTVg2fUdz';

const newGame = async (name) => {
  const getResponse = await fetch(apiLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(`{name: ${name}`),
  });
  const resolve = await getResponse.json();
  return resolve;
};

const initUsers = async (data) => {
  const getResponse = await fetch(`${apiLink}${apiEndPoint}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resolve = await getResponse.json();
  return resolve;
};