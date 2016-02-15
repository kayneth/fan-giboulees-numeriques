<?php
	include('header.php');
	include('nav.php');

?>
	<section id="content">
		<div id="contact" class="container">
			<div class="row">
				<div class="col-md-5 col-md-offset-1 contact-header">
					<h2>Contact</h2>
					<p>Vous avez besoin de nous contacter ? Une queston à poser ? Ecrivez nous.</p>
				</div>
				<div class="col-md-1 img-container"><img src="assets/images/FLAT_Soleil.png"></div>
			</div>
			<div class="row form-container">
				<form action="">
					<div class="col-md-6">
						<label for="name">Nom ou Raison Sociale</label>
						<input type="text" id="name">
						<label for="mail">Email</label>
						<input type="text" id="mail">
						<label for="object">Objet</label>
						<input type="text" id="object">
					</div>
					<div class="col-md-6">
						<label for="msg">Message</label><textarea name="msg" id="msg" cols="30" rows="10"></textarea>
					</div>
					<div class="col-md-12">
						<input type="submit" value="Envoyer">
					</div>	
				</form>
			</div>
		</div>
	</section>

	<script type="text/javascript">
		var active = "contact";
	</script>
<?php
	include('footer.php');
?>