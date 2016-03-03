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

////////////////GESTION DU LOADER ////////////////////////////
//$('.loader').css('background', '#FECE56'); 
$(window).load(function() {
	$(".loader").delay('500').fadeOut("1000");
})

//initialise la map sur la page "Le festival"
function initMap() {
	var myLatLng = {lat: 43.6211655, lng: 2.2614};
	map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  styles: [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":60},{"lightness":50},{"gamma":0.5},{"hue":"#6698D0"}]}],
	  zoom: 17,
	  scrollwheel: false,
	  draggable : false
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
				//ats = JSON.parse(json);
				ats = JSON.parse(JSON.stringify(json));
				getAt(0);
			});
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

var progExAt = ""; //var qui prend l'ancien onglet actif

//récupère les activités à l'heure choisie au clic
function getAtHour(e){
	e.preventDefault();

	if(progExAt !== ""){
		progExAt.style.background = "#EA563E";
	}
	progExAt = e.target;

	e.target.style.background = "#F36D52";

	var here = document.getElementById('items'); //put elements here
	here.innerHTML = "";

	
	var hourTo = e.target.id.slice(2,4);

	var lis = "";
	for(var i = 0; i < ats.length; i++){
		//si l'atelier est marqué pour au moins cette heure, on définit le li
		var re = new RegExp('^' + hourTo);
		ats[i].hours.forEach(function(hour){
			if(hour.match(re)){
				li = '<li class="row">'
					+ '<div class="col-md-9">'
					+ '<h4>'+ hour + ' \\\\ ' +ats[i].name + '</h4><p>' +ats[i].description+'</p>'
					+ '</div><div class="col-md-3">';

				if(ats[i].sub){
					li = li + '<p class="subli"> Pour participer à l\'atelier, vous devez vous inscrire.</p>'
				}

				li = li + '</div></li>';

				//on ajoute le nouveau li à la liste des lis à afficher
				lis = lis + li;	
			}
		});
	}
	//console.log(lis);
	here.innerHTML = lis;
}

//récupère les activités à l'heure choisie
function getAt(i){
	progExAt = ong[i];

	ong[i].style.background = "#F36D52";

	var here = document.getElementById('items'); //put elements here
	here.innerHTML = "";
	
	var hourTo = ong[i].id.slice(2,4);

	var lis = "";
	for(var i = 0; i < ats.length; i++){
		//si l'atelier est marqué pour au moins cette heure, on définit le li
		var re = new RegExp('^' + hourTo);

		ats[i].hours.forEach(function(hour){

			if(hour.match(re)){

				li = '<li class="row">'
					+ '<div class="col-md-9">'
					+ '<h4>'+ hour + ' \\\\ ' +ats[i].name + '</h4><p>' +ats[i].description+'</p>'
					+ '</div><div class="col-md-3">';

				if(ats[i].sub){
					li = li + '<p class="subli"> Pour participer à l\'atelier, vous devez vous inscrire.</p>'
				}

				li = li + '</div></li>';

				//on ajoute le nouveau li à la liste des lis à afficher
				lis = lis + li;	
			}
		});
	}
	//console.log(lis);
	here.innerHTML = lis;
}