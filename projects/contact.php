<html lang="en">

<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<meta name="description" content="SPD Beta-Iota Website">
	<meta name="author" content="Steven Gresh">
	<link rel="icon" href="favicon.ico">

	<title>Sigma Phi Delta UMD</title>


	<!-- Bootstrap core CSS -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/jquery-ui.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/slidemenu.css" rel="stylesheet">

</head>


<body>

	<?php include('nav.php'); ?>

	<div class="container" style="text-align:center">
		<h2 style="margin-top:75px;">Contact Sigma Phi Delta</h2>
		<h4>For national chapter information please visit the website <a target="_blank" href="http://sigmaphidelta.org/">here</a> </h4>
		<h4>Click this link to see our exec board members <a href="about.php#exec">Link</a> </h4>
		<div class="list-group">
			<div class="list-group-item">
				<h3>Chapter President</h3>
				<h4>Jonathan Kagan | 240-205-1580 | jkagan95@gmail.com</h4>
			</div>
			<div class="list-group-item">
				<h3>Rush Chair</h3>
				<h4>Justin Layton | 609-929-4274 | jlayton@umd.edu</h4>
			</div>
			<div class="list-group-item">
				<h3>Social Chair</h3>
				<h4>David Hairumian | dhairumian@gmail.com</h4>
			</div>
			<div class="list-group-item">
				<h3>Fundraising Chair</h3>
				<h4>Gary McKee | garymckee123@live.com</h4>
			</div>
			<div class="list-group-item">
				<h3>Philantropy Chair</h3>
				<h4>Steven Davis | garymckee123@live.com</h4>
			</div>
			<div class="list-group-item">
				<h3>Webmaster</h3>
				<h4>Steven Gresh | stvngrsh@gmail.com</h4>
			</div>
		</div>
	</div>

	<?php include('footer.php'); ?>

	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slidemenu.js"></script>


	<script>
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('nav, .navbar-brand, #nav-container').addClass('shrink');
		} else {
			$('nav, .navbar-brand, #nav-container').removeClass('shrink');
		}
	});

	</script>

</body>
</html>