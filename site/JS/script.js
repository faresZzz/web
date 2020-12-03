
class destination{
    constructor(nom,prix, pitidej,animaux,image,continent,lien){
        this.nom= nom;
        this.prix=prix;
        this.pitidej=pitidej;
        this.image=image;
        this.lien=lien;
        this.continent=continent;
        this.animaux=animaux;
        
    }
}



function Recup()
{
    
    fetch("../Json/hotel.json")
    .then(function(reponse)
    {
        json=reponse.json();
        return json;
        
    })
    .then(function(json)
    {   
         
        data= json;
        listHotels(data); 
    })  
}

function listHotels(hotels){
    let paris= new destination(hotels[0].ville , hotels[0].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, hotels[0].image,hotels[0].continent, "../html/formulaire.html?ville=paris");
    let londres= new destination(hotels[1].ville , hotels[1].prixAdulte , hotels[1].petitDej , hotels[1].animauxOK, hotels[1].image,hotels[1].continent, "../html/formulaire.html?ville=londres");
    let newYork= new destination(hotels[2].ville , hotels[2].prixAdulte , hotels[2].petitDej , hotels[2].animauxOK, hotels[2].image,hotels[2].continent, "../html/formulaire.html?ville=newyork");
    let venise= new destination(hotels[3].ville , hotels[3].prixAdulte , hotels[3].petitDej , hotels[3].animauxOK, hotels[3].image,hotels[3].continent, "../html/formulaire.html?ville=venise");
    let johannesburg= new destination(hotels[4].ville , hotels[4].prixAdulte , hotels[4].petitDej , hotels[4].animauxOK, hotels[4].image,hotels[4].continent, "../html/formulaire.html?ville=johannesburg");
    let LasVegas= new destination(hotels[5].ville , hotels[5].prixAdulte , hotels[5].petitDej , hotels[5].animauxOK, hotels[5].image,hotels[5].continent, "../html/formulaire.html?ville=LasVegas");
    let MachuPichu= new destination(hotels[6].ville , hotels[6].prixAdulte , hotels[6].petitDej , hotels[6].animauxOK, hotels[6].image,hotels[6].continent, "../html/formulaire.html?ville=MachuPichu");
    let Rio= new destination(hotels[7].ville , hotels[7].prixAdulte , hotels[7].petitDej , hotels[7].animauxOK, hotels[7].image,hotels[7].continent, "../html/formulaire.html?ville=Rio");
    let sydney= new destination(hotels[8].ville , hotels[8].prixAdulte , hotels[8].petitDej , hotels[8].animauxOK, hotels[8].image,hotels[8].continent, "../html/formulaire.html?ville=sydney");
    let tokyo= new destination(hotels[9].ville , hotels[9].prixAdulte , hotels[9].petitDej , hotels[9].animauxOK, hotels[9].image,hotels[9].continent, "../html/formulaire.html?ville=tokyo");
    listeHotels=[paris,londres,newYork,venise,johannesburg,LasVegas,MachuPichu,Rio,sydney,tokyo];
    
    addDestination(listeHotels)
}    


function addDestination(listH){
    const aff = document.getElementById("listehotels");
    aff.innerHTML=""
    listH.forEach(hotel => {
        let autreDest= document.createElement("a");
        let img= document.createElement("img");
        img.src=hotel.image;
        img.alt=hotel.nom;
        autreDest.href=hotel.lien;
        autreDest.id=hotel.nom;
        img.addEventListener("mouseover", function(){infoHotel(hotel.nom)});
        aff.appendChild(autreDest);
        autreDest.appendChild(img);
    });
        
        
    
    
}

function filtre(){
    var listefiltres=[]
    let recherche=document.getElementById("recherchecase").value.toLowerCase();
    let continent=document.getElementById("continent").value;
    let prix=document.getElementById("prix").value;
    let pitidej=document.getElementById("petidej").checked;
    let animaux=document.getElementById("animaux").checked;
    
    listefiltres={"recherche":recherche.toLowerCase(),"continent":continent,"prix":prix,"pitidej":pitidej,"animaux":animaux};
    
    
    filtrage( listefiltres);
}   
function filtrage(choix){
    console.log(choix)
    let listehtls=listeHotels.slice();
    listeHotels.forEach(htls=>{
        
        if (choix.prix<htls.prix){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.continent!="All" && choix.continent!= htls.continent){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if(choix.recherche!="" && choix.recherche!=htls.nom.toLowerCase()){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.pitidej==true && htls.pitidej==false){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.animaux==true && htls.animaux==false){
            listehtls.splice(listehtls.indexOf(htls),1);
        }    
    })
    addDestination(listehtls);
    

    
}
    
    

 function affichebarrePrix(){
    let prix=document.getElementById("prix").value;
    document.getElementById("afficheprix").innerHTML=prix +" euros"; 
 }

 
function scroll(){
    let button=document.getElementById("top")
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
    }
} 
function remontrer(){
    document.documentElement.scrollTop=0;
}

 function infoHotel(val){
   AfficherTemperature(val);
 }
 function AfficherTemperature(ville)
{
    
    let appid="bfb725a2d2eb425c0443cbcdf5c91e8f";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid="+appid+"&units=metric").then(function(reponse)
    {
        json=reponse.json();
        return json;    
    })
    .then(function(json)
    {
        console.log("La temperature à " +json["name"]+" est de "+json["main"]["temp"]+" °C")
    })
}
var listeHotels;
Recup();
window.onscroll=function(){scroll()};
