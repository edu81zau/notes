//function reduce
// https://learn.javascript.ru/array-iteration
const arr = [1, 2, 3, 4, 5];

let result = arr.reduce(function (sum, current) {
  return sum + current;
}, 0);

console.log(`${result}`);
