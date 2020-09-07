const express = require("express");
const app = express();

const siteRoute = require("./routes/site.route");

app.use(express.static(__dirname));

app.use("/", siteRoute);
app.use(redirectUnmatchedURL);
function redirectUnmatchedURL(req, res) {
  res.redirect("http://localhost:3000");
}

module.exports = app;
