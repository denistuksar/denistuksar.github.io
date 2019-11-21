<?php
// Prazna polja, validiranje maila
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Kreiranje maila i slanje
$to = "denis.tuksar@gmail.com";
$subject = "Portfolio kontaktna forma:  $name";
$body = "Primili ste novu poruku s vaše web stranice.\n\n"."Detalji:\n\Ime: $name\n\E-mail: $email\n\Poruka:\n$message";
$header = "From: noreply@denistuksar.github.io\n"; 
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
