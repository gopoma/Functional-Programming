const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums.filter(num => num % 2 == 0);
console.log(evens); // [0, 2, 4, 6, 8, 10]
console.log(nums); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]