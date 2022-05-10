let time = 5;
const carPositions = [1, 1, 1];

while(time) {
  // decrease time
  time--;
  
  console.log();

  for(let i = 0; i < carPositions.length; i++) {
    // move or stall car
    if(Math.random() > 0.3) { carPositions[i]++; }
    
    // draw car
    let progress = "";
    for(let j = 0; j < carPositions[i]; j++) {
      progress += "-";
    }
    console.log(progress);
  }
}