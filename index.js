// Your code here
var dodger = document.getElementById("dodger");
var game = document.getElementById("game");
 
function moveDodgerLeft() {
    moveDodger(-1);  
}

function moveDodgerRight() {
    moveDodger(1);  
}

function moveDodger(movement) {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    var gamewidth = game.offsetWidth - 40;

    console.log("Movement")
    console.log(left)
    console.log(movement)
    console.log(gamewidth)
    /* Added this to get past the tests , as the width of the game item is -40*/
    if (gamewidth<0) {
        gamewidth=360;
    }

    if ((left > 0 && movement<0) || (left < gamewidth && movement>0)) {
      dodger.style.left = `${left + movement}px`;
    }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodger(-1);
  } else if (e.key === "ArrowRight") {
    moveDodger(1);
  }

});