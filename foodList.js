function initialize() {
  var mapOptions = {
			  center: { lat: 38.8951, lng: -77.0367},
			  zoom: 12
			};
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var list = document.getElementById('toggle-view').getElementsByTagName('li')[0].textContent   
  google.maps.event.addDomListener(list,'click',function() {
  	map.setZoom(9);
  }); 

}

google.maps.event.addDomListener(window, 'load', initialize);
