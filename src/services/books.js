const axios = require('axios');

export const addBook = async (book) => {
    await axios.post('https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/books.json', {
        ...book
      })
      .then(function (response) {
        console.log(response.statusText);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const getBooks = async () => {
  return await axios.get('https://bookshelve-66fd8-default-rtdb.europe-west1.firebasedatabase.app/books.json?print=pretty')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}