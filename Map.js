const names = ["Maria", "Daniel", "Sam"];
const name_lengths = names.map(name => name.length);
console.log(name_lengths);

console.log("______________________________________")

const names2 = ["Mario", "Daniela", "Sam"];
const name_lengths2 = [];
for(let name of names2) {
  name_lengths2.push(name.length);
}
console.log(names2);
console.log(name_lengths2);

console.log("______________________________________")

const map = function(callback, arr) {
  const result = [];
  for(let item of arr) {
    result.push(callback(item));
  }
  return result;
}
const nums = [0, 1, 2, 3, 4, 5];
const squares = map(x => x * x, nums);
console.log(squares);
console.log(nums);