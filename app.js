const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let items = [];
app.get("/", function (req, res) {
  let today = new Date();

  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", option);

  res.render("list", {
    kindOfDay: day,
    newListItems: items.length > 0 ? items : ["No items"],
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on part 3000");
});
