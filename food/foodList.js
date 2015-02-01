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
	new restaurant("KOGIYA Korean BBQ", "4220-A Annandale Rd, Annandale, VA 22003")
	new restaurant("Sakuramen Ramen Bar", "2441 18th Street Northwest, Washington, DC 20009")
	new restaurant("I-Thai Restaurant & Sushi Bar", "3003 M St NW, Washington, DC 20007")
	new restaurant("El Pollo Rico", "932 North Kenmore Street, Arlington, VA 22201")
	new restaurant("Nak Won Restaurant", "7317 Little River Turnpike, Annandale, VA 22003")
	new restaurant("Superbowl Noodle House", "785 Rockville Pike suite G, Rockville, MD 20852")
	new restaurant("Big Wang Cuisine", "16051 Frederick Rd, Derwood, MD 20855")
	new restaurant("Uncle Liu's Hot Pot", "2974 Gallows Road, Falls Church, VA 22042")
	new restaurant("China Garden", "1100 Wilson Boulevard, Rosslyn, VA 22209")
	new restaurant("TNR Cafe","2049 Wilson Boulevard, Arlington, VA 22201")
	new restaurant("Red Hot & Blue", "1600 Wilson Boulevard, Arlington, VA 22209")
	new restaurant("Pho 75", "1721 Wilson Boulevard, Arlington, VA 22209")
	new restaurant("BeanGood! The Coffee Pub", "1737 Wilson Boulevard, Arlington, VA 22209")
	new restaurant("Rhodeside Grill", "1836 Wilson Boulevard, Arlington, VA 22201")
	new restaurant("Brooklyn Bagel Bakery", "2055 Wilson Boulevard, Arlington, VA 22201")
	new restaurant("Afghan Kabob House", "2045 Wilson Boulevard, Arlington, VA 22201")
	new restaurant("Summers Restaurant", "1520 North Courthouse Road, Arlington, VA 22201")
	new restaurant("Mala Tang", "3434 Washington Boulevard, Arlington, VA 22201")
	new restaurant("Chipotle Mexican Grill", "1735 North Lynn Street, Arlington, VA 22209")
	new restaurant("Burger 7", "2515 Lee Highway, Arlington, VA 222019")
	new restaurant("Wendy's", "2038 Wilson Boulevard, Arlington, VA 222019")
	new restaurant("Ben's Chili Bowl", "1725 Wilson Boulevard, Arlington, VA 22209")
	new restaurant("Starbucks", "3125 Lee Highway, Arlington, VA 22201")
	new restaurant("Starbucks", "1501 17th Street North, Arlington, VA 22209")
	new restaurant("Starbuck", "1735 North Lynn Street #20, Arlington, VA 22209")
	new restaurant("Choupi", "1218 19th St N, Arlington, VA 22209")
	new restaurant("Panera Bread", "1700 North Moore Street, Arlington, VA 22209")
	new restaurant("J's Cookies", "1700 North Moore Street, Arlington, VA 22209")
	new restaurant("Roti Mediteranean Grill", "1501 1501 Wilson Blvd, Arlington, VA 22209")
	new restaurant("Domino's Pizza", "1555 Wilson Boulevard, Arlington, VA 22209")
	new restaurant("Good Stuff Eatery", "3291 M Street Northwest, Washington, DC 20007")
	new restaurant("Moby Dick's House of Kabob", "1070 31st Street Northwest, Washington, DC 20007")
	new restaurant("Au Bon Pain", "2000 Pennsylvania Ave NW #16D, Washington, DC 20006")
	new restaurant("Chipotle Mexican Grill", "Northwest #15, Washington, DC 20006")
	new restaurant("The Perfect Pita", "2000 Pennsylvania Avenue Northwest, Washington, DC 20002")
	new restaurant("Starbucks", "2130 H Street Northwest, Washington, DC 20052")
	new restaurant("J-Street", "800 21st Street Northwest, Washington, DC 20052")
	new restaurant("Ivory Tower", "616 23rd St NW, Washington, DC 20052")
	new restaurant("Subway", "1959 E Street Northwest, Washington, DC 20052")
	new restaurant("Starbucks", "1957 E Street Northwest, Washington, DC 20006")
	new restaurant("Cafe Aria", "1917 F Street Northwest, Washington, DC 20006")
	new restaurant("Bobby's Burger Palace", "2121 K Street Northwest, Washington, DC 20037")
	new restaurant("Ray's", "1650 Wilson Boulevard, Arlington, VA 22209")
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
