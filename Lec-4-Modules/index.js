// const  math =require("buffer")//Here we do not use ./ becz of it is build in modules in nodjs
const math = require("./math");
// const { add, sub } = require("./math"); // Destructuring this also possible

console.log("Math value is", math.add(5, 4));
console.log("Math value is", math.sub(5, 4));
