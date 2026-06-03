const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./config/config");
const routes = require("./routes/bookApi");

app.use(express.json());
app.use(routes);

dotenv.config();
const PORT = process.env.PORT || 5000;

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

// env
// PORT=5000
// MONGOURL="mongodb://localhost:27017/sampldb"
