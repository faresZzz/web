function AfficherTemperature()
{
    let ville="Lyon";
    let appid="bfb725a2d2eb425c0443cbcdf5c91e8f";

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid="+appid+"&units=metric").then(function(reponse)
    {
        json=reponse.json();
        return json;    
    })
    .then(function(json)
    {
        document.getElementById("temp").innerHTML="La temperature à " +json["name"]+" est de "+json["main"]["temp"]+" °C"
    })
}