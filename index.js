// Your code here
var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  
  let rightNumbers = dodger.style.left.replace("px", ""); //look up replace
  let left = parseInt(rightNumbers, 10);
  //debugger
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}



document.addEventListener("keydown",  function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight"){
    
    moveDodgerRight();
  }
}
);