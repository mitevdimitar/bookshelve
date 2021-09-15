const axios = require('axios');

export const createInitialDB = async (id, token) => {
    await axios.put(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}.json?auth=${token}`, {
        settings: {
          lang: 'en'
        }
      })
      .then(function (response) {
        console.log(response.statusText);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const getSettings = async (id, token) => {
    return await axios.get(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}.json?auth=${token}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateSettings = async (id, data, token) => {
  await axios.patch(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/settings.json?auth=${token}`, {
      ...data
    })
    .then(function (response) {
      console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
}
