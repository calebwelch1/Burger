const express = require("express");

const PORT = process.env.PORT || 8080;
const expbhs = require("express-handlebars");
const app = express();
const path = require("path");

// most of this is boilerplate
app.use(express.static(path.join(__dirname, "public")));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views", "index.handlebars"));

// Import routes and give the server access to them.
const router = require("./controllers/burger_controller.js");

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
