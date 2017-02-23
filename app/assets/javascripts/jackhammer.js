var colors = ["blue", "red", "pink", "purple", "green", "yellow", "brown"];

function jackhammer(box) {
  box.style["background-color"] = colors[Math.floor(Math.random() * colors.length)];
  console.log(box.style["background-color"]);
}



function teeHee(box) {
  console.log("HAHAHAHAHHA");
  var boxToChange = document.getElementById("change").innerHTML;
  
  if (box.innerHTML === "Morning") {
    console.log(document.getElementById("change").innerHTML);
    document.body.style.backgroundColor = "purple";
  } else if (box.innerHTML === "Afternoon") {     
    document.body.style.backgroundColor = "pink";
  } else if (box.innerHTML === "Evening") {
    document.body.style.backgroundColor = "brown";
  }

  boxToChange.
  

}