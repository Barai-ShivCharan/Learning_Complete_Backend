const fs = require("fs");

//Sync....call
// fs.writeFileSync("./test.txt", "Hey There, this testing page");

// Async....call
// fs.writeFile(
//   "./create.txt",
//   "Hey There, this testing page of async..",
//   (err) => {
//     console.log(err);
//   }
// );

// For Reading file
// const result = fs.readFileSync("./create.txt", "utf-8");
// console.log(result);

// Async...call
// fs.readFile("./create.txt", "utf-8", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });

// For Append content in existing file
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", "Hey There\n");

//for copy of file
fs.cpSync("./test.txt", "./copy.text");

//for delete file
fs.unlinkSync("./copy.text");

// for file details
console.log(fs.statSync("./create.txt"));

//for making directory
// fs.mkdirSync("")
