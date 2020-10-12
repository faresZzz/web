const urlParams = new URLSearchParams(window.location.search);

var np=urlParams.get("nom");
var pr=urlParams.get("prenom");
var infos=[np,pr];
function unAjout(){
                    
    
    for (let x of infos){ 
        var node = document.createElement("LI"); 
        var textnode = document.createTextNode(x);         
        node.appendChild(textnode);                              
        document.getElementById("myList").appendChild(node);    
    }
}


