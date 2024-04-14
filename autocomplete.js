window.initialize = function() {
    var input = document.getElementById('cityInput');
    new google.maps.places.Autocomplete(input);
}