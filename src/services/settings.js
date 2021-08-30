const axios = require('axios');

export const createInitialDB = async (id) => {
    await axios.put(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`, {
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

export const getSettings = async (id) => {
    return await axios.get(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}.json?print=pretty`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateSettings = async (id, data) => {
  await axios.patch(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/settings.json`, {
      ...data
    })
    .then(function (response) {
      console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
}
