
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
  

}