




var canvas= document.getElementById("can");
var ctx= canvas.getContext('2d');


let image= new Image;
image.src="../images/paris.jpg"
ctx.drawImage(image, 200, 10, 500 , 500);