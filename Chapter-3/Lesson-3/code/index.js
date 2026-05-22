const fs = require("fs");

// asynchronous methods
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// let content = "hello, this is sample file!";
// fs.writeFile("./sample.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Content added in file!");
// });

// console.log(10);

// fs.mkdir("newfolder", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder created!");
// });

// fs.rmdir("newfolder", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder Deleted!");
// });

// Syncronous methods
// fs.reafFileSync();
// fs.writeFileSync();
// fs.mkdirSync();
// fs.rmdirSync();

// Buffer
const buffer1 = Buffer.alloc(10); //craeting abuffer 10 byte
console.log(buffer1);

const buffer2 = Buffer.alloc(5, "hello", "utf-8");
console.log(buffer2);

// convert
const str = buffer2.toString("utf-8");
console.log(str); //hello

// copy
buffer2.copy(buffer1); //copying buffer 2 in buffer1
console.log(buffer1.toString("utf-8"));

// URL
const url = require("url");

const urlStr =
  "https://www.amazon.com/s?k=kitchen+and+dining&rh=p_36%3A-5000&s=date-desc-rank&_encoding=UTF8&content-id=amzn1.sym.679a99a5-333c-46b8-a493-b812dbdccbc0&pd_rd_r=63be1528-5979-44f9-a74c-6adb71f80325&pd_rd_w=ZuLcM&pd_rd_wg=vQg1K&pf_rd_p=679a99a5-333c-46b8-a493-b812dbdccbc0&pf_rd_r=RNTN49PCBN9ZBHPNECS4&ref=pd_hp_d_atf_unk";
const parsedUrl = url.parse(urlStr);
console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.hash);

// creating a url
const urlObject = {
  protocol: "file",
  host: "www.google.com",
  auth: null,
  slashes: true,
  hash: "#fragment",
  query: "key=1234",
  pathname: "/hello",
  port: 3000,
};

const myUrl = url.format(urlObject);
console.log(myUrl);

// relative url
const fromUrl = "http://www.google.com/path/to/sample";
const toUrl = "../other/file";
const resolvedUrl = url.resolve(fromUrl, toUrl);
console.log(resolvedUrl);

// Debugging -> same as JS

// chalk (use type: module in package.json to use ES6 import)
// import chalk from "chalk";
// console.log(chalk.red("hello "));
// console.log(chalk.green("world"));
// console.log(chalk.blue("welcome to nodejs"));
// console.log(chalk.yellow("chalk is used to add color in terminal"));

const colors = require("mynodemodule");
console.log(colors.getRandomColor());
