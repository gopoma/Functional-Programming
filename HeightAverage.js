const people = [
  {
    name: "Maria",
    height: 160
  },
  {
    name: "Daniel",
    height: 80
  },
  {
    name: "Sam",
  },
  {
    name: "Gustavo",
    height: 90
  },
  {
    name: "Carlos",
  }
];

const heights = people.filter(person => typeof(person.height) !== "undefined");
const heightTotal = heights.reduce((a, b) => a + b.height, 0);
const heightAverage = (heights.length !== 0)? heightTotal / heights.length : -1;
console.log(heightAverage);