
var nextNumber = 1;
function clickNumGame(number) {
  if (number === nextNumber) {
    if (nextNumber === 10) {
      alert("You Win!");
      nextNumber = 1;
    } 
    nextNumber++;
  } else {
    nextNumber = 1;
      alert("You screwed up. Try again");
  }
  console.log(number);
}