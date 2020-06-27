function initMap() {
    var location = { lat: 50.134829, lng: 22.762446 };
    var map = new google.maps.Map(
        document.getElementsByClassName('map'), { zoom: 4, center: location });
    var marker = new google.maps.Marker({ position: location, map: map });
}