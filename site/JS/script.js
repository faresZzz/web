var hotels={}
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
         
        hotels= json;
        console.log(hotels); 
    })  
}

class destination{
    constructor(nom,prix,image){
        this.nom= nom;
        this.prix=prix;
        this.image=image;
    }

}
console.log(hotels);

//let paris= new destination(data[0]. , data[0].prixAdulte ,"../images/paris.jpg");
//console.log(paris);