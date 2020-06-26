const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("dentro do middleware!!!");
  next(); //Permite que a requisição va para outra linha
});

app.use((req, res, next) => {
  console.log("Outro do middleware!!!");
  next();
});

app.listen(3000);
