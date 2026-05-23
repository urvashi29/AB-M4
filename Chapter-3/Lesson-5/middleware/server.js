const express = require("express");
const app = express();

// to access static resource
app.use(express.static("public", { maxAge: 600000 }));

// to access urlencoded data format
// app.use(express.urlencoded());

// define a middleware for a particular route
app.use("/employee", express.urlencoded());

app.post("/employee", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.post("/student", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

// custom middleware
// app.get("/", () => {}, () => {}, () => {})

app.get(
  "/",
  (req, res, next) => {
    req.firstGetMiddle = "first";
    next();
  },
  (req, res, next) => {
    req.secondMiddleware = "second";
    next();
  },
  (req, res) => {
    console.log(req.body);
    res.send("third middleware");
  },
);

// Error handling
// sync
app.get("/syncError", (req, res) => {
  try {
    throw new Error("error thrown by enpoint");
  } catch (err) {
    next(err);
  }
});

// async
app.get("/asyncError", (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error("error thrown by enpoint");
    } catch (err) {
      next(err);
    }
  }, 2000);
});

// custom middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: err.message });
  }
  next();
});

app.listen(3000, () => {
  console.log("Listening at at port 3000");
});
