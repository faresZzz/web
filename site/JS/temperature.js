
function dessin(){
    var canvas=document.getElementById("tuto");
    var cont=canvas.getContext('2d'); 
    canvas.style.border='1px solid black';
    canvas.width="1080";
    canvas.height="1080"
    
    var img = new Image();   // Crée un nouvel élément Image
    img.src = '/site/images/Monde.svg'; 
    img.addEventListener("load",function(){
        cont.drawImage(img,1,1,canvas.width,canvas.height);
    });
    
    cont.fillStyle="rgb(200,0,0)";
    cont.fillRect(800,500,150,150);
    

    ///cont.fillStyle="rgba(0,0,200,0.5)";
    ///cont.fillRect(10,10,50,50);
}


// idee faire un canvas gean et quand on met la souris sur Europe sa nous propse de nous rediriger vers la page avec les desitnations europe
// faire le grid conteneur pour les images
// faire le bouton top
//faire deffiler les images de la ville quand on a la mouse over
