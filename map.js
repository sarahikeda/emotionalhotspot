

  // This example requires the Visualization library. Include the libraries=visualization
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

  var map, heatmap;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      // Manchester coordinates
      center: {lat: 53.469512, lng: -2.235535},
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

  // Heatmap data: 500 Points
  function getPoints() {
    return [
      new google.maps.LatLng(53.52, -2.5),
      new google.maps.LatLng(53.52, -2.24),
      new google.maps.LatLng(53.53, -2.25),
      new google.maps.LatLng(53.54, -2.6),
      new google.maps.LatLng(53.542, -2.4),
      new google.maps.LatLng(53.544, -2.67),
      new google.maps.LatLng(53.55, -2.68),
      new google.maps.LatLng(53.56, -2.689),
      new google.maps.LatLng(53.57, -2.69),
      new google.maps.LatLng(53.2, -2.7),
      new google.maps.LatLng(53.58, -2.45),
      new google.maps.LatLng(53.7, -2.5),
      new google.maps.LatLng(53.8, -2.9),
      new google.maps.LatLng(52.790859, -2.402808),
      new google.maps.LatLng(52.790864, -2.402768),
      new google.maps.LatLng(52.790995, -2.402539),
      new google.maps.LatLng(52.791148, -2.402172),
      new google.maps.LatLng(52.791385, -2.401312),
      new google.maps.LatLng(52.791405, -2.400776),
      new google.maps.LatLng(52.791288, -2.400528),
      new google.maps.LatLng(52.791113, -2.400441)
    ];
  }
