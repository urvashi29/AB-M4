// http module
// creating a basic node server
// var http = require("http");
// console.log(http);

// var server = http.createServer(function (req, res) {
//   console.log(req);
//   console.log(res);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("correct!");
// });

// server.listen(3000, "127.0.0.1", function () {
//   console.log("Listening on port number 3000!");
// });

// const http = require("http");

// const options = {
//   hostname: "www.google.com",
//   port: 80,
//   path: "/",
//   method: "GET",
// };

// const req = http.request(options, (res) => {
//   console.log("status", res.statusCode);

//   res.on("data", (data) => {
//     console.log(data);//buffer
//     process.stdout.write(data);
//   });

//   res.on("error", () => {
//     console.log(err);
//   });
// });

// req.end();

// os module
const os = require("os");
// console.log(os);

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());

//path
const path = require("path");

const normalisePath = path.normalize("foo\\/bar/\vjbj\ee/hj/nkm/...");
console.log(normalisePath);

const createPath = path.join("/hello", "uhd/dejdoe", "dhe", "/idjie");
console.log(createPath);

const resolvePath = path.resolve(
  "hgdjh/nhhe",
  "temp/hhi",
  "....,.",
  "hij/jdkwjd/...dhijdkw",
);
console.log(resolvePath);
