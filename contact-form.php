<?php
    $name= $_Post['name'];
    $visitor_email= $_Post['email'];
    $message= $_Post['message'];

    $email_from = 'pmavoider@yahoo.com';

    $email_subject = "new contact about crypto";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User Message: $name.\n";

    $to = "pmavoider@yahoo.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");
