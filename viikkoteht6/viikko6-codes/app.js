var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;

//GET-method task 1
/*app.get("/example", function (request, response) {
  response.send("I am GET example in localhost!");
  console.log("I am GET example in console!");
});*/

//GET-method with one parameter task 2
/*app.get("/example/:color", function (request, response) {
  response.send("Localhost likes color: " + request.params.color);
});*/

//Middleware function with 2-parameter GET-method
app.use("/example/:color/:fruit", function (request, response, next) {
  console.log("The secret favourite snack middleware is called!");
  next();
});

//GET-method with two parameters task 3
app.get("/example/:color/:fruit", function (request, response) {
  response.send(
    "Localhost's favourite snack is: " +
      request.params.color +
      " " +
      request.params.fruit
  );
});

//POST-method task 4
/*app.post("/", function (request, response) {
  response.send(request.body);
  console.log(request.body);
});*/
