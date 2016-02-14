<?php
	include('header.php');
?>
	<section id="content">
		<nav id="portal" class="container">

			<div class="row"><!--
				Lien vers le festival
			--><ul id="festPortal" class="col-md-6 col-md-offset-1">
					<li class="decoPortal col-md-5">
						<img src="assets/images/FLAT_Parapluie.png">
					</li>
					<li class="col-md-7">
						<h2>Le festival</h2>
						<p>Sortez votre parapluie et venez découvrir les Giboulées Numériques...</p>
						<a href="festival.php" class="btn">Voir plus</a>
					</li>
				</ul><!-- 
				Lien vers le programme 
			--><ul id="progPortal" class="col-md-4">
					<li class="decoPortal">
						<img src="assets/images/FLAT_Nuages.png">
					</li>
					<li>
						<p>Et on les prends pour quoi, nos jolis parapluies?</p>
						<h2>Programme<h2>
						<a href="programmation.php" class="btn">Par ici</a>
					</li>
				</ul>
			</div>

			<div class="row"><!--
			Lien vers les Intervenants
			--><ul id="interPortal" class="col-md-6">
					<li class="decoPortal">
						<img src="assets/images/FLAT_Gouttes.png">
					</li>
					<li>
						<p>Hm... Mais du coup qui est-ce qu'on va voir ?</p>
						<h2>Intervenants</h2>
						<a href="intervenants.php" class="btn">Suivez les flèches</a>
					</li>
				</ul><!--
				Lien vers Contact
			--><ul id="conPortal" class="col-md-6">
					<li class="col-md-7">
						<p>D'accord, c'est bien, mais c'est où les Giboulées Numériques ?</p>
						<p>Et si on a une question ?</p>
						<h2>Contact</h2>
						<a href="contact.php" class="btn">Par là</a>
					</li>
					<li class="decoPortal col-md-5">
						<img src="assets/images/FLAT_Soleil.png">
					</li>
				</ul>
			</div>
		</nav>
	</section>
<?php
	include('footer.php');
?>
