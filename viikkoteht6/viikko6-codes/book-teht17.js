const book = {
  bookArray: [
    {
      id_book: "1",
      name: "Tekniikan kaavasto",
      author: "Mikko Mäkelä ym",
      isbn: "205711499",
    },
    {
      id_book: "2",
      name: "MAOL-taulukot",
      author: "Raimo Seppänen ym",
      isbn: "333444555",
    },
    {
      id_book: "3",
      name: "Insinöörin matematiikka",
      author: "Ari Tuomenlehto ym",
      isbn: "492832456",
    },
    {
      id_book: "4",
      name: "Performance analysis",
      author: "Denis Bakhvalov",
      isbn: "979886958",
    },
  ],
  getAllBooks: function () {
    console.log(this.bookArray);
  },
  getOneBook: function (x) {
    console.log(this.bookArray[x]);
  },
  addBook: function (addId_book, addName, addAuthor, addIsbn) {
    this.bookArray.push({
      id_book: addId_book,
      name: addName,
      author: addAuthor,
      isbn: addIsbn,
    });
  },
};
console.log("Printing whole bookArray:");
book.getAllBooks();

console.log("Printing third book:");
book.getOneBook("3");

console.log("Adding new book to bookArray:");
book.addBook("5", "Just Do It", "NIKE", "101202303");

book.getAllBooks(); //printing bookArray again
