function moveCars(carPositions) {
  return carPositions.map(carPosition => (Math.random() > 0.3)? carPosition + 1 : carPosition);
}
function outputCar(carPosition) {
  return Array(carPosition).fill("-").reduce((a, b) => a + b);
}
function runStepOfRace(state) {
  return { time: state.time - 1, carPositions: moveCars(state.carPositions) };
}
function draw(state) {
  console.log("");
  console.log(state.carPositions.map(carPosition => outputCar(carPosition)).join("\n"));
}
function race(state) {
  draw(state);
  if(state.time) {
    race(runStepOfRace(state));
  }
}

const time = 5;
const carPositions = [1, 1, 1];
race({ time, carPositions }); 