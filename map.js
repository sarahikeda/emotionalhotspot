var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    // Manchester coordinates
    center: {lat: 53.479159, lng: -2.244105},
    zoom: 14,
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
        stylers: [{visiblity: '#off'}]
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
        stylers: [{visibility: ''}]
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

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
  getInput()
}

function getInput(){
  var input = document.getElementById('pac-input');
  input.addEventListener("keypress", function(){
    autoFill(input)
  })
}

function autoFill(input){
  var searchBox = new google.maps.places.SearchBox(input);
  // tailor results to current map location
  searchBox.setBounds(map.getBounds());
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
    //     console.log("Returned place contains no geometry");
        return;
    }

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
      map.fitBounds(bounds);

    var coordinates = getCoordinates(place)
    initMap();
  })
})}

function getCoordinates(place) {
  var latitude = place.geometry.location.lat()
  var longitude = place.geometry.location.lng()
  var newCoordinate = new google.maps.LatLng(latitude,longitude)
  // map.data.add(newCoordinate)
  // console.log(map.data)
  // debugger;
  getPoints(newCoordinate)
}

function addToMap(newCoordinate){
  // getPoints(newCoordinate)
  // heatmap.getMap()
}
function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
  }

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

function selectEmotion() {
  var selectedEmotion = document.getElementById('emotionDropdown').value
  return selectedEmotion
};

function getPoints(newCoordinate = null) {
  debugger;
  var mapCoordinates =  [
    new google.maps.LatLng(53.482126, -2.233910),
    new google.maps.LatLng(53.482126, -2.233910),
    new google.maps.LatLng(53.482126, -2.233910),
    new google.maps.LatLng(53.482126, -2.233910),
    new google.maps.LatLng(53.482126, -2.233910),
    new google.maps.LatLng(53.482126, -2.233910),
    new google.maps.LatLng(53.472235, -2.299887),
    new google.maps.LatLng(53.463059, -2.291340) ,
    new google.maps.LatLng(53.488289, -2.244002),
    new google.maps.LatLng(53.478285, -2.247938),
    new google.maps.LatLng(53.478285, -2.247938),
    new google.maps.LatLng(53.478060, -2.244666),
    new google.maps.LatLng(53.473477, -2.246717),
    new google.maps.LatLng(53.482329, -2.233733),
    new google.maps.LatLng(53.478060,-2.244666),
    new google.maps.LatLng(53.480980, -2.237020),
    new google.maps.LatLng(53.481357, -2.245774),
    new google.maps.LatLng(53.482581, -2.235445),
    new google.maps.LatLng(53.443939, -2.272967),

  ];

  mapCoordinates.push(newCoordinate)
  console.log(newCoordinate)
  console.log(mapCoordinates)
  debugger;
  return mapCoordinates
}
