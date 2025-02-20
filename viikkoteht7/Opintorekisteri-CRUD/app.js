var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const db = require("./database");
const bcrypt = require("bcryptjs");
const basicAuth = require("express-basic-auth");

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

const opintojaksoRouter = require("./routes/opintojakso");
const opiskelijaRouter = require("./routes/opiskelija");
const arviointiRouter = require("./routes/arviointi");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.use("/opintojakso", opintojaksoRouter); // available to anyone

app.use(basicAuth({ authorizer: myAuthorizer, authorizeAsync: true }));

app.use("/opiskelija", opiskelijaRouter); // available only for authenticated users
app.use("/arviointi", arviointiRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);

function myAuthorizer(username, password, cb) {
  db.query(
    "SELECT password FROM user WHERE username = ?",
    [username],
    function (dbError, dbResults, fields) {
      if (dbError) {
        response.json(dbError);
      } else {
        if (dbResults.length > 0) {
          bcrypt.compare(password, dbResults[0].password, function (err, res) {
            if (res) {
              console.log("success");
              return cb(null, true);
            } else {
              console.log("wrong password");
              return cb(null, false);
            }
            response.end();
          });
        } else {
          console.log("user does not exists");
          return cb(null, false);
        }
      }
    }
  );
}

module.exports = app;
