
function isconnect(){
    if (sessionStorage.getItem("estConnecte")==False){
        document.getElementById("connect").innerHTML= "veuillez vous connecter";
    }
    else{
        document.getElementById("connect").innerHTML= "bonjour bienvenue dans votre panier";
        Panier();
    }
}
function panier(){
  let pan=JSON.parse( sessionStorage.getItem("panier"));
  console.log(pan);
  if (pan===null){
    document.getElementById("connect").innerHTML= "votre panier est vide";
  }
  else{
    wish=document.createElement("div");
    wish.id="wish"
    var item=document.createElement("div");
    item.innerText=`destination: ${pan.dest}\ndate de depart: ${pan.depart}\ndate de retour: ${pan.arrive}\n nombre d'adultes: ${pan.nbAdultes} \n nombre d'enfants: ${pan.nbEnfants}\n petit dejeuner: ${pan.pD} \n animaux: ${pan.animaux}`;
      
    
    document.getElementById('connect').appendChild(item);
    
  }
}
