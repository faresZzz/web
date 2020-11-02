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
let newi = document.createElement('i');
let newh1 = document.createElement('h1');
let newspan = document.createElement('span');
class continent {
    constructor(zoneg, name,id) {
        this.zoneg = zoneg;
        this.name = name;
        this.id = id;
    }
}
let prixcroi = [bretagne, amsterdam, paris, madrid, rome, venise, moscou, pekin, tokyo, rio, sydney, newyork];
let dist = [paris, bretagne, rome, venise, madrid, amsterdam, moscou, pekin, tokyo, newyork, rio, sydney];
let europe = new continent([bretagne, amsterdam, paris, madrid, rome, venise], 'Europe',0);
let asie = new continent([pekin, tokyo], 'Asie',1);
let amerique = new continent([rio, newyork], 'Amérique',2);
let europeDeLest = new continent([moscou], 'Europe de l\'Est',3);
let oceanie = new continent([sydney], 'Océanie',4);
let popularity = [paris, rome, newyork, amsterdam, venise, moscou, sydney, tokyo, madrid, bretagne, rio, pekin];
let zone = [europe, asie, amerique, europeDeLest, oceanie];
let zoneid =0;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function search(){
    for (k of prixcroi){
        if (capitalizeFirstLetter(document.getElementById('headersearch').value) == k.name){
            document.getElementById('tri').value = ''
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
document.getElementById('meconnecter').onsubmit = function(event){
    event.preventDefault(); // On empêche le formulaire de recharger la page
    connecttest();
}
document.getElementById('minscrire').onsubmit = function(event){
    event.preventDefault(); // On empêche le formulaire de recharger la page
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
        alert('Vous êtes déjà inscrit sous ce pseudo');
    } else{
        alert('veuillez entrer deux fois le même mot de passe');
    }
}
function connecttest(){
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
function disconnect() { //On enlève le fade div et on remet tout en ordre
    usericon.className = 'fa fa-user-o';
    document.getElementById('player').style.display='none';
    formulaires.style.display = 'none';
    fade.style.display = 'none';
    userbutton.style.fontSize = '20px';
}
function deco(){
    sessionStorage.clear();
    window.location.reload();
}
function modalitederoul() { // On affiche le formulaire de tri des destinations
    if (modalites.style.display === 'none') {
        modalites.style.display = 'block';
        chevron.className = 'fa fa-chevron-up';
    } else {
        modalites.style.display = 'none';
        chevron.className = 'fa fa-chevron-down';
    }
}
function afficheimg() { // On trie les destinations et on les affiche
    bonsplans.innerHTML = '';
    let imglinks = '';
    let boutonzones = '';
    if (document.getElementById('tri').value == '1') { //tri croissant
        let c = 0;
        for (let i of prixcroi) {
            if (i.prix <= document.getElementById('prixmax').value) {
                imglinks += '<img onmouseover="infosimg(' + c + ')" src="' + i.link + '"/>\n <span class="ville">'+ i.name+'</span>';
                c++
            }
        }
        bonsplans.innerHTML += imglinks;
    } else if (document.getElementById('tri').value == '2') { //tri par distance
        let c = 0;
        for (let i of dist) {
            if (i.prix <= document.getElementById('prixmax').value) {
                imglinks += '<img onmouseover="infosimg(' + c + ')" src="' + i.link + '"/>\n <span class="ville">'+ i.name+'</span>';
                c++
            }
        }
        bonsplans.innerHTML += imglinks;
    } else if (document.getElementById('tri').value == '3') { //tri par popularité
        let c = 0;
        for (let i of popularity) {
            if (i.prix <= document.getElementById('prixmax').value) {
                imglinks += '<img onmouseover="infosimg(' + c + ')" src="' + i.link + '"/>\n <span class="ville">'+ i.name+'</span>';
                c++
            }
        }
        bonsplans.innerHTML += imglinks;
    } else if (document.getElementById('tri').value == '4') { //tri par zone
        let j = 0;
        bonsplans.innerHTML='<div id="locations"></div>';
        for (let destination of zone) { //On ajoute les boutons
            boutonzones += '<button class="zones" onclick="affichezones('+destination.id+')"><i value="' + j + '">' + destination.name + '</i></button>';
            j += 1;
        }
        document.getElementById('locations').innerHTML += boutonzones;
        for(let k=0;k<document.getElementsByClassName('zones').length;k++){ //On rajoute un petit chevron
            document.getElementsByClassName('zones')[k].innerHTML+='<i class="fa fa-chevron-down" id="chevron"></i>'
        }
    }
}
afficheimg();

function affichezones(idzoneg){
    let c = 0;
    let j=0;
    let boutonzones = '';
    zoneid=idzoneg;
    bonsplans.innerHTML='<div id="locations"></div>';
    for (let destination of zone) { //On ajoute les boutons
        boutonzones += '<button class="zones" onclick="affichezones('+destination.id+')"><i value="' + j + '">' + destination.name + '</i></button>';
        j += 1;
    }
    document.getElementById('locations').innerHTML += boutonzones;
    for(let k=0;k<document.getElementsByClassName('zones').length;k++){ //On rajoute un petit chevron
        document.getElementsByClassName('zones')[k].innerHTML+='<i class="fa fa-chevron-down" id="chevron"></i>'
    }
    let imglinks = '';
    for (let i of zone[idzoneg].zoneg) { //On importe les images
        if (i.prix <= document.getElementById('prixmax').value) {
            imglinks += '<img onmouseover="infosimg(' + c + ')" src="' + i.link + '"/>\n <span class="ville">' + i.name + '</span>';
            c++
        }
    }
    bonsplans.innerHTML += imglinks;
}
function infosimg(i) { //On affiche la banière d'informations sur le voyage au survol de l'image
    let eedic = 16 + 30.1 * Math.trunc(i / 3); //Ecart entre 2 images
    let ptbhc = 135 + 3 * Math.trunc(i / 3); //petit trait blanc horizontal
    let ptbvc = 4.5 * (i % 3); //petit trait blanc vertial
    let largc = 10 + 26.4 * (i % 3); //Position en horizontale de l'image
    fadeimginfo.style.display = 'block';
    ghostimginfo.style.display = 'block';
    ghostimginfo.setAttribute('onmouseout', 'delimg(' + i + ')');
    ville[i].style.display = 'inline';
    fadeimginfo.style.marginLeft = largc + 'vw';
    fadeimginfo.style.marginTop = eedic + 'vh';
    fadeimginfo.style.left = ptbvc + 'px';
    fadeimginfo.style.top = ptbhc + 'px';
    ghostimginfo.style.marginLeft = largc + 'vw';
    ghostimginfo.style.marginTop = eedic - 16 + 'vh';
    ghostimginfo.style.left = ptbvc + 'px';
    ghostimginfo.style.top = ptbhc + 'px';
    ghostimginfo.setAttribute('onclick', 'resa(' + i + ')');
}

function resa(i) {
    if (document.getElementById('tri').value == '1') { //tri croissant
        document.location.href = '/triche/Website/html/reservation.html?id=' + prixcroi[i].id;
    } else if (document.getElementById('tri').value == '2') { //tri par distance
        document.location.href = '/triche/Website/html/reservation.html?id=' + dist[i].id;
    } else if (document.getElementById('tri').value == '3') { //tri par popularité
        document.location.href = '/triche/Website/html/reservation.html?id=' + popularity[i].id;
    } else if(document.getElementById('tri').value== '4'){
        document.location.href = '/triche/Website/html/reservation.html?id=' + zone[zoneid].zoneg[i].id;
    } else if(document.getElementById('tri').value==''){ //tri par recherche dans la bar
        for (k of prixcroi){
            if (capitalizeFirstLetter(document.getElementById('headersearch').value) == k.name){
                document.location.href='/triche/Website/html/reservation.html?id='+k.id;
            }
        }
    }
}

function delimg(i) {
    ville[i].style.display = 'none';
    fadeimginfo.style.display = 'none';
    ghostimginfo.style.display = 'none';
}
