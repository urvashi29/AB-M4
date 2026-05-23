const express = require("express");
const dotEnv = require("dotenv"); //to access env variables
const app = express();

dotEnv.config();
console.log(process.env.PaymentAPI);

app.listen(process.env.port, () => {
  console.log(`Listening at port number ${process.env.port}  `);
});

