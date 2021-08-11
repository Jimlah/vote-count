const express = require("express");
// const db = require("./app/model");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.json({ message: "Hello World!" });
});

require("./app/routes/api.routes")(app);

const db = require("./app/model");

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: " + err);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Listening on http://localhost:%d", PORT);
});
