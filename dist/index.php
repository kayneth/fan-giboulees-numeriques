<?php
	include('header.php');
?>
	<section id="content">
	<!-- LOADER  -->
		<div class="loader">Chargement...</div>

		
		<nav id="portal" class="container">

			<div class="row"><!--
				Lien vers le festival
			--><ul id="festPortal" class="col-md-6 col-md-offset-1">
					<li class="decoPortal col-md-5 col-xs-12">
						<img src="assets/images/FLAT_Parapluie.png">
					</li>
					<li class="col-md-7">
						<h2>Le festival</h2>
						<p>Sortez votre parapluie et venez découvrir les Giboulées Numériques...</p>
						<a href="festival" class="btn">Voir plus <span class="hvr-icon-wobble-horizontal"></a>
					</li>
				</ul><!-- 
				Lien vers le programme 
			--><ul id="progPortal" class="col-md-3">
					<li class="decoPortal">
						<img src="assets/images/FLAT_Nuages.png">
					</li>
					<li>
						<p>Et on les prends pour quoi, nos jolis parapluies?</p>
						<h2>Programme<h2>
						<a href="programmation" class="btn">Par ici <span class="hvr-icon-wobble-horizontal"></span></a>
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
						<a href="intervenants" class="btn">Suivez les flèches <span class="hvr-icon-wobble-horizontal"></a>
					</li>
				</ul><!--
				Lien vers Contact
			--><ul id="conPortal" class="col-md-6">
					<li class="col-md-7">
						<p>D'accord, c'est bien, mais c'est où les Giboulées Numériques ?</p>
						<p>Et si on a une question ?</p>
						<h2>Contact</h2>
						<a href="contact" class="btn">Par là <span class="hvr-icon-wobble-horizontal"></a>
					</li>
					<li class="decoPortal col-md-5">
						<img src="assets/images/FLAT_Soleil.png">
					</li>
				</ul><!--
				Lien vers Coulisses
			--><ul id="couPortal" class="col-md-6 col-md-offset-3">
					<li class="col-md-12">
						<p>Vous n'auriez pas vu une girafe passer, par hasard ?</p>
						<h2>Les Coulisses</h2>
						<a href="coulisses" class="btn">Entrez-y <span class="hvr-icon-wobble-horizontal"></a>
					</li>
				</ul>
			</div>
		</nav>
	</section>

	<script type="text/javascript">
		var active = "";
	</script>

<?php
	include('footer.php');
?>
