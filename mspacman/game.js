function init(){

var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");
var img = new Image();

img.addEventListener("load", function() {

ctx.drawImage(img, 315, 0, 464, 134, 0, 0, 464, 134);
ctx.drawImage(img, 80, 0, 17, 17, 120, 90, 17, 17);


}, false);

img.src = "pacman10-hp-sprite.png";


}


