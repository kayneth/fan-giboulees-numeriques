<?php
	include('header.php');
	include('nav.php');

?>
	<section id="content">
		<div id="progra" class="container">
			<div class="row">
				<h2 class="col-md-11">Programme</h2>
			</div>
			<div id="progra-contain-glob">
				<div class="row">
					<h4>Inscription</h4>
					<p>Vous pouvez choisir plusieurs ateliers sur la journée. Veillez cependant à choisir des crénaux dont les horaires ne se chevauchent pas. Vous ne pouvez vous inscrire deux fois à un même atelier dans la journée. Nous comptons sur votre présence si vous vous inscrivez, veuillez nous prévenir en cas de desistement ou d’empêchementà l’adresse fanmmi.castres@gmail.com.</p>
				</div>
				<form action="">
					<div class="row">
							<div class="col-md-8">
								<label for="name">Nom*</label>
								<input type="text" id="name" name="name">
								<label for="firstname">Prénom*</label>
								<input type="text" id="firstname" name="firstname">
								<label for="mail">Email*</label>
								<input type="mail" id="mail" name="mail">
							</div>
							<div class="col-md-4">
								<p>Inscription aux ateliers :</p>
							</div>
					</div>
					<div class="row">
						<input type="text" id="rappel" name="rappel"><label for="rappel">Je souhaite que l'on me rappel par mail quelques jours avant le festival</label>
					</div>
					<input type="submit"><input type="reset" value="Annuler">
				</form>
			</div>
		</div>
	</section>

	<script type="text/javascript">
		var active = "programme";
	</script>

<?php
	include('footer.php');
?>