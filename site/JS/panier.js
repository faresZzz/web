
function isconnect(){
    if (sessionStorage.getItem("estConnecte")==False){
        document.getElementById("connect").innerHTML= "veuillez vous connecter";
    }
    else{
        document.getElementById("connect").innerHTML= "bonjour bienvenue dans votre panier";
        Panier();
    }
}
function getCookie(cname) {// function getCookie prise sur W3School
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function Panier(){
    var panier=getCookie("panier");
    console.log(panier);
    if (panier!=""){
        document.getElementById("precedent").innerHTML=panier;
    }
    else{
        document.getElementById("precedent").innerHTML= "votre panier est vide"
    }
}

function setPanier(){
    let lieux=document.getElementById("voyage").value;
    let prix=document.getElementById("prix").value;
    console.log(lieux);
    console.log(prix);
    let voyage={"lieux":lieux, "prix": prix};
    console.log(voyage);
    document.cookie="panier ="+JSON.stringify(voyage)+";path=/";
}


//function temps(){
 // import {  AfficherTemperature } from "temperature.mjs";
 // console.log(AfficherTemperature("lyon"));
//}

