
function connexion()
{
    mail= document.getElementById("mail").value;
    motDePasse= document.getElementById("motdpasse").value;
    console.log(mail);
    console.log(motDePasse);
    for(element of fichier) {
        if (element.mail== mail && element.motDePasse== motDePasse){
            sessionStorage.setItem('estConnecte',"True");
            console.log("bonjour ",element.prenom)
            break;
        }
        else{
            console.log("le nom d'utilisateur ou le mot de passe est faux");
        }    
 };

 
}
function Recup()
{
    
    fetch("../Json/comptes.json")
    .then(function(reponse)
    {
        json=reponse.json();
        return json;
        
    })
    .then(function(json)
    {   
        fichier = json;
        console.log(fichier)
        
    })  
}
function identifiants(){
    let prenom=document.getElementById("prenom").value;
    let nom=document.getElementById("Nom").value;
    let adresseMail=document.getElementById("email").value;
    let motDePasse= document.getElementById("motdpasse").value; 
    let confirm= document.getElementById("confirmermotdpasse").value;
    let identifiant={"prenom":prenom,"nom":nom,"mail":adresseMail,"motDePasse":motDePasse,"confirm":confirm};
    console.log(identifiant)
    creationCompte(identifiant);

function creationCompte(id){
    valide=true;
    for(personne of fichier){
        if (personne.mail== id.mail){
            console.log("un compte est deja relier a cette adresse mail");
            valide=false
            break;
        
        } }
    if (valide){
        if (id.confirm!=id.motDePasse){
        console.log("le mot de passe ne correcpond pas");
        }
        else{
        sessionStorage.setItem("nouvelUtilisateur",id);
        sessionStorage.setItem('estConnecte',"True");
        console.log("connecter")
        }
    }    
    
   
}
}
function deconnexion(){
    sessionStorage.setItem("estConnecte","False");

}
var fichier;
Recup();


