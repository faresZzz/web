



class destination{
    constructor(nom,prix, pitidej,animaux,image,lien){
        this.nom= nom;
        this.prix=prix;
        this.pitidej=pitidej;
        this.image=image;
        this.lien=lien;
        
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
    let paris= new destination(hotels[0].ville , hotels[0].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, '../images/paris.jpg', "../html/formulaire.html");
    let londres= new destination(hotels[1].ville , hotels[1].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, "../images/londres.jpg", "../html/formulaire.html");
    let newYork= new destination(hotels[2].ville , hotels[2].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, "../images/newyork.jpg", "../html/formulaire.html");
    let venise= new destination(hotels[3].ville , hotels[3].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, "../images/venise.jpg", "../html/formulaire.html");
    listeHotels=[paris,londres,newYork,venise];
    findville(listeHotels);
}


function formulaire()
{
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let mail=document.getElementById("email").value;
    let tel=document.getElementById("telephone").value;
    let depart=document.getElementById("datededepart").value;
    let arrive=document.getElementById("datederetour").value;
    let nbAdultes=document.getElementById("nbadulte").value;
    let nbEnfants=document.getElementById("nbenfant").value;
    let pD=document.getElementById("pdej").checked;
    let animaux=document.getElementById("animaux").checked;
    //let renseignement=document.getElementById("plus").value;
    
    jours=verifDate(depart,arrive);
    let valeurs=[jours,nbAdultes,nbEnfants,pD,animaux]
    console.log(valeurs);
    prix(valeurs)
    
}

function verifDate(dateDpart,dateRetour){
    valren="dates valides"
    if (Date.parse(dateDpart)<date){
        valren="Erreur de date: verifiez les dates svp"    
    }
    else if (Date.parse(dateRetour)<date){
        valren="Erreur de date: verifiez les dates svp"
    }
    else if (Date.parse(dateRetour)-Date.parse(dateDpart)<=0){
        valren="Erreur de date: verifiez les dates svp"
    }
    document.getElementById("validiteDates").innerHTML=valren;
    return Math.ceil(((Date.parse(dateRetour)-Date.parse(dateDpart))/(1000*60*60*24)))
}

function findville(liste){
    for(let hotel of liste ){
        if (ville==hotel.nom.toLowerCase()){
            return hotel.prix;
        }
    }
}
function prix(infos){
    let prixhotel=findville(listeHotels);
    let prixfinale=0;
    let prixPetitDej;
    let prixanimaux;
    let nbJours=  infos[0];
    let nbadulte=parseInt(infos[1],10);
    let nbenfant=parseInt( infos[2],10);


    if (infos[3]== false){ prixPetitDej = 0}
    else{prixPetitDej=12}
    if (infos[4]== false){prixanimaux = 0}
    else{prixanimaux=12}

    prixfinale=nbJours*(prixhotel*(nbadulte+0.4*nbenfant));
    prixfinale+= nbJours* prixPetitDej*(nbadulte+nbenfant);
    prixfinale+= nbJours* prixanimaux; 
    document.getElementById("total").innerHTML=Math.round( prixfinale)+" euros";
    document.getElementById("forumulaireResa").action=`recapitulatif.html?prix=${prixfinale} `
    
}

function estconnecter(){
    pass
    if(sessionStorage.getItem('estConnecte')!='true'){
        event.preventDefault();
        document.getElementById('pasConnect').textContent ="Veuillez vous connecter";
        document.getElementById('pasConnect').style.color="red";
    }
}
var date=Date.now();
var ville=new URLSearchParams(window.location.search).get("ville");
var listeHotels
Recup();


