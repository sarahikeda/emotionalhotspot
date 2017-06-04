function selectEmotion() {
  var selectedEmotion = document.getElementById('emotionDropdown').value
  return selectedEmotion
  // console.log(chosenEmotion)
};
    // console.log(chosenEmotion)
function initAutocomplete(chosenEmotion) {
  var map = new google.maps.Map(document.getElementById('map'), {
    // Manchester coordinates
    center: {lat: 53.469512, lng: -2.235535},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // tailor results to current map location
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
// checks what emotion user chose, to customize marker
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      // Create a marker for each place.

      markers.push(new google.maps.Marker({
        map: map,
        title: place.name,
        icon: makeIcons(),
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function makeIcons(){
  var chosenEmotion = selectEmotion()
  console.log(chosenEmotion)
  var goldStar = {
      path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
      fillColor: 'yellow',
      fillOpacity: 0.8,
      scale: .2,
      strokeColor: 'gold',
      strokeWeight: 14
    };
  return goldStar
}
