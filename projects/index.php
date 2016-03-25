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
	<link href="css/parallax.css" rel="stylesheet">
	<link href="css/unslider.css" rel="stylesheet">
	<link href="css/slidemenu.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
 
</head>


<body>

	<?php include('nav.php'); ?>

	<div id="main-container" class="container">
		<div class="banner">
			<img src="img/bannertest.png">
		</div>
		<div class="accordion">
			<a href="rush.php" class="accordion-bck">
				<div class="overlay overlay-bck active"></div>
				<img class="accordion-bck-img " src="img/group/flag2015.jpg">
			</a>

			<a href="rush.php" class="accordion-item active left" id="acc1" class="active" style="overflow:visible">
				<div class="accordion-text unselect">
					<h1>Rush&nbsp;2016</h1>
				</div>
			</a>
			
			<a href="rush.php#academics" class="accordion-item" id="acc2">
				<div class="accordion-text unselect">
					<h1>Academics</h1>
				</div>
				<div class="overlay"></div>
				<img class="accordion-img notfocus" src="img/cadbest.jpg">
			</a>

			<a href="rush.php#career" class="accordion-item" id="acc2">
				<div class="accordion-text unselect">
					<h1>Career</h1>
				</div>
				<div class="overlay"></div>
				<img class="accordion-img notfocus" src="img/panel.jpg">
			</a>
			
			<a href="rush.php#social" class="accordion-item right" id="acc3">
				<div class="accordion-text unselect">
					<h1>Social</h1>
				</div>
				<div class="overlay"></div>
				<img class="accordion-img notfocus" src="img/group/beach.jpg">
			</a>
		</div>

		<div class="accordion-mobile">
			<div class="automatic-slider" style="width:100%">
   			<ul>
   				<li class="slider-item" >
   					<a href="rush.php">
   						<h1>Rush</h1>
	   					<div class="slider-img" style="background-image:url('img/group/flag2015.jpg');"></div>
	   				</a>
					</li>
					<li class="slider-item" >
						<a href="rush.php#academics">
							<h1>Academics</h1>
	   					<div class="slider-img" style="background-image:url('img/cadbest.jpg');"></div>
	   				</a>
					</li>
					<li class="slider-item">
						<a href="rush.php#career">
							<h1>Career</h1>
	   					<div class="slider-img" style="background-image:url('img/panel.jpg');"></div>
	   				</a>
					</li>
					<li class="slider-item">
						<a href="rush.php#social">
							<h1>Social</h1>
	   					<div class="slider-img" style="background-image:url('img/group/beach.jpg');"></div>
	   				</a>
					</li>
   			</ul>
			</div>
		</div>
		
		<div class="col-xs-12">
			<div class="col-lg-6">
				<h3 align="center">Members in the News</h3>
				<h5 align="center"><BR></h5>
				<ul class="list-group">
					<li class="list-group-item">
						<span class="badge no-cell"><div style="display:inline;">Aerospace</div></span>
						<a href="http://www.umdrightnow.umd.edu/news/umd-led-team-advances-spacex-hyperloop-pod-competition" target="_blank">SpaceX Hyperloop Competition</a>
						<div class="brother-label">
							Brother David Hairumian
						</div>
					</li>
					<li class="list-group-item">
						<span class="badge no-cell"><div style="display:inline;">Hackathon</div></span>
						<a href="http://technical.ly/philly/2016/01/28/american-sign-language-app/" target="_blank">Students Create App That Can Read Sign Language</a>
						<div class="brother-label">
							Brother Shah-Ameer Wali
						</div>
					</li>
					<li class="list-group-item">
						<span class="badge no-cell"><div style="display:inline;">Materials</div></span>
						<a href="http://www.diamondbackonline.com/news/article_f5cdb692-f2b0-11e4-86f4-0b615b916582.php" target="_blank">Gemstone Team Builds Super-Strong Nanopaper</a>
						<div class="brother-label">
							Brother Jonathan Kagan
						</div>
					</li>
					<li class="list-group-item">
						<span class="badge no-cell"><div style="display:inline;">Computer Science</div></span>
						<a href="http://blogs.rhsmith.umd.edu/questpress/?p=2815" target="_blank">Rock Paper Scissors Through Machine Learning</a>
						<div class="brother-label">
							Brother Steven Gresh
						</div>
					</li>
					<li class="list-group-item">
						<span class="badge no-cell"><div style="display:inline;">Hackathon</div></span>
						<a href="http://devpost.com/software/the-electoral-roast" target="_blank">Website That Maps Election Related Tweets</a>
						<div class="brother-label">
							Brothers Cole Alban, Nick Hays & Alex Kyei
						</div>
					</li>
					
				</ul>

			</div>
			<div class="col-lg-6">
				<h3 align="center">Send us a message</h3>
					<div class="form-group">
						<label for="name">Name:</label>
						<input type="name" class="form-control" id="name">
					</div>
					<div class="form-group">
						<label for="email">Email Address:</label>
						<input type="email" class="form-control" id="email">
					</div>
					<div class="form-group">
					  <label for="comment">Message:</label>
					  <textarea class="form-control" rows="5" id="comment"></textarea>
					</div>
					<button class="btn btn-info" id="email-submit">Submit</button>
					<div style="display:none; opacity:0;" class="alert alert-success" role="alert">Success</div>
					<div style="display:none; opacity:0;" class="alert alert-danger" role="alert">Oops! Something went wrong.</div>

			</div>

			<div class="col-xs-12" style="text-align:center; margin-top:10px;">
				<h2>Click Below for the full 2016 Rush Schedule</h2>
				<a id="rush" href="schedule.php" class="btn btn-warning btn-lg">
					<img src="img/calendar179.png">
					Rush Schedule
				</a>
			</div>
		</div>
	</div>

	<?php include('footer.php'); ?>


	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slidemenu.js"></script>
	<script src="js/unslider-min.js"></script>

	<script>
	var accordionItem = $(".accordion-item");
	var accordionImg = $(".accordion-img");
	var accordionBckImg = $(".accordion-bck-img");
	var overlay = $(".overlay");
	/*$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('nav').addClass('shrink');
		} else {
			$('nav').removeClass('shrink');
		}
	});*/

	accordionItem.mouseover(function() {
		accordionItem.removeClass("active");
		overlay.removeClass("active");
		$(this).addClass("active");
	});

	$(".accordionBckImg, .accordion-item.left").mouseover(function() {
		accordionItem.removeClass("active");
		$(".accordion-item.left").addClass("active");
		$(".overlay.overlay-bck").addClass("active");
	});

	$('.automatic-slider').unslider({
		autoplay: true 
	});
	$( document ).ready(function(){
		if (navigator.userAgent.indexOf('Edge') !== -1 || navigator.appVersion.indexOf('Trident/') > 0 || navigator.userAgent.indexOf('MSIE') !== -1) {
		   alert('Hello, we apologize but some features currently do not display correctly on Microsoft Edge or Internet Explorer. For optimal performance, use another browser such as Firefox or Chrome.');
		}
		
	});
	
	$('#email-submit').click(function(){
		$('.alert-success').css('display','none');
		$('.alert-success').css('opacity','0');
		$('.alert-danger').css('display','none');
		$('.alert-danger').css('opacity','0');

		var data = {
		    name: $("#name").val(),
		    email: $("#email").val(),
		    message: $("#comment").val()
		};

		$.ajax({
		    type: "POST",
		    url: "email.php",
		    data: data,
		    success: function(data){
		    	alert(data);
		    	$('.alert-success').css('display','inline');
		        $('.alert-success').animate({
		        	opacity: 1
		        },1000);
		    },
		    error: function(){
		    	$('.alert-danger').css('display','inline');
		        $('.alert-danger').animate({
		        	opacity: 1
		        },1000);
		    }
		});

	});
	</script>

</body>
</html>