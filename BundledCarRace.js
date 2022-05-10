function moveCars() {
  for(let index in carPositions) {
    if(Math.random() > 0.3) { carPositions[index]++; }
  }
}
function drawCar(carPosition) {
  let progress = "";
  for(let i = 0; i < carPosition; i++) { progress += "-"; }
  console.log(progress);
}
function runStepOfRace() {
  time--;
  moveCars();
}
function draw() {
  console.log();
  for(let carPosition of carPositions) { drawCar(carPosition); }
}

let time = 5;
const carPositions = [1, 1, 1];

while(time) {
  runStepOfRace();
  draw();
}