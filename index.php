
<html lang="en" hola_ext_inject="disabled"><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="favicon.ico">

<title>STEVEN GRESH</title>

<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">    
<link rel="stylesheet" href="css/style.css">


<style type="text/css"></style></head>


<body onload="startTime()">

	<div id="login" style="display:;">
		<div style="height:25%;">
		</div>
		<img id="login-pic" src="img/headshot.jpg">
		<div id="login-name">
			Steven Gresh
		</div>
		<div id="login-email">
			stvngrsh@gmail.com
		</div>
		<button id="login-button">
			Sign in
		</button>
	</div>

	<div id="main-bg" style="display:none">

		<div class="icon">
			<img class="icon-img" src="img/document.png">
			<div class="icon-text">
				Resume.docx
			</div>
		</div>

		<div id="start-menu" class="closed">
		</div>

		<div id="navbar">
			<img class="navbar-icon" id="start-icon" src="img/start-icon.png">
			<img class="navbar-icon" src="img/ie.png">
			<div id = "clock">
				<div id = "time">

				</div>
				<div id = "date">
					
				</div>
			</div>

		</div>

	</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<script>
	function startTime(){
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var year = date.getYear();
		var month = date.getMonth();
		var day = date.getDay();

		var time;
		var date_display = day+"/"+month+"/"+year;

		if(hour > 12){
			hour = hour - 12;
			time = hour+":"+minute+" PM";
		}
		else{
			time = hour+":"+minute+" AM";
		}
		document.getElementById('time').innerHTML = time;
		document.getElementById('date').innerHTML = date_display;

		var t = setTimeout(function(){
			startTime()
		},500);
	}
	
</script>
<script>
	var state = false;
	$(document).ready(function() {
		$('#login-button').click(function(e){
			$('#login').toggle();
			$('#main-bg').toggle();
		});

		$('#start-icon').click(function(e){
			if(state == false){
				$('#start-icon').addClass('selected');
				$('#start-menu').removeClass('closed');
				state = true;
			}
			else {
				$('#start-icon').removeClass('selected');
				$('#start-menu').addClass('closed');
				state = false;
			}
		});

		$(document).click(function (e) {
    		if(!$('#start-icon').is(e.target) && !$('#start-menu').is(e.target)) {
       			$('#start-icon').removeClass('selected');
				$('#start-menu').addClass('closed');
				state = false;
		    }
		});

	});
</script>



</body></html>