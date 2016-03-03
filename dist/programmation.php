<?php
	include('header.php');
	include('nav.php');

?>
	<section id="content">
	<!-- LOADER  -->
		<div class="loader">Chargement...</div>

		
		<div id="progra" class="container">
			<div class="row">
				<h2 class="col-md-11">Programme</h2>
			</div>
			<div id="progra-contain-glob">
				<ul class="row" id="hours">
					<li class="col-xs-1 onglets" id="at10">10H</li>
					<li class="col-xs-1 onglets" id="at11">11H</li>
					<li class="col-xs-1 onglets" id="at12">12H</li>
					<li class="col-xs-1 onglets" id="at13">13H</li>
					<li class="col-xs-1 onglets" id="at14">14H</li>
					<li class="col-xs-1 onglets" id="at15">15H</li>
					<li class="col-xs-1 onglets" id="at16">16H</li>
					<li class="col-xs-1 onglets" id="at17">17H</li>
				</ul>
				<ul id="items">
				</ul>
				<div class="row">
					<h3>Inscriptions</h3>
				</div>
			</div>
		</div>
	</section>

	<script type="text/javascript">
		var active = "programme";
	</script>

<?php
	include('footer.php');
?>