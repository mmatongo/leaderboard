const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const apiEndPoint = 'DanielsNewApi';

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

const pullData = async () => {
  const getResponse = await fetch(`${apiLink}${apiEndPoint}/scores/`);
  const userData = await getResponse.json();

  return userData;
};

exports.pullData = pullData;
exports.newGame = newGame;
exports.initUsers = initUsers;