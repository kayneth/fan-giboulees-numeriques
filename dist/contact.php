<?php
	include('header.php');
	include('nav.php');

	if(isset($_POST['object'])){
		$mail = 'fanmmi.castres@gmail.com'; // Déclaration de l'adresse de destination.
		if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui rencontrent des bogues.
		{
			$passage_ligne = "\r\n";
		}
		else
		{
			$passage_ligne = "\n";
		}
		//=====Déclaration des messages au format texte et au format HTML.
		$message_txt = "Le mail suivant est envoyé depuis le formulaire de contact de Giboulées-numeriques.fr : ". $passage_ligne . ''. $_POST['msg'].''. $passage_ligne.'Son email est '. $_POST['mail'] . ' !';
		$message_html = "<html><head></head><body><b>Le mail suivant est envoyé depuis le formulaire de contact de Giboulées-numeriques.fr.</b><br>". $_POST['msg']."<br>Son email est ". $_POST['mail'] .  "!</body></html>";
		//==========
		 
		//=====Création de la boundary
		$boundary = "-----=".md5(rand());
		//==========
		 
		//=====Définition du sujet.
		$sujet = $_POST['name']." a rempli le formulaire de contact de Giboulées Numeriques";
		//=========
		 
		//=====Création du header de l'e-mail.
		$header = "From: \"".$_POST['name']."\"<".$_POST['mail'].">".$passage_ligne;
		$header.= "Reply-to: \"".$_POST['name']."\" <".$_POST['mail'].">".$passage_ligne;
		$header.= "MIME-Version: 1.0".$passage_ligne;
		$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
		//==========
		 
		//=====Création du message.
		$message = $passage_ligne."--".$boundary.$passage_ligne;
		//=====Ajout du message au format texte.
		$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
		$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
		$message.= $passage_ligne.$message_txt.$passage_ligne;
		//==========
		$message.= $passage_ligne."--".$boundary.$passage_ligne;
		//=====Ajout du message au format HTML
		$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
		$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
		$message.= $passage_ligne.$message_html.$passage_ligne;
		//==========
		$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
		$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
		//==========
		 
		//=====Envoi de l'e-mail.
		mail($mail,$sujet,$message,$header);
		echo '<p style="text-align: center; margin: 50px; font-size: 30px;">Le mail a été envoyé ! :)</p>';
		//==========
			}
?>
	<section id="content">
	<!-- LOADER  -->
		<div class="loader">Chargement...</div>

		
		<div id="contact" class="container">
			<div class="row">
				<div class="col-md-5 col-xs-8 col-md-offset-1 contact-header">
					<h2>Contact</h2>
					<p>Vous avez besoin de nous contacter ? Une queston à poser ? Ecrivez nous.</p>
				</div>
				<div class="col-md-1 col-xs-4 img-container"><img src="assets/images/FLAT_Soleil.png"></div>
			</div>
			<div class="row form-container">
				<form action="contact.php" method="POST">
					<div class="col-md-6">
						<label for="name">Nom ou Raison Sociale</label>
						<input type="text" name="name" id="name">
						<label for="mail">Email</label>
						<input type="text" name="mail" id="mail">
						<label for="object">Objet</label>
						<input type="text" name="object" id="object">
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