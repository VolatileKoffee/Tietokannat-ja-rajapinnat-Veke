var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* deleted according to peatutor.com app.js tutorial
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
*/

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* deleted according to peatutor.com app.js tutorial
app.use("/", indexRouter);
app.use("/users", usersRouter);
*/

module.exports = app;

const bookRouter = require("./routes/book"); // for the new book.js-route in routes-folder
app.use("/book", bookRouter);
