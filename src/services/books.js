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

export const editBook = async (id, book, token, bookId) => {
  await axios.put(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books/${bookId}.json?auth=${token}`, {
      ...book
    })
    .then(function (response) {
      console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteBook = async (id, token, bookId) => {
  await axios.delete(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/books/${bookId}.json?auth=${token}`)
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

export const getAuthors = async (id, token) => {
  return await axios.get(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/authors.json?auth=${token}`)
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

export const addAuthor = async (id, author, token) => {
  await axios.post(`https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/${id}/authors.json?auth=${token}`, {
      ...author
    })
    .then(function (response) {
      console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
}