var at10, at11, at12, at13, at14, at15, at16, at17;

var fan = new Date(); 
fan = new Date(fan.getFullYear(), 3 - 1, 11, 10);

$('#countdown').countdown({until: fan, 
    layout: '{dn} Jours, {hn} heures,  {mn} {ml}, et {sn} secondes!'});

function initMap() {
	var myLatLng = {lat: 43.6211655, lng: 2.2614};
	map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  zoom: 17,
	  scrollwheel: false
	});
	var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map,
	  title: 'IUT PAUL SABATIER, CASTRES'
	});
}

function setActive(act){
	switch(act){
		case "festival":
			document.getElementsByClassName('nav-festi')[0].parentNode.style.display = "none";
			document.getElementById('cover').src = "assets/images/Banniere_bleu.png";
			initMap();
		break;
		case "intervenants":
			document.getElementsByClassName('nav-intervenants')[0].parentNode.style.display = "none";
			document.getElementById('cover').src = "assets/images/Banniere_rouge.png";
		break;
		case "programme":
			document.getElementsByClassName('nav-progra')[0].parentNode.style.display = "none";
			document.getElementById('cover').src = "assets/images/Banniere_orange.png";
		break;
		case "contact":
			document.getElementsByClassName('nav-contact')[0].parentNode.style.display = "none";
			document.getElementById('cover').src = "assets/images/Banniere_vert.png";
		break;
		case "coulisses":
			document.getElementsByClassName('nav-coulisses')[0].parentNode.style.display = "none";
			document.getElementById('cover').src = "assets/images/Banniere_bleu_clair.png";
		break;
		default:
			document.getElementById('cover').src = "assets/images/Banniere_jaune.png";
		break;
	}
}
setActive(active);

function getAtHour(e){
	e.preventDefault();

	var here = document.getElementById('items'); //put elements here
	here.innerHTML = "";

	var tab = window[e.target.id];
	var li = "";
	for(var i = 0; i < tab.length; i++){
		li = li + '<li class="col-md-12">'+tab[i].description+'</li>';
	}
	here.innerHTML = li;
}

var ong = document.getElementsByClassName('onglets');
for(var i = 0; i < ong.length; i++){
	ong[i].addEventListener('click', getAtHour);
	ong[i].style.cursor = "pointer";
}

at10 = [
	{
		name  :"Atelier 1",
		description  :"Une description",
		sub : true
	},
	{
		name : "Atelier 1",
		description : "Une autre description",
		sub  :true
	},
	{
		name : "Atelier 1",
		description  :"Une description",
		sub  :false
	},
	{
		id : 1,
		name  :"Atelier 1",
		description : "Une dernière description",
		sub : false
	}
];