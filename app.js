const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();

const siteRoute = require("./routes/site.route");

app.use("/styles", express.static(path.join(__dirname, "styles")));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(favicon(__dirname + "/styles/image/fav.ico"));

app.use("/", siteRoute);
app.use(redirectUnmatchedURL);
function redirectUnmatchedURL(req, res) {
  res.redirect("http://localhost:3000");
}

module.exports = app;
