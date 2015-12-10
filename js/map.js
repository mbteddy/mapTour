var tour1 = {name: "place", lat: 29.561618, lng: -98.2269553}
var tour2 = {name: "place", lat: 40.8948212, lng: -74.4329314}
var tour3 = {name: "place", lat: 39.7444973, lng: -84.5321727}
var tour4 = {name: "place", lat: 34.183695, lng: -97.0879429}
var tour5 = {name: "place", lat:27.0998708, lng: -82.4544132}

var fakeData = [tour1, tour2, tour3, tour4, tour5];

var drawMap = function() {
  var map = L.map('container').setView([35, -94], 4);
  var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
  layer.addTo(map)
  customBuild(fakeData, map)
}

var customBuild = function(data, map) {
	for (var i=0; i<fakeData.length; i++) {
		console.log(data[i])
	    var lat = data[i]["lat"];
	    console.log(lat)
	    var lng = data[i]["lng"];
	    console.log(lng)
	    var circ = L.circleMarker([lat, lng], {
	      radius: 5,
	    });
	    circ.bindPopup(data[i]["name"]);
	    circ.setStyle({color: 'blue', fillColor: 'blue'});
	    circ.addTo(map);
	}
}