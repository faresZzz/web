

let nbJours;
let nbAdultes;
let nbEnfants;
let animaux;
let petitD;
let prixTotal;
let depart;
let arrive;
let date=Date.now();
let data={};

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
        data = json;
        
        console.log(data);
        prixTotal=(prixAdlt*nbAdultes+prixEnfant*nbEnfants+animaux+pD)*nbJours;
        console.log(prixTotal);
        document.getElementById("prix").innerHTML="la reservation de votre hotel pour "+nbJours+" jours, du "+depart+" au "+ retour+  " est de: "+prixTotal+" $ TTC";
        
    })  
}

function formulaire()
{
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    mail=document.getElementById("email").value;
    tel=document.getElementById("telephone").value;
    depart=document.getElementById("datededepart").value;
    retour=document.getElementById("datederetour").value;
    nbAdultes=document.getElementById("nbadulte").value;
    nbEnfants=document.getElementById("nbenfant").value;
    pD=document.getElementById("pdej").checked;
    animaux=document.getElementById("animaux").checked;
    renseignement=document.getElementById("plus").value;

    console.log(date);
    
    if (Date.parse(depart)<date){console.log("vas te faire foutre")}
    if (Date.parse(retour)<date){console.log("vas te faire foutre")}
    if (Date.parse(retour)-Date.parse(depart)<0){console.log("tu sais quoi vas te faire foutre")}
}

function Data()
{
    prixAdlt=data[0].prixAdulte;
    prixEnfant=data[0].prixAdulte*0.4;
    ville=data[0].ville;
    pD=data[0].petitDej;
    if (data[0].animauxOK=="oui"){
        animaux=data[0].prixAnimaux;
    }else{
        animaux=0;
    }

}

