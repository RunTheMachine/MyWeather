$(document).ready(function(){
    
    // Obtenir la position
    navigator.geolocation.getCurrentPosition(success, error);

    
    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
        
    }
    
    
    function error(){
        console.log('refus position par utilisateur, Paris par défaut');
        var lat = 48.866667;
        var long = 2.333333;
        weather(lat, long);
    }
    
    
    function weather(lat, long){
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
      $.getJSON(URL, function(data){
         console.log(data);
      updateDOM(data);   
     });  
        
    }

    
    function updateDOM(data) {
     
        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var tempmin = data.main.temp_min;
        var tempmax = data.main.temp_max;
        
        $('#city').html(city);
        $('#temp').prepend(temp);
        $('#tempmin').prepend(tempmin);
        $('#tempmax').prepend(tempmax);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
        
    }
    
    weather();
    
});


