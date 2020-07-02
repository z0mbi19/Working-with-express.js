const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.engine("hbs", expressHbs());
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404" });
});

app.listen(3000);
