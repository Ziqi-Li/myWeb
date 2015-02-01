function restaurant(Name, Address) {
    this.name = Name;
    this.address = Address;
}

var geocoder;
var map;

function initialize() {
	geocoder = new google.maps.Geocoder();
	var styles = [{
	  stylers: [
		{ hue: "#00a1ff" },
		{ gamma: 0.43  }
	  ]}];

	var mapOptions = {
		center: new google.maps.LatLng(38.8951, -77.0367),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
	map = new google.maps.Map(document.getElementById('map-canvas'),
	  mapOptions);
	map.setOptions({styles: styles});
}
var restaurantList = [
	new restaurant("Honey Pig", "7220 Columbia Pike, Annandale, VA 22003"),
	new restaurant("China Express", "3303 Lee Highway, Arlington, VA 22207"),
	new restaurant("Hot&Juicy CrawFish", "2651 Connecticut Avenue Northwest, Washington, DC 20008"),
	new restaurant("Hongkong Place", "Seven Corners Shopping Center, 6387 Seven Corners Center, Falls Church, VA 22044")
	]
	
function codeAddress(number) {
    geocoder.geocode( { 'address': restaurantList[number].address}, function(results, status) {
    	if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var infowindow = new google.maps.InfoWindow({
				content: restaurantList[number].name
	    	});
	    	var marker = new google.maps.Marker({
            	map: map,
            	position: results[0].geometry.location,
            	animation: google.maps.Animation.DROP
        	});	    	
        	map.setZoom(12);
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
      	} 
      	else {
        	alert("Geocode was not successful for the following reason: " + status);
      	}
    });
  }

google.maps.event.addDomListener(window, 'load', initialize);
