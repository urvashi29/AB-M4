const express = require("express");
const app = express();
const dotenv = require("dotenv");
const customerRoutes = require("./routes/customer-route.js");

dotenv.config();

app.use("/customer", customerRoutes);
// app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
