const bookArray = [
  // 1
  {
    id_book: "1",
    name: "C++",
    author: "Bjarne Stroupstrup",
    isbn: "978-951-98548-9-2",
  },
  {
    id_book: "2",
    name: "Javascript",
    author: "Brendan Eich",
    isbn: "827-103-20394-3-9",
  },
  {
    id_book: "3",
    name: "Ruby On Rails",
    author: "David Heinemeier Hansson",
    isbn: "849-456-34562-4-1",
  },
  {
    id_book: "4",
    name: "React",
    author: "Facebook",
    isbn: "978-123-45678-9-7",
  },
  {
    id_book: "5",
    name: "Vim",
    author: "Bram Moolenaar",
    isbn: "394-304-10294-4-9",
  },
  {
    id_book: "6",
    name: "Notepad++",
    author: "Don Ho",
    isbn: "049-192-30293-9-9",
  },
];
console.log("This is bookArray's data type: ", typeof bookArray); // 2

console.log("Printing whole bookArray: ", bookArray); // 3

console.log("Printing first row from the bookArray: ", bookArray[0]); // 4

console.log("Printing the name of the first array's book: ", bookArray[0].name); // 5

console.log("Printing the number of rows in the array: ", bookArray.length); // 6

console.log("Printing the book names in the array: "); // 7
bookArray.forEach(function (bookArray) {
  console.log(bookArray.name);
});
