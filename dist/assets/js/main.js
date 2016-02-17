var ats;

//ajoute le compte à rebours du site
var fan = new Date(); 
fan = new Date(fan.getFullYear(), 3 - 1, 11, 10);
$('#countdown').countdown({until: fan, 
    layout: '{dn} Jours, {hn} heures,  {mn} {ml}, et {sn} secondes!'});

//recup les onglets de la page prog et leur ajoute un listener au clic 
var ong = document.getElementsByClassName('onglets');
for(var i = 0; i < ong.length; i++){
	ong[i].addEventListener('click', getAtHour);
	ong[i].style.cursor = "pointer";
}

//initialise la map sur la page "Le festival"
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

//controllers
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
			$.get('assets/js/prog.json', function(json){
				ats = json;
			})
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
}setActive(active);

function getAtHour(e){
	e.preventDefault();

	var here = document.getElementById('items'); //put elements here
	here.innerHTML = "";

	
	var hourTo = parseInt(e.target.id.slice(2,4));

	var li = "";
	for(var i = 0; i < ats.length; i++){
		if(ats[i].hours.indexOf(hourTo) != -1){
			li = li + '<li class="col-md-12">'+ats[i].description+'</li>';
		}
	}
	here.innerHTML = li;
}