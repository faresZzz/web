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
let pitidej = new URLSearchParams(window.location.search).get('pitidej');
let nbra = new URLSearchParams(window.location.search).get('nbr_adultes');
let nbre = new URLSearchParams(window.location.search).get('nbr_enfants');
let duree = new URLSearchParams(window.location.search).get('dureeSejour');
let newspan = document.createElement('span');

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
function afficherecap(){
    let resaslist = '';
    for(let k =1;k<=localStorage.getItem('nbr_resa');k++){
        resaslist+='<div id="resa'+k+'" class="reservations"><img  onmouseover="infosimg('+(k-1)+')" src="'+prixcroi[localStorage.getItem('resa'+k+'id')].link+'"/><span class="ville">'+prixcroi[localStorage.getItem('resa'+k+'id')].name+'</span></div>\n'
    }
    document.getElementById('resas').innerHTML=resaslist;
}
afficherecap();
function infosimg(i) { //On affiche la banière d'informations sur le voyage au survol de l'image
    let eedic = 16 + 30.1 * Math.trunc(i / 3); //Ecart entre 2 images
    let ptbhc = 85 + 3 * Math.trunc(i / 3); //petit trait blanc horizontal
    let ptbvc = 2+4*(i % 3); //petit trait blanc vertial
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
function setCookies(idsejour,isdej,adultes,enfants,duree){
    document.cookie='resa'+localStorage.getItem('nbr_resa')+'id='+idsejour;
    document.cookie='isdej'+localStorage.getItem('nbr_resa')+'='+isdej;
    document.cookie='adultes'+localStorage.getItem('nbr_resa')+'='+adultes;
    document.cookie='enfants'+localStorage.getItem('nbr_resa')+'='+enfants;
    document.cookie='duree'+localStorage.getItem('nbr_resa')+'='+duree;
}
setCookies(sejour_id,pitidej,nbra,nbre,duree);
function readCookie(name) {
	let nameEQ = name + "=";
	let ca = document.cookie.split(';');
	for(let i=0;i < ca.length;i++) {
		let c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {
	document.cookie=name+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
}
function resa(i){

}
function delimg(i) {
    ville[i].style.display = 'none';
    fadeimginfo.style.display = 'none';
    ghostimginfo.style.display = 'none';
}