




var canvas= document.getElementById("can");
var context= canvas.getContext("2d");

canvas.width=800;
canvas.height=600;
//context.fillRect(100,100,100,50)

context.beginPath();
context.moveTo(75,50);
context.lineTo(400,100);
context.stroke()


var x= 100;
var v=2.5
function anime(){
    requestAnimationFrame(anime);
    context.clearRect(0,0,canvas.width,canvas.height)
    context.beginPath();
    context.arc(x,100,40,0,2*Math.PI)
    context.strokeStyle = 'red'
    context.fillStyle='green'
    context.fill()
    context.stroke()
    if (x+40> canvas.width || x-40<0){
        v=-v
    }
    x+=v
}

anime();