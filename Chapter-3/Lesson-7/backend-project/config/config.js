const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGOURL);
    const database = mongoose.connection;

    database.on("err", (err) => {
      console.log(err);
    });

    database.once("connected", () => {
      console.log("Database Connected to the server!");
    });
  } catch (err) {
    console.log("not connected", err);
  }
};

module.exports = dbConnection;
