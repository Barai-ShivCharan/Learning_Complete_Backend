const fs = require("fs");
const os = require("os"); //find info on os
//Blocking....
// console.log(1);
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);
// console.log(2);

//Non-Blocking....
// console.log(1);
// fs.readFile("contact.txt", "utf-8", (err, result) => {
//   console.log(result);
// });
// console.log(2);
// console.log(2);
// console.log(3);
// console.log(4);

//Default thread pool size-4
//Maz? -8Core cpu-8
console.log(os.cpus().length); //for finding the core in cpu
