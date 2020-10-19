

let nbJours=5;
let nbAdultes=2;
let nbEnfants=3;
let animaux;
let petitD;
let prixTotal;
let datearrive="15/03/2020"
let datedepart="20/03/2020"
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
        prixAdlt=data[0].prixAdulte;
        prixEnfant=data[0].prixAdulte*0.4;
        ville=data[0].ville;
        pD=data[0].petitDej;
        if (data[0].animauxOK=="oui"){
            animaux=data[0].prixAnimaux;
        }else{
            animaux=0;
        }

        console.log(data);
        prixTotal=(prixAdlt*nbAdultes+prixEnfant*nbEnfants+animaux+pD)*nbJours;
        console.log(prixTotal);
        document.getElementById("prix").innerHTML="la reservation de votre hotel pour "+nbJours+" du "+datearrive+" au "+ datedepart+  " est de: "+prixTotal+" $ TTC";
        
    })  
}

function formulaire()
{
    nom=document.getElementById("nom").value;
    console.log(nom);

}

