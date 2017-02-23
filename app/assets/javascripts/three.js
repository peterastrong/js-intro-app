var gate1 = 0;
var gate2 = 0;
var gate3 = 0;

function allThree(boxNumber) {
  
  if (boxNumber === 1) {
    gate1 = 1;
    console.log(gate1);
  } else if (boxNumber === 2) {
    gate2 = 1;
    console.log(gate2);
  } else {
    gate3 = 1;
    console.log(gate3);
  }

  if (gate1 === 1 && gate2 === 1 && gate3 === 1) {
    alert("You win!");
  }
}