var fan = new Date(); 
fan = new Date(fan.getFullYear(), 3 - 1, 11, 10);

$('#countdown').countdown({until: fan, 
    layout: '{dn} Jours, {hn} heures,  {mn} {ml}, et {sn} secondes!'});

function initMap() {
	var myLatLng = {lat: 43.6211655, lng: 2.2614};
	map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  zoom: 17
	});
	var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map,
	  title: 'IUT PAUL SABATIER, CASTRES'
	});
}

initMap();