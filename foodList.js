function restaurant(Name, Address,llat,llong) {
    this.name = Name;
    this.address = Address;
    this.llat = llat;
    this.llong = llong;
}

var geocoder;
var map;
var markers = [];

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
	showRestaurant();
}
var restaurantList = [
	new restaurant("Panda Gourmet", "2700 New York Avenue Northeast, Washington, DC 20002", 38.917961, -76.970644),
	new restaurant("Brooklyn Bagel Bakery", "2055 Wilson Blvd, Arlington, VA 22201", 38.891883, -77.084335),
	new restaurant("Honey Pig", "7220 Columbia Pike, Annandale, VA 22003", 38.831112, -77.194603),
	new restaurant("China Express", "3303 Lee Highway, Arlington, VA 22207",38.895999, -77.101135),
	new restaurant("Hot&Juicy CrawFish", "2651 Connecticut Avenue Northwest, Washington, DC 20008",38.924281, -77.051951),
	new restaurant("Hongkong Place", "6387 Seven Corners Center, Falls Church, VA 22044", 38.866463, -77.150866),
	new restaurant("KOGIYA Korean BBQ", "4220-A Annandale Rd, Annandale, VA 22003", 38.831904, -77.196995),
	new restaurant("Sakuramen Ramen Bar", "2441 18th Street Northwest, Washington, DC 20009",38.921549, -77.042327),
	new restaurant("I-Thai Restaurant & Sushi Bar", "3003 M St NW, Washington, DC 20007",38.905218, -77.059209),
	new restaurant("El Pollo Rico", "932 North Kenmore Street, Arlington, VA 22201",38.883540, -77.100004),
	new restaurant("Nak Won Restaurant", "7317 Little River Turnpike, Annandale, VA 22003",38.830513, -77.197507),
	new restaurant("Superbowl Noodle House", "785 Rockville Pike suite G, Rockville, MD 20852",39.077878, -77.140578),
	new restaurant("Big Wang Cuisine", "16051 Frederick Rd, Derwood, MD 20855",39.115608, -77.166198),
	new restaurant("Uncle Liu's Hot Pot", "2974 Gallows Road, Falls Church, VA 22042",38.869313, -77.227470),
	new restaurant("China Garden", "1100 Wilson Boulevard, Rosslyn, VA 22209",38.894252, -77.069436),
	new restaurant("TNR Cafe","2049 Wilson Boulevard, Arlington, VA 22201",38.891548, -77.083947),
	new restaurant("Red Hot & Blue", "1600 Wilson Boulevard, Arlington, VA 22209", 38.894216, -77.077059),
	new restaurant("Pho 75", "1721 Wilson Boulevard, Arlington, VA 22209",38.893735, -77.078514),
	new restaurant("BeanGood! The Coffee Pub", "1737 Wilson Boulevard, Arlington, VA 22209",38.893594, -77.078845),
	new restaurant("Rhodeside Grill", "1836 Wilson Boulevard, Arlington, VA 22201",38.893049, -77.080129),
	new restaurant("Brooklyn Bagel Bakery", "2055 Wilson Boulevard, Arlington, VA 22201",38.891526, -77.084021),
	new restaurant("Afghan Kabob House", "2045 Wilson Boulevard, Arlington, VA 22201",38.891612, -77.083768),
	new restaurant("Summers Restaurant", "1520 North Courthouse Road, Arlington, VA 22201",38.891278, -77.084153),
	new restaurant("Mala Tang", "3434 Washington Boulevard, Arlington, VA 22201",38.885849, -77.101354),
	new restaurant("Chipotle Mexican Grill", "1735 North Lynn Street, Arlington, VA 22209",38.894900, -77.070598),
	new restaurant("Burger 7", "2515 Lee Highway, Arlington, VA 22201",38.894729, -77.090634),
	new restaurant("Wendy's", "2038 Wilson Boulevard, Arlington, VA 22019",38.891707, -77.083500),
	new restaurant("Ben's Chili Bowl", "1725 Wilson Boulevard, Arlington, VA 22209",38.893700, -77.078597),
	new restaurant("Starbucks", "3125 Lee Highway, Arlington, VA 22201",38.895626, -77.096829),
	new restaurant("Starbucks", "1501 17th Street North, Arlington, VA 22209",38.893813, -77.073733),
	new restaurant("Starbuck", "1735 North Lynn Street #20, Arlington, VA 22209",38.894900, -77.070598),
	new restaurant("Choupi", "1218 19th St N, Arlington, VA 22209",38.896786, -77.070743),
	new restaurant("Panera Bread", "1700 North Moore Street, Arlington, VA 22209",38.894770, -77.071299),
	new restaurant("J's Cookies", "1700 North Moore Street, Arlington, VA 22209",38.894770, -77.071299),
	new restaurant("Roti Mediteranean Grill", "1501 Wilson Blvd, Arlington, VA 22209",38.894499, -77.073857),
	new restaurant("Domino's Pizza", "1555 Wilson Boulevard, Arlington, VA 22209", 38.894817, -77.076065),
	new restaurant("Good Stuff Eatery", "3291 M Street Northwest, Washington, DC 20007",38.905122, -77.065445),
	new restaurant("Moby Dick's House of Kabob", "1070 31st Street Northwest, Washington, DC 20007",38.905003, -77.061181),
	new restaurant("Au Bon Pain", "2000 Pennsylvania Ave NW #16D, Washington, DC 20006",38.900705, -77.044900),
	new restaurant("Chipotle Mexican Grill", "2000 Pennsylvania Avenue Northwest #15, Washington, DC 20006",38.900290, -77.045543),
	new restaurant("The Perfect Pita", "2000 Pennsylvania Avenue Northwest, Washington, DC 20002",38.900705, -77.044900),
	new restaurant("Starbucks", "2130 H Street Northwest, Washington, DC 20052",38.899580, -77.047348),
	new restaurant("J-Street", "800 21st Street Northwest, Washington, DC 20052",38.899577, -77.046653),
	new restaurant("Ivory Tower", "616 23rd St NW, Washington, DC 20052",38.897516, -77.050136),
	new restaurant("Subway", "1959 E Street Northwest, Washington, DC 20052",38.896199, -77.044571),
	new restaurant("Starbucks", "1957 E Street Northwest, Washington, DC 20006", 38.896219, -77.043957),
	new restaurant("Cafe Aria", "1917 F Street Northwest, Washington, DC 20006",38.897355, -77.043703),
	new restaurant("Bobby's Burger Palace", "2121 K Street Northwest, Washington, DC 20037",38.902526, -77.048826),
	new restaurant("Ray's", "1650 Wilson Boulevard, Arlington, VA 22209",38.894057, -77.077316)
];
	
function codeAddress(number,marker) {
    geocoder.geocode( { 'address': restaurantList[number].address}, function(results, status) {
    	if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
        	map.setZoom(18);
        	var infowindow = new google.maps.InfoWindow({
				content: '<div class="infoStoreName">'+restaurantList[number].name+'</div>'
			});
			infowindow.open(map,marker);
			console.log(infowindow)
			}
      	else {
        	alert("Geocode was not successful for the following reason: " + status);
      	}
    });
  }
  
function showRestaurant() {
	for(var i=0;i<restaurantList.length;i++){
		(function(index){
				var loc = new google.maps.LatLng(restaurantList[index].llat,restaurantList[index].llong)
				addMarker(loc);
				addRow(i);
		})(i);
	};
	var markerCluster = new MarkerClusterer(map, markers);
}  

function addMarker(position) {
  markers.push(new google.maps.Marker({
    position: position,
    map: map
  }));
}

function addRow(num) {
    var div = document.createElement('div');
    div.className = 'storeName';
    div.innerHTML = restaurantList[num].name;
    div.setAttribute('class', 'storeName');
    div.onclick = (function(index){return function () {
    	codeAddress(index, markers[index]);
    	}
    })(num);
	document.getElementById('toggle-view').appendChild(div);
}


google.maps.event.addDomListener(window, 'load', initialize);
