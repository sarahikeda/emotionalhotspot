var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    // Manchester coordinates
    center: {lat: 53.479159, lng: -2.244105},
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
          },
    styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 20
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
  getInput(getPoints())
}

function getInput(mapCoordinates){
  var input = document.getElementById('pac-input');
  input.addEventListener("keypress", function(){
    var searchBox = new google.maps.places.SearchBox(input);
    autoFill(input, mapCoordinates)
  })
}

function autoFill(input, mapCoordinates){
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
      mapCoordinates.push(place.geometry.location)
      debugger;
      map.fitBounds(bounds);

    initMap();
  })
})}

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

function getPoints() {
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
    new google.maps.LatLng(53.482595, -2.233750),
    new google.maps.LatLng(53.491438, -2.238733),
    new google.maps.LatLng(53.481267, -2.231291),
    new google.maps.LatLng(53.477403, -2.230932),
    new google.maps.LatLng(53.479115, -2.249086),
    new google.maps.LatLng(53.462559, -2.291032),
    new google.maps.LatLng(53.481399, -2.238615)
  ];
  return mapCoordinates
}
