var ship = document.getElementById("ship");
var alien = document.getElementById("alien");
var x = 0;

ship.style.left = x + "vw";

document.onkeydown = function (event) {
  console.count("keydown");
  if (event.key === "ArrowLeft" && x > 0) x = x - 1;
  else if (event.key === "ArrowRight" && x < 79) x = x + 1;
  ship.style.left = x + "vw";

  var shipRect = ship.getBoundingClientRect();
  var alienRect = alien.getBoundingClientRect();
  console.log(shipRect, alienRect);
  if (shipRect.x + shipRect.width > alienRect.x)
    console.log("colision detected");
};
/*
ship.getBoundingClientRect();


var alienwholespace = document.getElementById("alienwholespace");
var x = 0;
var y = 0;
alienwholespace.style.up = y + "vh" && x + "vw";
document.onkeydown = function (move) {
  if (move.key === "RightDirection" && y < 20) 
  return y = y - 1,  x = x - 1;;
 
  else if (move.key === "RightDirection" && y > 0) 
  return x = x + 1; y = y + 1;
  
};
setInterval(move, 100)
*/
