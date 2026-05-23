// creating a node server
// var http = require("http");
// console.log(http);

// var server = http.createServer(function (req, res) {
//   if (req.method == "GET") {
//   }
//   if (req.method == "POST") {
//   }
//   res.end("correct!");
// });

// server.listen(3000, "127.0.0.1", function () {
//   console.log("Listening on port number 3000!");
// });

// Express server
const express = require("express");
const app = express();

// to parse json inside express
app.use(express.json());

app.listen(3000, function () {
  console.log("Application is running on 3000");
});

// /endpoints or /resource
// app.method("path", () => {

// })

//in real time, this data will come from database
const person = [
  { name: "John Doe", age: 30, id: 1 },
  { name: "Jane Smith", age: 25, id: 2 },
  { name: "Alice Johnson", age: 28, id: 3 },
  { name: "Bob Brown", age: 35, id: 4 },
];

// GET
app.get("/", (req, res) => {
  res.status(200).json({ data: "working!" });
});

app.get("/employees", (req, res) => {
  res.status(200).json({ data: person });
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;

  let employee = person.find((emp) => emp.id == id);
  if (employee) {
    res.status(200).json({ data: employee });
  } else {
    res.status(404).json({ message: "Enployee doesn't exist" });
  }
});

// POST
app.post("/employees", (req, res) => {
  const employee = req.body;
  console.log(employee);
  person.push(employee);
  res.status(201).json({ data: employee });
});

// DELETE
app.delete("/:id", (req, res) => {
  const id = req.params.id; //1

  const employee = person.find((emp) => emp.id == id); //1 employee
  if (employee) {
    const employeeIndex = person.indexOf(employee);
    person.splice(employeeIndex, 1);
    res.status(200).json({ message: "Employee deleted successfully" });
  } else {
    res.status(404).json({ message: "Employee doesn't exist" });
  }
});

// TASK
// PUT
// app.put("/", () => {

// })

// PATCH
// app.patch("/", () => {

// })

app.put("/employees/:id", (req, res) => {
  let employee = req.body;

  let id = req.params.id;
  person.splice(
    person.findIndex((e) => e.id == id),
    1,
  );
  person.push(employee);
  res.status(201).json({ data: employee });
});

// app.patch("/employees/:id", (req, res) => {
//   let id = req.params.id;

//   let emp = req.body;
//   // find the record and update the property
// });
