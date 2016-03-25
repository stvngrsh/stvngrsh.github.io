<?php
require "PHPMailerAutoload.php";
require('class.phpmailer.php');
PHPMailerAutoload("smtp");

$mail = new PHPMailer;
$to = 'stvngrsh@gmail.com';
if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$body = <<<BODY
$message\n<br>
\n<br>
\n<br>
Contact Info \n<br>
Name: $name \n<br>
Email: $email 
BODY;
}

$mail->SMTPDebug = 1;
$mail->isSMTP();
$mail->HOST = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'stvngrsh@gmail.com';
$mail->Password = '302757goog';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->From = $email;
$mail->FromName = $name;
$mail->addAddress($to);
$mail->addReplyTo($email);
$mail->isHTML(true);

$mail->Subject = 'SPD Website Email';
$mail->Body = $body;
$mail->AltBody = $body;

if(!$mail->Send()) {
	$error = 'Mail error: '.$mail->ErrorInfo; 
	return false;
} else {
	$error = 'Message sent!';
	return true;
}
?>
