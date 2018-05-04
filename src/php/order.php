<?php

$email_to = "info@4-deluxe.de";
$email_from = "delfy@4-deluxe.de";
$email_subject = "Delfy Spa";
$date = new DateTime('now', new DateTimeZone('Europe/Moscow') );

if(isset($_POST['email']) && isset($_POST['telefon'])) {

    $name = $_POST['name'];
    $telefon = $_POST['telefon'];
    $email = $_POST['email'];
    $model = $_POST['model'];
    $acril = $_POST['acril'];
    $cabinet = $_POST['cabinet'];
    $cover = $_POST['cover'];
    $strabe = $_POST['strabe'];
    $plz = $_POST['plz'];
    $nachricht = $_POST['nachricht'];
    $whirlpool = $_POST['whirlpool'];
    $einstiegstreppe = $_POST['einstiegstreppe'];
    $lifter = $_POST['lifter'];
    $bayrol = $_POST['bayrol'];

    

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
 
    $email_message = "Information:\n\n";
    $email_message .= "Name, Worname: ".clean_string($name)."\n";
    $email_message .= "Telefon: ".clean_string($telefon)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Model: ".clean_string($model)."\n";
    $email_message .= "Wannenfarbe Acryl: ".clean_string($acril)."\n";
    $email_message .= "Außenverkleidung:: ".clean_string($cabinet)."\n";
    $email_message .= "Cover colors: ".clean_string($cover)."\n";
    $email_message .= "Straße, Hausnummer: ".clean_string($strabe)."\n";
    $email_message .= "PLZ, Ort: ".clean_string($plz)."\n";
    $email_message .= "Nachricht: ".clean_string($nachricht)."\n";
    if (isset($_POST['whirlpool'])) {
        $email_message .= "Abdeckung für den Whirlpool : ja\n";
    }
    if (isset($_POST['einstiegstreppe'])) {
        $email_message .= "Einstiegstreppe: ja\n";
    }
    if (isset($_POST['lifter'])) {
        $email_message .= "Lifter für Abdeckung: ja\n";
    }
    if (isset($_POST['bayrol'])) {
        $email_message .= "Starter-Paket 'Bayrol Pflegeprodukte': ja\n";
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