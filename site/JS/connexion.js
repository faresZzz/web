
let fichier={};
let nom;
let prenom;
let mail;
let pseudo;
let motDePasse;
let confirme;
function connexion()
{
 pseudo= document.getElementById("username").value;
 motDePasse= document.getElementById("mdp").value;
 console.log(pseudo);
 console.log(motDePasse);
 fichier.forEach(element => {
     if (element[0]== pseudo && element[1]== motDePasse){
         sessionStorage.setItem('estConnecte',"True");
     }
     else{
         alert("le nom d'utilisateur ou le mot de passe est faux");
     }    
 });

 
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
function creeUnCompte(){
    pseudo= document.getElementById("username").value;
    motDePasse= document.getElementById("mdp").value;  
    confirm= document.getElementById("confirme").value;
    if (pseudo in fichier){
        alert("le nom d'utilisateur est deja utilise");
    }
    else if(confirm!=motDePasse){
        alert("veuiller saisir 2 fois le meme mot de passe");
    }
    else{
        nouveau ={ "prenom":prenom,"nom":nom,"pseudo":pseudo,"mail":mail, "motDePasse":motDePasse,};
        fichier.push(nouveau);
        sessionStorage.setItem('estConnecte',"True");

    }
    
    
}
function deconnexion(){
    sessionStorage.setItem("estConnecte","False");

}

