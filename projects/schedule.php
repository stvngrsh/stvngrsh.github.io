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
		<h2 style="margin-top:50px;">Spring 2016 Rush Schedule</h2>
		<h4>Events subject to change. Check the <a target="_blank" href="https://www.facebook.com/events/1669893916603478/">Facebook</a> event for the most up to date information</h4>
		<div class="list-group">
			<div class="list-group-item active">
				<p style="font-size: 12pt;">Rush Chair: Justin Layton <BR>
				Cell: (609) - 929 - 4274<BR>
				Email: jlayton@terpmail.umd.edu
				</p>
			</div>
			<div class="list-group-item" id="s_1">
				<h3>IFC Meet the Greeks</h3>
				<p>Sunday, January 31st - 6:00 to 8:00 pm</p>
				<a href="https://www.google.com/maps/place/Adele+H.+Stamp+Student+Union/@38.9884687,-76.9472956,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7c4065ace9699:0xdc2bb57f0c8b153c" target="_blank">
					<img src="img/pin56.png">Stamp Grand Ballroom
				</a>
			</div>
			<div class="list-group-item" id="s_2">
				<h3>Meet the Brothers</h3>
				<p>Monday, February 1st - 3:00 to 6:00 pm</p>
				<a href="https://www.google.com/maps/place/J.M.+Patterson+Bldg,+4356+Stadium+Dr,+College+Park,+MD+20742/@38.9905044,-76.9424242,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7c6a2623d91e7:0xdcda4023210ef4ca" target="_blank">
					<img src="img/pin56.png">JMP 3108 (Fire Protection Conference Room)
				</a>
			</div>
			<div class="list-group-item" id="s_3">
				<h3>Video Game Night</h3>
				<p>Tuesday, February 2nd - 7:00 to 10:00 pm</p>
				<a href="https://www.google.com/maps/place/8809+38th+Ave,+College+Park,+MD+20740/@39.0005014,-76.948422,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7c420c59916b9:0xecca5dd23634dfd5" target="_blank">
					<img src="img/pin56.png">8809 38th Avenue
				</a>
			</div>
			<div class="list-group-item" id="s_4">
				<h3>Stogies & Hoagies</h3>
				<p>Thursday, February 4th - 7:00 to 10:00 pm</p>
				<a href="https://www.google.com/maps/place/4710+Quebec+St,+College+Park,+MD+20740/@38.9948651,-76.9332527,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7c6a7c99227db:0xbdb7a1b42b947671" target="_blank">
					<img src="img/pin56.png">4710 Quebec Street
				</a>
			</div>
			<div class="list-group-item">
				<h3>Invite Only Events</h3>
				<p>February 5th, 6th & 7th</p>
				<a href="https://www.google.com/maps/place/4710+Quebec+St,+College+Park,+MD+20740/@38.9948651,-76.9332527,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7c6a7c99227db:0xbdb7a1b42b947671" target="_blank">
					<img src="img/pin56.png">8809 38th Avenue
				</a>
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