<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (
      !empty($_POST['name']) &&
      !empty($_POST['prenom']) &&
      !empty($_POST['subject']) &&
      !empty($_POST['email']) &&
      !empty($_POST['message'])
   ) {
      // Récupérer les données du formulaire et nettoyer
      $name = htmlspecialchars($_POST['name']);
      $prenom = htmlspecialchars($_POST['prenom']);
      $subject = htmlspecialchars($_POST['subject']);
      $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
      $message = htmlspecialchars($_POST['message']);

      // Adresse email sur laquelle vous souhaitez recevoir les messages
      $to = "contact@mathys-cognefoucault.fr";
      // $to = "contact@thirtytwo-agency.fr";

      // Le contenu de l'email
      $email_content = "Nom: $name\n";
      $email_content .= "Prénom: $prenom\n";
      $email_content .= "Sujet: $subject\n";
      $email_content .= "Email: $email\n";
      $email_content .= "Message:\n$message\n";

      // En-têtes de l'email
      $headers = "From: $to\r\n";
      $headers .= "Reply-To: $email\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

      // Envoyer l'email avec le protocole SMTP
      $subject = "PORFOFOLIO / $name - Nouveau message depuis le formulaire de contact";
      mail($to, $subject, $email_content, $headers, "-f $email");

      http_response_code(200);
      // echo "Le formulaire a été soumis avec succès."; 
   } else {
      http_response_code(400);
      // echo "Veuillez remplir tous les champs du formulaire.";
   }
}
