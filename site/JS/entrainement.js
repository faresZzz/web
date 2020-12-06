




//var canvas= document.getElementById("can");
//var ctx= canvas.getContext('2d');
//
//
//let image= new Image;
//image.src="../images/paris.jpg"
//ctx.drawImage(image, 200, 10, 500 , 500);

image=["/site/images/paris.jpg","/site/images/paris2.jpg", "/site/images/paris3.jpg"];



var i=0;
var time=1000;
var compteur;
function slide(){
   
    let prout=document.getElementById('slide')
    prout.src=image[i];
    if(i<image.length-1){
        i++;
    }
    else{
        i=0
    }
    compteur= setTimeout(function(){slide()}, time)

    

}
function stop(){
    clearTimeout(compteur);
    let prout=document.getElementById('slide');
    i=0;
    prout.src=image[i];
}
