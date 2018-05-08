<?php

$email_to = "info@4-deluxe.de";
$email_from = "delfi@4-deluxe.de";
$email_subject = "KatalogbestellungIch";
$date = new DateTime('now', new DateTimeZone('Europe/Moscow') );

if(isset($_POST['email']) && isset($_POST['telefon'])) {

    $name = $_POST['name'];
    $telefon = $_POST['telefon'];
    $email = $_POST['email'];
    $firma = $_POST['firma'];
    $model = $_POST['model'];
    $strabe = $_POST['strabe'];
    $plz = $_POST['plz'];
    $nachricht = $_POST['nachricht'];
    
    

    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
     
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message = "Kontaktanfrage Delfi Spa Whirlpool:\n\n";
    $email_message .= "Name, Vorname: ".clean_string($name)."\n";
    $email_message .= "Straße, Hausnummer: ".clean_string($strabe)."\n";
    $email_message .= "PLZ, Ort: ".clean_string($plz)."\n";
    $email_message .= "Telefon: ".clean_string($telefon)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Model: ".clean_string($model)."\n";
    $email_message .= "Firma: ".clean_string($firma)."\n";
    $email_message .= "Nachricht: ".clean_string($nachricht)."\n";
    if (isset($_POST['ausstellung'])) {
        $email_message .= "Bitte nennen Sie mir eine Ausstellung in meiner Nähe: ja\n";
    }
    if (isset($_POST['kontakt'])) {
        $email_message .= "Bitte nehmen Sie telefonisch mit mir Kontakt auf: ja\n";
    }
       
    $email_message .= "----------------------------\n\n";
    $email_message .= "IP: ".clean_string($ip)."\n";
    $email_message .= "Date: ".$date->format('Y-m-d H:i:s')."\n";
    
    $headers = 'From: '.$email_from."\r\n";
    $headers .= 'Reply-To: '.$email_from."\r\n";
    if (isset($_POST['kopie'])) {
        $headers .= 'Bcc: '.$email."\r\n";
    }
    $headers .= 'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    
    // Save to file
    $file = 'data.txt';
    $current = file_get_contents($file);
    $current .= $name.';'.$telefon.';'.$email.';'.$model.';'.$date->format('Y-m-d H:i:s').';'.PHP_EOL;
    file_put_contents($file, $current);


//    echo 'ok';
}