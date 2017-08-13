// Get some help from: https://wiki.openstreetmap.org/wiki/FR:Nominatim

function initGeolocation()
{
    if( navigator.geolocation )
    {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition( success, fail );
    }
    else{
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position)
{
    document.getElementById('long').value = position.coords.longitude;
    document.getElementById('lat').value = position.coords.latitude
    console.log("latitude: " + lat + ", longitute: " + long );
}

function fail()
{
        // Could not obtain location
        // http://nominatim.openstreetmap.org/reverse?format=xml&lat=48.849919799999995&lon=2.6370411&zoom=18&addressdetails=1
}