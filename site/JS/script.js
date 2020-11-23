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

class destination{
    constructor(nom,prix,image,lien){
        this.nom= nom;
        this.prix=prix;
        this.image=image;
        this.lien=lien;
    }

}

function listHotels(hotels){
    var paris= new destination(hotels[0].ville, hotels[0].prixAdulte ,'../images/paris.jpg',"../html/formulaire.html");
    var londre= new destination(hotels[1].ville, hotels[1].prixAdulte ,"../images/londres.jpg","../html/formulaire.html");
    var newYork= new destination(hotels[2].ville, hotels[2].prixAdulte ,"../images/newyork.jpg","../html/formulaire.html");
    var venise= new destination(hotels[3].ville, hotels[3].prixAdulte ,"../images/venise.jpg","../html/formulaire.html");
    var listeHotels=[paris,londre,newYork,venise]


    /*let template = document.querySelector("#listehotels");
    for (const hot of Hotels){
        let clone = document.importNode(template.newContent, true);
        let image= new Image()
        newContent=clone.firstElementChild.innerHTML.replace(/{{ville}}/g,hot.nom);
        clone.firstElementChild.innerHTML = newContent;
        document.body.appendChild(clone);
    }*/
    const aff = document.getElementById("listehotels")
    for (let hotel of listeHotels){
        let autreDest= document.createElement("a");
        autreDest.href=hotel.lien;
        autreDest.textContent=hotel.nom;
        aff.appendChild(autreDest);
    };

}

Recup();