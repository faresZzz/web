let formulaires = document.getElementById('formulaires');
let usericon = document.getElementById('usericon');
let userbutton = document.getElementById('userbutton');
let body = document.getElementById('body');
let fade = document.getElementById('fadediv');
let modalites = document.getElementById('modalitesdiv');
let topresas = document.getElementById('topresas');
let bonsplans = document.getElementById('bonsplans');
let fadeimginfo = document.getElementById('fadeimginfo');
let ghostimginfo = document.getElementById('ghostimginfo');
let ville = document.getElementsByClassName('ville');
let nombretot = document.getElementById('nombretot');
let nombre18 = document.getElementById('nombre-18');
class destination {
    constructor(id, prix, link, name) {
        this.id = id;
        this.prix = prix;
        this.link = link;
        this.name = name;
    }
}
let bretagne = new destination(0, 120, '/triche/Website/images/belle_ile.jpg', 'Bretagne');
let amsterdam = new destination(1, 300, '/triche/Website/images/Amstermonsieur.jpg', 'Amsterdam');
let paris = new destination(2, 385, '/triche/Website/images/paname.jpg', 'Paris');
let madrid = new destination(3, 400, '/triche/Website/images/Madrid.jpg', 'Madrid');
let rome = new destination(4, 425, '/triche/Website/images/Rome.jpg', 'Rome');
let venise = new destination(5, 500, '/triche/Website/images/Venise.jpg', 'Venise');
let moscou = new destination(6, 525, '/triche/Website/images/Moscou.jpg', 'Moscou');
let pekin = new destination(7, 850, '/triche/Website/images/Beijing.jpg', 'Pekin');
let tokyo = new destination(8, 950, '/triche/Website/images/Tokyo.jpg', 'Tokyo');
let rio = new destination(9, 1100, '/triche/Website/images/Rio.jpg', 'Rio');
let sydney = new destination(10, 1200, '/triche/Website/images/Sydney.jpg', 'Sydney');
let newyork = new destination(11, 1750, '/triche/Website/images/NY.jpg', 'New York');
let newa = document.createElement('a');
let newdiv = document.createElement('div');
let newh1 = document.createElement('h1');
let newspan = document.createElement('span');
let prixcroi = [bretagne, amsterdam, paris, madrid, rome, venise, moscou, pekin, tokyo, rio, sydney, newyork];
let dist = [paris, bretagne, rome, venise, madrid, amsterdam, moscou, pekin, tokyo, newyork, rio, sydney];
let europe = [bretagne, amsterdam, paris, madrid, rome, venise];
let asie = [pekin, tokyo];
let amerique = [rio, newyork];
let europeDeLest = [moscou];
let oceanie = [sydney];
let popularity = [paris, rome, newyork, amsterdam, venise, moscou, sydney, tokyo, madrid, bretagne, rio, pekin];
let newimage = document.createElement("img");
let sejour_id = new URLSearchParams(window.location.search).get("id");
let newinput1 = document.createElement('input');
let newinput2 = document.createElement('input');
let dateajd = new Date();
let datedem = new Date();

function dates(){
    datedem.setDate(dateajd.getDate()+1);
    if (dateajd.getDate()<9){
        document.getElementById('depart').value= dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
        document.getElementById('depart').min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
        document.getElementById('arrivee').value=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-0'+datedem.getDate();
        document.getElementById('arrivee').min=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-0'+datedem.getDate();
    }
    else if(dateajd.getDate()==9){
        document.getElementById('depart').value= dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
        document.getElementById('depart').min= dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
        document.getElementById('arrivee').value= datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-'+datedem.getDate();
        document.getElementById('arrivee').min=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-'+datedem.getDate();
    }
    else{
        document.getElementById('depart').value=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
        document.getElementById('depart').min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
        document.getElementById('arrivee').value=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-'+datedem.getDate();
        document.getElementById('arrivee').min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
    }
}
dates();
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function search(){
    for (k of prixcroi){
        if (capitalizeFirstLetter(document.getElementById('headersearch').value) == k.name){
            document.getElementById('tri').value = '';
            return(bonsplans.innerHTML='<img onmouseover="infosimg(0)" src="' + k.link + '"/>\n <span class="ville">' + k.name +'</span>');
        }
    }
    console.log("Désolé, la destination rentrée n'est pas proposée.");
    alert("Désolé, la destination rentrée n'est pas proposée.");
}
let input=document.getElementById('headersearch');
input.addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("headerbutton").click();
    }
});
let dureeSejour=0;
function calculTotal() {

    let nbmin = Number(document.getElementById("mineurs").value);
    let nbmaj = Number(document.getElementById("adultes").value);
    dureeSejour = (document.querySelector('input[type="date"]#arrivee').valueAsNumber-document.querySelector('input[type="date"]#depart').valueAsNumber)/86400000 //Ecart en jour entre le départ et le retour (millisecondes a la base)
    let amount = Math.round((nbmin*0.4+nbmaj)*prixcroi[sejour_id].prix) ; 
    if(document.getElementById('ouidej').checked){
        amount+=12*(nbmin+nbmaj);
        amount*=dureeSejour;
    }
    else{
        amount*=dureeSejour;
    }
    document.getElementById("prix").innerHTML = amount+' €';
}
calculTotal();
function registerfade(){
    if (document.getElementById('minscrire').style.display ==='none'){
        document.getElementById('registerchev').className='fa fa-chevron-left';
        document.getElementById('minscrire').style.display = 'block';
        document.getElementById('connectchev').className='fa fa-chevron-right';
        document.getElementById('meconnecter').style.display='none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }

    } else{
        document.getElementById('registerchev').className='fa fa-chevron-right';
        document.getElementById('minscrire').style.display = 'none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }
    }
}
function connectfade(){
    if (document.getElementById('meconnecter').style.display ==='none'){
        document.getElementById('connectchev').className='fa fa-chevron-left';
        document.getElementById('meconnecter').style.display = 'block';
        document.getElementById('registerchev').className='fa fa-chevron-right';
        document.getElementById('minscrire').style.display='none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }

    } else{
        document.getElementById('connectchev').className='fa fa-chevron-right';
        document.getElementById('meconnecter').style.display = 'none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }
    }
}
document.getElementById('meconnecter').onsubmit = function(event){
    event.preventDefault(); // On enpêche le formulaire de recharger la page
    connecttest();
}
document.getElementById('minscrire').onsubmit = function(event){
    event.preventDefault(); // On enpêche le formulaire de recharger la page
    registertest();
}
function registertest(){
    if(document.getElementById('firstPass').value==document.getElementById('confirmPass').value && document.getElementById('registerid').value!=localStorage.getItem('pseudo')){
        localStorage.setItem('password',document.getElementById('firstPass').value);
        localStorage.setItem('pseudo',document.getElementById('registerid').value);
        document.getElementById('minscrire').style.display='none';
        newspan.innerHTML="Vous vous etes bien incrit, veuillez vous connecter.";
        newdiv.append(newspan)
        newdiv.setAttribute('id','registerSuccess');
        newdiv.display='block';
        document.getElementById('formcontent').append(newdiv);
    } else if(document.getElementById('registerid').value==localStorage.getItem('pseudo')){
        alert('Vous etes deja inscrit sous ce pseudo');
    } else{
        alert('veuillez entrer deux fois le meme mot de passe');
    }
}
function connecttest(){ // ATTENTION : NE JAMAIS UTILISER LOCALSTORAGE POUR DES MDP (NON SECURISE)
    if (document.getElementById('connectid').value==localStorage.getItem('pseudo') && document.getElementById('connectpwd').value==localStorage.getItem('password')){
        sessionStorage.setItem('isConnected','true');
        document.getElementById('formcontent').style.display='none';
        newh1.setAttribute('style','text-align:center;');
        newh1.innerHTML="Bienvenue, "+document.getElementById('connectid').value+" !";
        document.getElementById('formulaires').append(newh1);
        newa.innerHTML='Déconnexion';
        newa.id="disconnectlink";
        newa.setAttribute('onclick','deco()');
        document.getElementById('formulaires').append(newa);
    } else{
        alert('Désolé, le mot de passe ou le pseudo rentré est invalide');
    }
}
function isConnected(){
    if(sessionStorage.getItem('isConnected')==='true'){
        document.getElementById('formcontent').style.display='none';
        newh1.setAttribute('style','text-align:center;');
        newh1.innerHTML="Bienvenue, "+localStorage.getItem('pseudo')+" !";
        document.getElementById('formulaires').append(newh1);
        newa.innerHTML='Déconnexion';
        newa.id="disconnectlink";
        newa.setAttribute('onclick','deco()');
        document.getElementById('formulaires').append(newa);
    }
}
isConnected();
function deco(){
    sessionStorage.clear();
    window.location.reload();
}
function connect() { //on change l'icone, On affiche le fade div et le formulaire
    if (formulaires.style.display === 'none') {
        usericon.className = 'fa fa-user';
        document.getElementById('player').style.display='block';
        formulaires.style.display = 'block';
        userbutton.style.fontSize = '24px';
        fade.style.display = 'block';
    } else {
        usericon.className = 'fa fa-user-o';
        document.getElementById('player').style.display='none';
        formulaires.style.display = 'none';
        userbutton.style.fontSize = '20px';
        fade.style.display = 'none';
    }
}

function disconnect() { //On enlève le fade div et on remet tout en ordre
    usericon.className = 'fa fa-user-o';
    document.getElementById('player').style.display='none';
    formulaires.style.display = 'none';
    fade.style.display = 'none';
    userbutton.style.fontSize = '20px';
}

function afficheimg() {
    newimage.setAttribute("src", prixcroi[sejour_id].link);
    newimage.setAttribute("id", "imagefond");
    document.getElementById('content').append(newimage);
}
afficheimg(); 

function redirectid(){
    newinput1.setAttribute('type','hidden');
    newinput1.setAttribute('value',sejour_id);
    newinput1.setAttribute('name','id')
    document.getElementById('blocresa').append(newinput1);

}
redirectid();
localStorage.setItem('nbr_resa',0);
function redirectduration(){

    if(sessionStorage.getItem('isConnected')!='true'){
        event.preventDefault();
        document.getElementById('notconnected').textContent ="Veuillez vous connecter";
        document.getElementById('notconnected').style.color="red";
    }
    else{
        newinput2.setAttribute('type','hidden');
        newinput2.setAttribute('value',dureeSejour);
        newinput2.setAttribute('name','dureeSejour');
        document.getElementById('blocresa').append(newinput2);
        localStorage.setItem('nbr_resa',localStorage.length-2); //On crée une variable stockée localement pour savoir combien de réservations on a (-2 pour pwd et pseudo, +1 pour commencer a resa n°1)
        localStorage.setItem('resa'+localStorage.getItem('nbr_resa')+'id',sejour_id);

    }
}

