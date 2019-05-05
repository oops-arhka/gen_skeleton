// Фреймворк веб-приложений.
const express = require("express");
const app = express();
const path = require("path");

// HTTP request logger middleware for node.js. Логгирование деталей запросов.
const morgan = require("morgan");

// Cookie
const cookieParser = require("cookie-parser");
const { cookiesCleaner } = require("./middleware/auth");

// Session
const session = require("express-session");

// Redis
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const client = redis.createClient();

// const methodOverride = require("method-override");

// Импорт маршрутов.
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Подключаем mongoose.
const mongoose = require("mongoose");

app.use(morgan("dev"));
// Обработка POST запросов. urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use(cookiesCleaner);

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    store: new RedisStore({
      client,
      host: "localhost",
      port: 6379
      // ttl :  260
    }),
    key: "user_sid",
    secret: "anything here",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

// Allows you to use PUT, DELETE with forms.
// app.use(
//   methodOverride(function(req, res) {
//     if (req.body && typeof req.body === "object" && "_method" in req.body) {
//       // look in urlencoded POST bodies and delete it
//       const method = req.body._method;
//       delete req.body._method;
//       return method;
//     }
//   })
// );

//Object locals for backend
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

mongoose.connect("mongodb://localhost:27017/game", { useNewUrlParser: true });

// Подключаем статику
app.use(express.static(path.join(__dirname, "public")));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Обработка ошибок.
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
