function initMap() {
    // Crie um objeto de mapa e especifique o elemento DOM para exibi-lo.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -23.5505, lng: -46.6333}, // Latitude e longitude do centro do mapa (São Paulo, por exemplo)
        zoom: 8 // Nível de zoom
    });
}