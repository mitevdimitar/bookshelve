const axios = require('axios');

export const addBook = async (id, book, token) => {
    await axios.post(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books.json?auth=${token}`, {
        ...book
      })
      .then(function (response) {
        console.log(response.statusText);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const editBook = async (id, book, token) => {
  await axios.put(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books.json?auth=${token}`, {
      ...book
    })
    .then(function (response) {
      console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getBooks = async (id, token) => {
  return await axios.get(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books.json?auth=${token}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getNationalities = async () => {
  return await axios.get("https://restcountries.eu/rest/v2/all")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {

      console.log(error);
    });
}