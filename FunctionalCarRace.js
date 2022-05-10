function moveCars(carPositions) {
  return carPositions.map(carPosition => (Math.random() > 0.3)? carPosition + 1 : carPosition);
}
function outputCar(carPosition) {
  let progress = "";
  for(let i = 0; i < carPosition; i++) {
    progress += "-";
  }
  return progress;
}
function runStepOfRace(state) {
  return {
    time: state.time - 1,
    carPositions: moveCars(state.carPositions)
  };
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

race({ time: 5, carPositions: [1, 1, 1] });