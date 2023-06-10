<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $title = $_POST["title"];
  $message = $_POST["message"];
  
  // Compose the email
  $to = "nicholasrobinson@nicksprojects.co";
  $subject = $title;
  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Message: $message";
  $headers = "From: $email";

  // Send the email
  $success = mail($to, $subject, $body, $headers);

  // Handle the success or failure
  if ($success) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>
