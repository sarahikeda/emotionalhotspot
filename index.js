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
    zoom: 12,
         styles: [
           {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
           {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
           {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
           {
             featureType: 'administrative.locality',
             elementType: 'labels.text.fill',
             stylers: [{color: '#d59563'}]
           },
           {
             featureType: 'poi',
             elementType: 'labels.text.fill',
             stylers: [{color: '#d59563'}]
           },
           {
             featureType: 'poi.park',
             elementType: 'geometry',
             stylers: [{color: '#263c3f'}]
           },
           {
             featureType: 'poi.park',
             elementType: 'labels.text.fill',
             stylers: [{color: '#6b9a76'}]
           },
           {
             featureType: 'road',
             elementType: 'geometry',
             stylers: [{color: '#38414e'}]
           },
           {
             featureType: 'road',
             elementType: 'geometry.stroke',
             stylers: [{color: '#212a37'}]
           },
           {
             featureType: 'road',
             elementType: 'labels.text.fill',
             stylers: [{color: '#9ca5b3'}]
           },
           {
             featureType: 'road.highway',
             elementType: 'geometry',
             stylers: [{color: '#746855'}]
           },
           {
             featureType: 'road.highway',
             elementType: 'geometry.stroke',
             stylers: [{color: '#1f2835'}]
           },
           {
             featureType: 'road.highway',
             elementType: 'labels.text.fill',
             stylers: [{color: '#f3d19c'}]
           },
           {
             featureType: 'transit',
             elementType: 'geometry',
             stylers: [{color: '#2f3948'}]
           },
           {
             featureType: 'transit.station',
             elementType: 'labels.text.fill',
             stylers: [{color: '#d59563'}]
           },
           {
             featureType: 'water',
             elementType: 'geometry',
             stylers: [{color: '#17263c'}]
           },
           {
             featureType: 'water',
             elementType: 'labels.text.fill',
             stylers: [{color: '#515c6d'}]
           },
           {
             featureType: 'water',
             elementType: 'labels.text.stroke',
             stylers: [{color: '#17263c'}]
           }
         ]
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

function createIcon(){
  return {
      path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
      fillOpacity: 0.8,
      scale: .1,
      strokeWeight: 6
    };
}
function makeIcons(){
  var chosenEmotion = selectEmotion()
  var icon = createIcon()
  if (chosenEmotion == 'happiness') {
      icon.fillColor = '#ffeb3b'
      icon.strokeColor = '#ffeb3b'
    } else if (chosenEmotion === "anger") {
      icon.fillColor = '#ff0000'
      icon.strokeColor = '#ff0000'
    } else if (chosenEmotion == "sadness") {
      icon.fillColor = '#b900ff'
      icon.strokeColor = '#b900ff'
    } else if (chosenEmotion == "disgust") {
      icon.fillColor = '#12ff28'
      icon.strokeColor = '#12ff28'
    } else if (chosenEmotion == "surprise") {
      icon.fillColor = '#ff9d00'
      icon.strokeColor = '#ff9d00'
    } else if (chosenEmotion == "fear") {
      icon.fillColor = '#fd04cf'
      icon.strokeColor = '#fd04cf'
    } else {
      icon.fillColor = '#9c27b0'
      icon.strokeColor = '#9c27b0'
    }
    return icon
  }
