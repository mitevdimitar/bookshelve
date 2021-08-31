const axios = require('axios');

export const addBook = async (id, book) => {
    await axios.post(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books.json`, {
        ...book
      })
      .then(function (response) {
        console.log(response.statusText);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const getBooks = async (id) => {
  return await axios.get(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books.json?print=pretty`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}